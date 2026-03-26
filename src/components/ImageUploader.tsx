"use client";

import { useCallback, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useDropzone } from "react-dropzone";
import imageCompression from "browser-image-compression";
import { Upload, Loader2, Image as ImageIcon, Lock, Images } from "lucide-react";
import BatchUploader from "./BatchUploader";

const FREE_DAILY_LIMIT = 3;

interface ImageUploaderProps {
  onImageProcessed: (original: string, processed: string) => void;
  onError: (error: string) => void;
}

export default function ImageUploader({
  onImageProcessed,
  onError,
}: ImageUploaderProps) {
  const { data: session } = useSession();
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState("");
  const [remaining, setRemaining] = useState(FREE_DAILY_LIMIT);
  const [limitReached, setLimitReached] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [batchMode, setBatchMode] = useState(false);

  useEffect(() => {
    const email = session?.user?.email;
    const url = email ? `/api/usage?email=${encodeURIComponent(email)}` : "/api/usage";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRemaining(data.remaining);
        setLimitReached(!data.allowed);
        setIsPro(data.isPro || false);
        setLoaded(true);
      })
      .catch(() => {
        setLoaded(true);
      });
  }, [session]);

  const processImage = async (file: File) => {
    if (limitReached) return;

    setIsProcessing(true);
    setProgress("Compressing image...");

    try {
      const compressedFile = await imageCompression(file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1536,
        useWebWorker: true,
        initialQuality: 0.85,
      });

      const originalUrl = URL.createObjectURL(file);
      setProgress("Removing background...");

      const reader = new FileReader();
      const base64Promise = new Promise<string>((resolve) => {
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(compressedFile);
      });
      const base64Data = await base64Promise;

      const response = await fetch("/api/remove-bg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: base64Data,
          email: session?.user?.email || undefined,
        }),
      });

      if (response.status === 429) {
        setLimitReached(true);
        setRemaining(0);
        onError("Daily free limit reached. Upgrade to Pro for unlimited access.");
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to remove background");
      }

      const result = await response.json();

      if (typeof result.remaining === "number") {
        setRemaining(result.remaining);
        setIsPro(result.isPro || false);
        if (result.remaining <= 0 && !result.isPro) {
          setLimitReached(true);
        }
      }

      onImageProcessed(originalUrl, result.image);
    } catch (err) {
      onError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setIsProcessing(false);
      setProgress("");
    }
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        if (file.size > 20 * 1024 * 1024) {
          onError("File size must be less than 20MB");
          return;
        }
        processImage(file);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [limitReached]
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
    },
    maxFiles: 1,
    disabled: isProcessing || limitReached,
    noClick: false,
    noKeyboard: false,
  });

  // Loading state
  if (!loaded) {
    return (
      <div className="border-2 border-dashed border-[var(--border)] rounded-2xl p-12 text-center">
        <Loader2 className="w-8 h-8 text-[var(--muted)] animate-spin mx-auto" />
      </div>
    );
  }

  // Batch mode (Pro only)
  if (batchMode && isPro) {
    return (
      <div>
        <BatchUploader />
        <button
          type="button"
          onClick={() => setBatchMode(false)}
          className="mt-3 w-full px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          ← Back to single upload
        </button>
      </div>
    );
  }

  // Limit reached
  if (limitReached) {
    return (
      <div className="border-2 border-dashed border-[var(--border)] rounded-2xl p-12 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
            <Lock className="w-8 h-8 text-orange-500" />
          </div>
          <div>
            <p className="text-lg font-semibold">Daily free limit reached</p>
            <p className="text-sm text-[var(--muted)] mt-1">
              You&apos;ve used all 3 free removals for today. Upgrade to Pro for unlimited access.
            </p>
          </div>
          <div className="mt-2 px-6 py-3 bg-[var(--primary)]/20 text-[var(--primary)] rounded-xl font-medium border border-[var(--primary)]/30">
            Pro Plan — Coming Soon
          </div>
          <p className="text-xs text-[var(--muted)]">
            Free uses reset daily at midnight UTC
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Usage counter */}
      {isPro ? (
        <div className="mb-3 text-sm text-center">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-50 text-[var(--primary)] rounded-full font-medium">
            ✨ Pro — Unlimited
          </span>
        </div>
      ) : (
        <div className="mb-3 text-sm text-[var(--muted)] text-center">
          <span className="font-medium text-[var(--foreground)]">{remaining}</span>
          {" "}of 3 free uses remaining today
          {remaining <= 1 && (
            <span className="ml-2">
              ·{" "}
              <a href="/pricing" className="text-[var(--primary)] underline">
                Upgrade for unlimited
              </a>
            </span>
          )}
        </div>
      )}

      <div
        {...getRootProps()}
        className={`
          relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer
          transition-smooth
          ${isDragActive ? "dropzone-active border-[var(--primary)] bg-indigo-50/50" : "border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--secondary)]"}
          ${isProcessing ? "pointer-events-none opacity-70" : ""}
        `}
      >
        <input {...getInputProps()} />

        {isProcessing ? (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-12 h-12 text-[var(--primary)] animate-spin" />
            <div>
              <p className="text-lg font-semibold">{progress}</p>
              <p className="text-sm text-[var(--muted)] mt-1">
                This usually takes 5-10 seconds
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-[var(--secondary)] rounded-full flex items-center justify-center">
              {isDragActive ? (
                <ImageIcon className="w-8 h-8 text-[var(--primary)]" />
              ) : (
                <Upload className="w-8 h-8 text-[var(--muted)]" />
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">
                {isDragActive
                  ? "Drop your image here"
                  : "Upload an image to remove background"}
              </p>
              <p className="text-sm text-[var(--muted)] mt-1">
                Drag &amp; drop or click to browse · JPG, PNG, WebP · Max 20MB
              </p>
            </div>
          </div>
        )}
      </div>
      {!isProcessing && (
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              open();
            }}
            className="w-full px-6 py-4 bg-[var(--primary)] text-white rounded-xl font-medium hover:bg-[var(--primary-hover)] transition-smooth text-lg"
          >
            Upload Image
          </button>
          {isPro ? (
            <button
              type="button"
              onClick={() => setBatchMode(true)}
              className="w-full px-6 py-4 bg-[var(--secondary)] text-[var(--foreground)] rounded-xl font-medium hover:bg-[var(--border)] transition-smooth text-lg flex items-center justify-center gap-2 border border-[var(--border)]"
            >
              <Images className="w-5 h-5" />
              Batch Upload
            </button>
          ) : (
            <a
              href="/pricing"
              className="w-full px-6 py-4 bg-[var(--secondary)] text-[var(--foreground)] rounded-xl font-medium hover:bg-[var(--border)] transition-smooth text-lg flex items-center justify-center gap-2 border border-[var(--border)]"
            >
              <Images className="w-5 h-5" />
              Batch Upload
              <span className="text-xs px-1.5 py-0.5 bg-[var(--primary)] text-white rounded-full font-bold">PRO</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

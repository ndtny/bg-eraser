"use client";

import { useCallback, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useDropzone } from "react-dropzone";
import imageCompression from "browser-image-compression";
import { Upload, Loader2, Download, CheckCircle2, XCircle, Images, Trash2 } from "lucide-react";

interface BatchItem {
  id: string;
  file: File;
  originalUrl: string;
  processedImage: string | null;
  status: "pending" | "processing" | "done" | "error";
  error?: string;
}

interface BatchUploaderProps {
  initialFiles?: File[];
}

export default function BatchUploader({ initialFiles }: BatchUploaderProps = {}) {
  const { data: session } = useSession();
  const [items, setItems] = useState<BatchItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedCount, setProcessedCount] = useState(0);
  const [initialized, setInitialized] = useState(false);

  // Load initial files from parent (e.g. dropped onto single uploader)
  useEffect(() => {
    if (initialized || !initialFiles || initialFiles.length === 0) return;
    setInitialized(true);
    const newItems: BatchItem[] = initialFiles.slice(0, 20).map((file) => ({
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      file,
      originalUrl: URL.createObjectURL(file),
      processedImage: null,
      status: "pending" as const,
    }));
    setItems(newItems);
  }, [initialFiles, initialized]);

  const processOne = async (item: BatchItem): Promise<BatchItem> => {
    try {
      const compressed = await imageCompression(item.file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1536,
        useWebWorker: true,
        initialQuality: 0.85,
      });

      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(compressed);
      });

      const res = await fetch("/api/remove-bg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: base64,
          email: session?.user?.email || undefined,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed");
      }

      const result = await res.json();
      return { ...item, processedImage: result.image, status: "done" };
    } catch (e) {
      return {
        ...item,
        status: "error",
        error: e instanceof Error ? e.message : "Failed",
      };
    }
  };

  const processAll = async () => {
    setIsProcessing(true);
    setProcessedCount(0);

    const pending = items.filter((i) => i.status === "pending" || i.status === "error");

    // Process sequentially (avoid overloading HF Space)
    for (let i = 0; i < pending.length; i++) {
      const item = pending[i];
      setItems((prev) =>
        prev.map((p) => (p.id === item.id ? { ...p, status: "processing" } : p))
      );

      const result = await processOne(item);

      setItems((prev) =>
        prev.map((p) => (p.id === result.id ? result : p))
      );
      setProcessedCount(i + 1);
    }

    setIsProcessing(false);
  };

  const downloadOne = (item: BatchItem) => {
    if (!item.processedImage) return;
    const link = document.createElement("a");
    link.href = item.processedImage;
    link.download = `bg-removed-${item.file.name.replace(/\.[^/.]+$/, "")}.png`;
    link.click();
  };

  const downloadAll = () => {
    items.filter((i) => i.status === "done" && i.processedImage).forEach((item) => {
      setTimeout(() => downloadOne(item), 100);
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearAll = () => {
    setItems([]);
    setProcessedCount(0);
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const maxFiles = 20;
      const filesToAdd = acceptedFiles.slice(0, maxFiles - items.length);

      const newItems: BatchItem[] = filesToAdd.map((file) => ({
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        file,
        originalUrl: URL.createObjectURL(file),
        processedImage: null,
        status: "pending" as const,
      }));

      setItems((prev) => [...prev, ...newItems]);
    },
    [items.length]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
    },
    maxFiles: 20,
    disabled: isProcessing,
  });

  const doneCount = items.filter((i) => i.status === "done").length;
  const errorCount = items.filter((i) => i.status === "error").length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Images className="w-5 h-5 text-[var(--primary)]" />
          <span className="font-semibold">Batch Processing</span>
          <span className="text-xs px-2 py-0.5 bg-[var(--primary)] text-white rounded-full font-bold">PRO</span>
        </div>
        {items.length > 0 && (
          <button
            onClick={clearAll}
            disabled={isProcessing}
            className="text-sm text-[var(--muted)] hover:text-red-500 transition-colors flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear All
          </button>
        )}
      </div>

      {/* Drop zone */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-smooth
          ${isDragActive ? "border-[var(--primary)] bg-indigo-50/50" : "border-[var(--border)] hover:border-[var(--primary)]"}
          ${isProcessing ? "pointer-events-none opacity-50" : ""}
        `}
      >
        <input {...getInputProps()} />
        <Upload className="w-8 h-8 text-[var(--muted)] mx-auto mb-2" />
        <p className="text-sm font-medium">
          {isDragActive ? "Drop images here" : "Drop up to 20 images or click to browse"}
        </p>
        <p className="text-xs text-[var(--muted)] mt-1">JPG, PNG, WebP · Max 20MB each</p>
      </div>

      {/* File list */}
      {items.length > 0 && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="relative rounded-xl border border-[var(--border)] overflow-hidden group"
              >
                <div className="aspect-square bg-[var(--secondary)]">
                  <img
                    src={item.status === "done" && item.processedImage ? item.processedImage : item.originalUrl}
                    alt={item.file.name}
                    className={`w-full h-full object-cover ${item.status === "done" ? "checkerboard" : ""}`}
                  />
                </div>

                {/* Status overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.status === "processing" && (
                    <div className="bg-black/50 rounded-full p-2">
                      <Loader2 className="w-6 h-6 text-white animate-spin" />
                    </div>
                  )}
                  {item.status === "done" && (
                    <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                  {item.status === "error" && (
                    <div className="absolute top-2 right-2 bg-red-500 rounded-full p-1" title={item.error}>
                      <XCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Actions on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between px-2 py-1.5">
                  <span className="text-white text-xs truncate max-w-[70%]">{item.file.name}</span>
                  <div className="flex items-center gap-1">
                    {item.status === "done" && (
                      <button onClick={() => downloadOne(item)} className="p-1 hover:bg-white/20 rounded">
                        <Download className="w-3.5 h-3.5 text-white" />
                      </button>
                    )}
                    {!isProcessing && (
                      <button onClick={() => removeItem(item.id)} className="p-1 hover:bg-white/20 rounded">
                        <XCircle className="w-3.5 h-3.5 text-white" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="text-sm text-[var(--muted)]">
              {isProcessing ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing {processedCount}/{items.filter((i) => i.status !== "done").length + processedCount}...
                </span>
              ) : (
                <span>
                  {items.length} image{items.length > 1 ? "s" : ""}
                  {doneCount > 0 && <span className="text-green-600"> · {doneCount} done</span>}
                  {errorCount > 0 && <span className="text-red-500"> · {errorCount} failed</span>}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {doneCount > 1 && !isProcessing && (
                <button
                  onClick={downloadAll}
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--secondary)] rounded-lg text-sm font-medium hover:bg-[var(--border)] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download All ({doneCount})
                </button>
              )}
              {items.some((i) => i.status === "pending" || i.status === "error") && (
                <button
                  onClick={processAll}
                  disabled={isProcessing}
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white rounded-lg text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors disabled:opacity-50"
                >
                  {isProcessing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Images className="w-4 h-4" />
                  )}
                  {isProcessing ? "Processing..." : "Remove All Backgrounds"}
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Download, RotateCcw, Eye, EyeOff } from "lucide-react";
import { useI18n } from "@/i18n/context";

interface ImagePreviewProps {
  originalImage: string;
  processedImage: string;
  onReset: () => void;
}

export default function ImagePreview({
  originalImage,
  processedImage,
  onReset,
}: ImagePreviewProps) {
  const { t } = useI18n();
  const [showOriginal, setShowOriginal] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = processedImage;
    link.download = "bg-eraser-result.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };

  return (
    <div className="space-y-6">
      {/* Before/After Comparison Slider */}
      <div
        className="relative w-full aspect-video max-h-[500px] rounded-2xl overflow-hidden border border-[var(--border)] select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Processed Image (background - checkerboard) */}
        <div className="absolute inset-0 checkerboard">
          <img
            src={processedImage}
            alt="Processed - background removed"
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>

        {/* Original Image (foreground - clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={originalImage}
            alt="Original image"
            className="w-full h-full object-contain"
            style={{
              width: `${(100 / sliderPosition) * 100}%`,
              maxWidth: "none",
            }}
            draggable={false}
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 cursor-ew-resize flex items-center justify-center"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
        >
          <div className="w-1 h-full bg-white shadow-lg" />
          <div className="absolute w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6366f1"
              strokeWidth="2"
            >
              <path d="M8 3l-5 9 5 9" />
              <path d="M16 3l5 9-5 9" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
          {t("original")}
        </div>
        <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
          {t("processed")}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-xl font-medium hover:bg-[var(--primary-hover)] transition-smooth"
        >
          <Download className="w-5 h-5" />
          {t("download")} PNG
        </button>

        <button
          onClick={() => setShowOriginal(!showOriginal)}
          className="flex items-center gap-2 px-6 py-3 bg-[var(--secondary)] rounded-xl font-medium hover:bg-[var(--border)] transition-smooth"
        >
          {showOriginal ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
          {showOriginal ? t("processed") : t("original")}
        </button>

        <button
          onClick={onReset}
          className="flex items-center gap-2 px-6 py-3 bg-[var(--secondary)] rounded-xl font-medium hover:bg-[var(--border)] transition-smooth"
        >
          <RotateCcw className="w-5 h-5" />
          {t("processAnother")}
        </button>
      </div>

      {/* Full preview toggle */}
      {showOriginal && (
        <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
          <img
            src={originalImage}
            alt="Original"
            className="w-full object-contain max-h-[500px]"
          />
        </div>
      )}
    </div>
  );
}

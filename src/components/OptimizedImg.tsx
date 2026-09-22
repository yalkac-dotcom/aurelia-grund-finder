import { useState, useRef, useEffect, ImgHTMLAttributes } from "react";
import { ImageOff } from "lucide-react";

interface OptimizedImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** If true, load eagerly (for above-the-fold hero images) */
  priority?: boolean;
  /** Optional srcSet for responsive images */
  srcSet?: string;
  /** Optional sizes attribute for responsive images */
  sizes?: string;
  /** Short caption shown inside the placeholder when the image cannot be loaded */
  fallbackLabel?: string;
  /** Unified Aurelia colour grading: default subtle tone, "soft" lighter, "none" untouched */
  tone?: "default" | "soft" | "none";
}

const OptimizedImg = ({
  priority = false,
  className,
  src,
  alt,
  srcSet,
  sizes,
  fallbackLabel,
  tone = "default",
  ...props
}: OptimizedImgProps) => {
  const toneClass = tone === "none" ? "" : tone === "soft" ? "img-tone-soft" : "img-tone";
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setFailed(false);
    setLoaded(false);
  }, [src]);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    if (el.complete) {
      if (el.naturalWidth === 0) setFailed(true);
      else setLoaded(true);
    }
  }, [src]);

  const hasSrc = typeof src === "string" && src.trim().length > 0;

  if (!hasSrc || failed) {
    return (
      <div
        role="img"
        aria-label={alt ?? fallbackLabel ?? ""}
        className={`flex flex-col items-center justify-center gap-2 bg-muted text-muted-foreground ${className ?? ""}`}
        style={props.style}
      >
        <ImageOff size={22} aria-hidden="true" className="opacity-60" />
        {fallbackLabel ? (
          <span className="px-3 text-center text-[0.72rem] leading-snug opacity-80">{fallbackLabel}</span>
        ) : null}
      </div>
    );
  }


  // Priority images render immediately (no fade) so they can serve as LCP without delay.
  if (priority) {
    return (
      <img
        ref={imgRef}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt ?? ""}
        loading="eager"
        decoding="sync"
        {...({ fetchpriority: "high" } as React.HTMLAttributes<HTMLImageElement>)}
        className={`${className ?? ""} ${toneClass}`}
        onError={() => setFailed(true)}
        {...props}
      />
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt ?? ""}
      loading="lazy"
      decoding="async"
      {...({ fetchpriority: "auto" } as React.HTMLAttributes<HTMLImageElement>)}
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
      className={`${className ?? ""} ${toneClass} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      {...props}
    />
  );
};

export default OptimizedImg;
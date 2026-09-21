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
}

const OptimizedImg = ({
  priority = false,
  className,
  src,
  alt,
  srcSet,
  sizes,
  fallbackLabel,
  ...props
}: OptimizedImgProps) => {
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
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt ?? ""}
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        className={className}
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
      fetchPriority="auto"
      onLoad={() => setLoaded(true)}
      className={`${className ?? ""} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      {...props}
    />
  );
};

export default OptimizedImg;
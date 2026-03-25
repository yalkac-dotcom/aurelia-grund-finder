import { useState, useRef, useEffect, ImgHTMLAttributes } from "react";

interface OptimizedImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** If true, load eagerly (for above-the-fold hero images) */
  priority?: boolean;
  /** Optional srcSet for responsive images */
  srcSet?: string;
  /** Optional sizes attribute for responsive images */
  sizes?: string;
}

const OptimizedImg = ({
  priority = false,
  className,
  src,
  alt,
  srcSet,
  sizes,
  ...props
}: OptimizedImgProps) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt ?? ""}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      onLoad={() => setLoaded(true)}
      className={`${className ?? ""} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      {...props}
    />
  );
};

export default OptimizedImg;
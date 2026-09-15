"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./about.module.scss";

export default function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div 
        className={styles.galleryThumb} 
        onClick={() => setIsOpen(true)}
      >
        <Image 
          src={src} 
          alt={alt || "Gallery image"} 
          fill 
          style={{ objectFit: "cover" }} 
          sizes="320px"
        />
      </div>

      {isOpen && (
        <div 
          className={styles.lightbox} 
          onClick={() => setIsOpen(false)}
        >
          <div className={styles.lightboxContent}>
            <Image 
              src={src} 
              alt={alt || "Gallery image"} 
              fill 
              style={{ objectFit: "contain" }} 
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}

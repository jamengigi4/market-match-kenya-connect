
import React, { useState, useRef, useEffect } from 'react';

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const ProtectedImage: React.FC<ProtectedImageProps> = ({ 
  src, 
  alt, 
  className = "",
  width,
  height 
}) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Create a canvas-based image to prevent easy downloading
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw image to canvas
      ctx.drawImage(img, 0, 0);
      
      // Add watermark overlay (optional protection)
      ctx.globalAlpha = 0.1;
      ctx.fillStyle = '#000000';
      ctx.font = '20px Arial';
      ctx.fillText('Market Match', 10, 30);
      ctx.globalAlpha = 1;
      
      // Convert to blob URL (harder to trace)
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          setImageSrc(url);
        }
      }, 'image/jpeg', 0.9);
    };
    
    img.src = src;
    
    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, [src]);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault(); // Disable right-click
    return false;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault(); // Disable drag
    return false;
  };

  const handleSelectStart = (e: React.SyntheticEvent) => {
    e.preventDefault(); // Disable text selection
    return false;
  };

  return (
    <div className="relative inline-block">
      <canvas
        ref={canvasRef}
        style={{ display: 'none' }}
      />
      {imageSrc && (
        <img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          className={`select-none ${className}`}
          width={width}
          height={height}
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
          onSelectStart={handleSelectStart}
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            WebkitTouchCallout: 'none',
            WebkitUserDrag: 'none',
            KhtmlUserSelect: 'none'
          } as React.CSSProperties}
        />
      )}
      {/* Invisible overlay to prevent right-click */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: 'transparent',
          zIndex: 1
        }}
      />
    </div>
  );
};

export default ProtectedImage;

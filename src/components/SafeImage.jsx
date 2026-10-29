import React, { useState } from 'react';
import { Coffee } from 'lucide-react';

export default function SafeImage({
  src,
  alt,
  className = '',
  aspectRatio = '',
  loading = 'lazy',
  fetchPriority,
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#F0EBE2] ${aspectRatio} ${className}`}>
      {/* Skeleton / Ambient backdrop */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#EFE9DF] animate-pulse" />
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#F0EBE2] text-[#85866A]">
          <Coffee className="w-8 h-8 mb-2 opacity-60" strokeWidth={1.5} />
          <span className="text-xs tracking-wider uppercase font-medium text-[#302820]/60">
            {alt || 'Kōva Coffee Atelier'}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  );
}

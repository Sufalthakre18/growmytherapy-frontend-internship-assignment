'use client'

import Image from 'next/image'
import LazySection from '../LazySection'

interface Thumbnail {
  src: string
  alt: string
  title: string
}

interface GalleryThumbnailsProps {
  images: Thumbnail[]
  activeIndex: number
  onSelect: (index: number) => void
}

export default function GalleryThumbnails({ 
  images, 
  activeIndex, 
  onSelect 
}: GalleryThumbnailsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`relative aspect-4/3 rounded-xl overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 ${
            activeIndex === index 
              ? 'ring-4 ring-primary shadow-xl scale-105' 
              : 'ring-2 ring-muted/30 hover:ring-primary/50 opacity-70 hover:opacity-100 hover:scale-102'
          }`}
          aria-label={`View ${image.title}`}
        >
          <LazySection><Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 50vw, 25vw"
          /></LazySection>
          
          {/* Active Indicator */}
          {activeIndex === index && (
            <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg"></div>
          )}
        </button>
      ))}
    </div>
  )
}
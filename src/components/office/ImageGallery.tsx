'use client'

import Image from 'next/image'
import LazySection from '../LazySection'

interface ImageGalleryProps {
  image: {
    src: string
    alt: string
    title: string
  }
}

export default function ImageGallery({ image }: ImageGalleryProps) {
  return (
    <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl group">
      <LazySection><Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      /></LazySection>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-dark/60 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-6 left-6 right-6">
          <p className="heading-text text-light text-[24px] font-semibold drop-shadow-lg">
            {image.title}
          </p>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full blur-2xl"></div>
    </div>
  )
}



"use client"
import Image from 'next/image'
import Link from 'next/link'
import LazySection from '../LazySection'

interface DrMayaCardProps {
  imageSrc: string
  name: string
  title: string
  bio: string
  bioLink?: string
}

export default function DrMayaCard({ 
  imageSrc, 
  name, 
  title, 
  bio,
  bioLink = "/about" 
}: DrMayaCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <LazySection><Image
          src={imageSrc}
          alt={`${name} - ${title}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        /></LazySection>
        
        {/* Professional Badge */}
        <div className="absolute top-4 right-4 bg-primary text-light px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
          <span className="body-text text-[12px] font-semibold uppercase tracking-wider">
            Licensed Psychologist
          </span>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-dark/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}<LazySection>
      <div className="p-8">
        <h3 className="heading-text text-dark text-[32px] font-semibold mb-2">
          {name}
        </h3>
        <p className="body-text text-[#3E6769] text-[16px] font-medium mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          {title}
        </p>
        <p className="body-text text-dark/80 text-[16px] leading-[1.7] mb-6">
          {bio}
        </p>
        
        <Link 
          href={bioLink}
          className="inline-flex items-center gap-2 body-text text-[#3E6769] hover:text-dark text-[15px] font-semibold uppercase tracking-wide transition-all duration-300 group/link"
        >
          <span>Read Full Bio</span>
          <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div></LazySection>

    </div>
  )
}
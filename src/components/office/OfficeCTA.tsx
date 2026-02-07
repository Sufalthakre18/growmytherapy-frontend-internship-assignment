"use client"
import Link from 'next/link'
import LazySection from '../LazySection'

interface OfficeCTAProps {
  title: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA: {
    text: string
    href: string
  }
}

export default function OfficeCTA({ title, description, primaryCTA, secondaryCTA }: OfficeCTAProps) {
  return (
    <div id="contact" className="bg-linear-to-r from-primary to-primary/90 rounded-2xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-light/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-light/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <LazySection>
        <h3 className="heading-text text-light font-semibold text-[32px] md:text-[42px] leading-[1.2] mb-4">
          {title}
        </h3>

        <p className="body-text text-light/90 text-[18px] md:text-[20px] leading-[1.6] mb-8 max-w-2xl mx-auto">
          {description}
        </p></LazySection>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          <Link
            href={primaryCTA.href}
            className="body-text inline-flex items-center gap-2 bg-light text-primary px-8 py-4 rounded-full font-semibold text-[16px] uppercase tracking-wide hover:bg-light/90 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            {primaryCTA.text}
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          <a
            href={secondaryCTA.href}
            className="body-text inline-flex items-center gap-2 border-2 border-light text-light px-8 py-4 rounded-full font-semibold text-[16px] uppercase tracking-wide hover:bg-light hover:text-primary transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {secondaryCTA.text}
          </a>
        </div>
      </div>

    </div>
  )
}
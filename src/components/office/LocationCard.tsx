"use client"

import InfoCard from './InfoCard'

interface LocationCardProps {
  address: string
  city: string
  mapsUrl?: string
}

export default function LocationCard({ address, city, mapsUrl }: LocationCardProps) {
  const icon = (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )

  return (
    <InfoCard  icon={icon} title="Location" variant="primary">
      <p className="leading-relaxed mb-3">
        {address}<br />
        {city}
      </p>
      {mapsUrl && (
        <a 
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary hover:text-dark text-[14px] font-medium transition-colors"
        >
          Get Directions
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </InfoCard>
  )
}
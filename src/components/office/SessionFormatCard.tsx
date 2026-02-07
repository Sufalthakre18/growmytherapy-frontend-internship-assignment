"use client"
import InfoCard from './InfoCard'

interface SessionFormatCardProps {
  formats: string
  description: string
}

export default function SessionFormatCard({ formats, description }: SessionFormatCardProps) {
  const icon = (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )

  return (
    <InfoCard icon={icon} title="Session Format" variant="accent">
      <p className="font-medium mb-1">{formats}</p>
      <p className="text-dark/70 text-[15px] leading-relaxed">
        {description}
      </p>
    </InfoCard>
  )
}
"use client"
import { ReactNode } from 'react'

interface InfoCardProps {
  icon: ReactNode
  title: string
  children: ReactNode
  variant?: 'primary' | 'accent'
  className?: string
}

export default function InfoCard({ 
  icon, 
  title, 
  children, 
  variant = 'primary',
  className = '' 
}: InfoCardProps) {
  const bgGradient = variant === 'primary' 
    ? 'from-primary/5 to-accent/5 border-primary/20 hover:border-primary/40'
    : 'from-accent/5 to-primary/5 border-accent/20 hover:border-accent/40'

  const iconBg = variant === 'primary' ? 'bg-primary' : 'bg-accent'

  return (
    <div className={`bg-linear-to-br ${bgGradient} rounded-xl p-6 border transition-all duration-300 ${className}`}>
      <div className="flex items-start gap-4">
        <div className={`shrink-0 w-12 h-12 ${iconBg} rounded-full flex items-center justify-center shadow-lg`}>
          <div className="text-light">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h4 className="heading-text text-dark text-[20px] font-semibold mb-2">
            {title}
          </h4>
          <div className="body-text text-dark/80 text-[16px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}


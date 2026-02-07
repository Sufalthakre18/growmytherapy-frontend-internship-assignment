"use client"
interface ActiveImageInfoProps {
  title: string
  description: string
}

export default function ActiveImageInfo({ title, description }: ActiveImageInfoProps) {
  return (
    <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="heading-text text-primary text-[22px] font-semibold mb-2">
            {title}
          </h3>
          <p className="body-text text-dark/80 text-[16px] leading-[1.6]">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
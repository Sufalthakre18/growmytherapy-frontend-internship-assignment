"use client"
interface OfficeHeroProps {
    badge?: string
    title: string
    description: string
}

export default function OfficeHero({
    badge = "Visit Our Space",
    title,
    description
}: OfficeHeroProps) {
    return (
        <div className="text-center mb-16 md:mb-20">

            <div className="inline-block mb-6 relative group">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500"></div>
                <span className="relative body-text text-[#3E6769] text-[14px] md:text-[16px] uppercase tracking-[0.2em] font-medium px-6 py-2 border border-primary/30 rounded-full inline-block bg-light/50 backdrop-blur-sm">
                    {badge}
                </span>
            </div>

            <h2 className="heading-text text-dark font-semibold text-[42px] md:text-[56px] lg:text-[68px] leading-[1.1] mb-6 relative">
                <span className="relative inline-block">
                    {title}
                    <div className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 w-[110%] h-2.5">
                        <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-[#9FB8AE]/40 to-transparent blur-sm"></div>
                        <div className="absolute inset-x-[12%] top-1/2 h-0.5 bg-[#7FA6A0]/60 rounded-full"></div>
                    </div>

                </span>
            </h2>

            <p className="body-text text-dark/80 text-[18px] md:text-[21px] leading-[1.7] max-w-3xl mx-auto">
                {description}
            </p>
        </div>
    )
}
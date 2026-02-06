// components/Speciality.tsx
import Image from "next/image";
import LazySection from "./LazySection";

export default function Speciality() {
  const specialties = [
    {
      title: "Self-Esteem",
      description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
      image: "/images/spec-1.webp",
      alt: "Person standing in minimalist room"
    },
    {
      title: "Relationships",
      description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
      image: "/images/spec-2.webp",
      alt: "Woman sitting outdoors smiling"
    },
    {
      title: "Burnout",
      description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
      image: "/images/spec-3.webp",
      alt: "Person working at organized desk"
    }
  ];

  return (
    <section className="relative bg-[#fbf6f1] py-16 md:py-24 px-[6vw] md:px-[3.75vw]">
      <div className="max-w-750 mx-auto">
        
        {/* Section Title */}
        <LazySection>
        <h2 className="logo-text text-center text-[#223614] font-medium text-[42px] md:text-[46px]  leading-[1.2] mb-12 md:mb-16">
          My Specialties
        </h2></LazySection>

        {/* Grid of Specialty Cards */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
          {specialties.map((specialty, index) => (
            <li 
              key={index}
              className="relative bg-[#e5e0da] border border-[#223614] px-3 md:px-6 py-2  flex flex-col"
            >
              {/* Text Content */}
              <LazySection>
              <div className="mb-8">
                <h3 className="logo-text text-[#223614] font-medium text-[20px] md:text-[20px] leading-16 mb-4">
                  {specialty.title}
                </h3>
                <p className="logo-text text-[#223614] font-extralight text-[14px] md:text-[14px] leading-5">
                  {specialty.description}
                </p>
              </div></LazySection>

              {/* Circular Image */}
              <div className="relative w-full aspect-square max-w-70 mx-auto mt-auto">
                
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <LazySection><Image
                    src={specialty.image}
                    alt={specialty.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  /></LazySection>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
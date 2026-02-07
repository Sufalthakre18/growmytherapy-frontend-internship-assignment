import Image from "next/image";
import Link from "next/link";
import LazySection from "./LazySection";
import { drMayaContent } from "@/lib/content";

export default function About() {
  return (
    <section className="bg-muted/20 min-h-[90vh] flex items-center">
      <div className="w-full  mx-auto px-8 md:px-20 my-26">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">

          {/* TEXT */}
          <div className="order-2 md:order-1 text-left max-w-xl justify-center">
            <LazySection><h2 className="heading-text text-dark text-[40px] md:text-[52px] leading-10 font-medium mb-6">
              {drMayaContent.about.h2}
            </h2></LazySection>
            <LazySection>
            <p className="body-text text-shadow-dark text-[16px] md:text-[18px] leading-[1.7] mb-10 md:pr-4">
            {drMayaContent.about.bio} <br /> {drMayaContent.about.credentials}
            </p></LazySection>
            <LazySection>
            <Link
              href="/contact"
              className="inline-flex items-center md:mx-20 lg:mx-30 mx-15 gap-2 border border-primary px-8 py-3 text-[14px] tracking-wide uppercase text-dark hover:bg-[#3E6769] hover:text-light transition-all duration-400 ease-in"
            >
              {drMayaContent.about.cta} →
            </Link></LazySection>
          </div>

          {/* IMAGES */}
          <div className="order-1 md:order-2 relative flex justify-center md:justify-end md:pr-10">
            <div className="relative">

              {/* Main arch image */}
              <div className="relative w-55 md:w-95 aspect-2/3 overflow-hidden rounded-t-full">
                <LazySection><Image
                  src="/images/hero13.jpg"
                  alt="Flowers"
                  fill
                  className="object-cover"
                  priority
                /></LazySection>
              </div>

              {/* Overlapping circle image */}
              <div className="absolute bottom-0 -right-10 md:-bottom-12 md:-right-20 w-30 md:w-65 aspect-square overflow-hidden rounded-full">
                <LazySection><Image
                  src="/images/office/Profileimage.jpg"
                  alt="Flowers detail"
                  fill
                  className="object-cover"
                /></LazySection>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

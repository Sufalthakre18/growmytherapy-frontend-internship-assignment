import Image from 'next/image'
import Link from 'next/link'
import LazySection from './LazySection'
import { drMayaContent } from '@/lib/content'

export default function Hero() {
  return (
    <section className=" min-h-[90vh] bg-secondary flex items-center z-0">
      <div className="mt-20 md:mt-15 bg-linear-to-r from-[#E2DBD3]/80 via-transparent to-transparent w-full mx-auto md:px-6 grid grid-cols-1 md:grid-cols-2  gap-2 md:gap-1 items-center md:translate-y-0">

        {/* Image */}
        <LazySection>
        <div className=" md:mr-16 flex justify-center md:justify-start pt-0 mx-auto md:p-6.5  ">
          <div className="w-44 md:mt-6 md:w-full aspect-2/3  overflow-hidden rounded-t-full">
            <Image
              src="/images/hero4.jpg"
              alt="Therapy"
              width={500}
              height={800}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        </LazySection>

        {/* Content */}
        <LazySection>
        <div className="md:mr-16 text-center text-dark  md:pb-20 md:mb-8">
          <h1 className="font-heading text-dark font-medium text-[50px] md:text-[65px] md:leading-14 leading-12 mb-8">
           {drMayaContent.hero.h1} 
          </h1>

          <p className="font-body font-light text-dark text-[18px] md:text-[20px] leading-7.25 mb-4 pb-3 ">
            {drMayaContent.hero.subtitle}
          </p>

          <Link
            href="/contact"
            className="hover:bg-[#3E6769] hover:text-light border-primary text-primary inline-block font-body border  px-9 py-3 text-[16px]  transition-all ease-in duration-400 mb-9"
          >
           {drMayaContent.hero.cta} <span className="ml-1">→</span>
          </Link>

        </div>
        </LazySection>
      </div>
    </section>
  )
}




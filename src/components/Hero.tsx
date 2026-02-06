import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className=" min-h-[90vh] bg-[#fbf6f1] flex items-center z-0">
      <div className="mt-20 md:mt-15  w-full mx-auto md:px-6 grid grid-cols-1 md:grid-cols-2  gap-2 md:gap-1 items-center md:translate-y-0">

        {/* Image */}
        <div className=" md:mr-16 flex justify-center md:justify-start pt-0 mx-auto md:p-6.5  ">
          <div className="w-44 md:mt-6 md:w-full aspect-2/3  overflow-hidden rounded-t-full">
            <Image
              src="/images/hero.jpg"
              alt="Therapy"
              width={500}
              height={800}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:mr-16 text-center text-[#223614]  md:pb-20 md:mb-8">
          <h1 className="logo-text font-medium text-[50px] md:text-[65px] md:leading-16 leading-14 mb-8">
            Live your life <br /> in full bloom
          </h1>

          <p className="logo-text font-light text-[18px] md:text-[20px] leading-7.25 mb-4 pb-3 ">
            Therapy for Adults in Minneapolis, MN.
          </p>

          <Link
            href="/contact"
            className="inline-block logo-text border border-[#223614] px-9 py-3 text-[16px] hover:bg-[#223614] hover:text-[#fbf6f1] transition-all ease-in duration-400 mb-9"
          >
            Connect with me <span className="ml-1">→</span>
          </Link>

        </div>

      </div>
    </section>
  )
}

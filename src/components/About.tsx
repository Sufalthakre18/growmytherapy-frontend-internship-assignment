import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#e5e0da] min-h-[90vh] flex items-center">
      <div className="w-full  mx-auto px-8 md:px-20 my-26">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">

          {/* TEXT */}
          <div className="order-2 md:order-1 text-left max-w-xl justify-center">
            <h2 className="logo-text text-[#223614] text-[40px] md:text-[52px] font-medium mb-6">
              Hi, I’m Lilac.
            </h2>

            <p className="logo-text text-[#223614] text-[16px] md:text-[18px] leading-[1.7] mb-10 md:pr-4">
              I'm committed to providing a safe and supportive environment where
              we can explore your thoughts, feelings, and behaviors. With empathy
              and guidance, we'll work together to navigate the challenges life
              throws your way.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center md:mx-20 lg:mx-30 mx-15 gap-2 border border-[#223614] px-8 py-3 text-[14px] tracking-wide uppercase text-[#223614] hover:bg-[#223614] hover:text-[#efeae2] transition-all duration-400 ease-in"
            >
              Let’s chat →
            </Link>
          </div>

          {/* IMAGES */}
          <div className="order-1 md:order-2 relative flex justify-center md:justify-end md:pr-10">
            <div className="relative">

              {/* Main arch image */}
              <div className="relative w-55 md:w-95 aspect-2/3 overflow-hidden rounded-t-full">
                <Image
                  src="/images/about-main.webp"
                  alt="Flowers"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Overlapping circle image */}
              <div className="absolute bottom-0 -right-10 md:-bottom-12 md:-right-20 w-30 md:w-65 aspect-square overflow-hidden rounded-full">
                <Image
                  src="/images/about-circle.webp"
                  alt="Flowers detail"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

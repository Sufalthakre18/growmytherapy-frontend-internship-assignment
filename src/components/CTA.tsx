import Link from "next/link";
import LazySection from "./LazySection";

export default function CTA() {
    return (
        <section className="relative bg-[#7e7b46] py-20 md:py-26  px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <LazySection>
                <h2 className="logo-text text-white font-medium text-[30px] md:text-[40px]  leading-[1.2] mb-8 md:mb-10">
                    Get started today.
                </h2></LazySection>
                <LazySection>
                <p className="logo-text  font-extralight text-white text-[15px]  md:text-[18px]  leading-tight mb-12 md:mb-16 max-w-3xl mx-auto">
                    Ready to take the first step towards a happier, healthier you?
                    <br className="hidden md:block" />
                    Contact me to book your first session. I look forward to starting
                    <br className="hidden md:block" />
                    this therapeutic journey with you.
                </p></LazySection>
                <Link
                    href="/contact"
                    className="logo-text inline-flex items-center justify-center border-[1.5px] border-white text-white bg-transparent px-8 md:px-10 py-2 md:py-3 text-[15px] md:text-[17px] font-normal uppercase tracking-wide hover:bg-white hover:text-[#8b9769] transition-all duration-400 ease-in group"
                >
                    GET IN TOUCH 
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>

            </div>
        </section>
    );
}
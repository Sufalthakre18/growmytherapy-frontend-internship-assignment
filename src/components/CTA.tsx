import Link from "next/link";
import LazySection from "./LazySection";
import { drMayaContent } from "@/lib/content";
export default function CTA() {
    return (
        <section className="relative bg-primary py-20 md:py-26  px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <LazySection>
                <h2 className="heading-text text-light font-medium text-[30px] md:text-[40px]  leading-[1.2] mb-8 md:mb-10">
                    {drMayaContent.cta.h2}
                </h2></LazySection>
                <LazySection>
                <p className="font-extralight body-text text-light text-[15px]  md:text-[18px]  leading-tight mb-12 md:mb-16 max-w-3xl mx-auto">
                    {drMayaContent.cta.description1}
                    <br className="hidden md:block" />
                   {drMayaContent.cta.description2}
                    <br className="hidden md:block" />
                    {drMayaContent.cta.description3}
                </p></LazySection>
                <Link
                    href="/contact"
                    className="logo-text inline-flex items-center justify-center border-[1.5px] border-light text-light bg-transparent px-8 md:px-10 py-2 md:py-3 text-[15px] md:text-[17px] font-normal uppercase tracking-wide hover:bg-light hover:text-[#3E6769] transition-all duration-400 ease-in group"
                >
                     {drMayaContent.cta.button}
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>

            </div>
        </section>
    );
}




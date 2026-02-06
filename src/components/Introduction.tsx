// components/Introduction.tsx
import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
    return (
        <section className="relative bg-[#f4efe9] min-h-screen md:min-h-96  flex items-center">
            <div className="w-full mx-auto  ">

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">


                    <div className="relative w-full order-1 md:order-2">
                        <div className="relative w-full aspect-4/3 md:h-full  overflow-hidden">
                            <Image
                                src="/images/intro.webp"
                                alt="Lifestyle flatlay with coffee and journal"
                                className="object-cover object-center"
                                priority
                                fill />
                        </div>
                    </div>

                    <div className="relative order-2 md:order-1  flex flex-col justify-between h-full">
                        <div className="max-w-xl md:px-10 px-8 pt-10">
                            <h2 className="logo-text md:mt-20 text-[#223614] font-medium text-[36px] md:text-[48px] lg:text-[56px] leading-[1.2] mb-6">
                                Live a fulfilling life.
                            </h2>

                            <p className="logo-text text-[#223614] text-[16px] md:text-[18px] leading-[1.6] mb-5">
                                Life can be challenging—especially when you're trying to balance your
                                personal and professional life.
                            </p>

                            <p className="logo-text text-[#223614] text-[16px] md:text-[18px] leading-[1.6] mb-8 md:mb-0">
                                It's easy to feel like you're alone in facing these challenges, but I
                                want you to know that I'm here to help.
                            </p>
                        </div>
                        <div className="w-full mt-30 md:mt-50">
                            <Link
                                href="/contact"
                                className="logo-text flex items-center justify-center w-full text-center text-[#223614] border-t border-[#223614] py-5 text-[15px] md:text-[17px] font-normal uppercase tracking-wide  hover:bg-[#223614] hover:text-[#fbf6f1] transition-all ease-in duration-400"
                            >
                                GET IN TOUCH →
                            </Link>
                        </div>
                    </div>

                </div>


            </div>
        </section>
    );
}
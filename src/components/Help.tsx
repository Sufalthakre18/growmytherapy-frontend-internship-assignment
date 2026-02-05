import Image from "next/image";
import Link from "next/link";

export default function Help() {
    return (
        <section className="relative bg-[#c2bfcb] min-h-screen md:min-h-96  flex items-center">
            <div className="w-full mx-auto  ">

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">


                    <div className="relative w-full order-1 md:order-1">
                        <div className="relative w-full aspect-4/3 md:h-full  overflow-hidden">
                            <Image
                                src="/images/help1.webp"
                                alt="Lifestyle flatlay with coffee and journal"
                                className="object-cover object-center"
                                priority
                                fill />
                        </div>
                    </div>

                    <div className="relative order-2 md:order-2  flex flex-col justify-between h-full">
                        <div className="max-w-xl md:px-10 px-8 pt-10">
                            <div>
                                <h2 className="logo-text md:mt-20 text-[#223614] font-medium text-[36px] md:text-[38px] lg:text-[46px] leading-[1.2] mb-6">
                                    You don’t have to do this all <em>alone</em>
                                </h2>

                            </div>
                            <p className="logo-text text-[#223614] text-[16px] md:text-[18px] leading-[1.6] mb-6">
                                If you are facing any of these, there’s hope:
                            </p>

                            <ul className="logo-text text-[#223614] text-[16px] md:text-[18px] leading-[1.7] space-y-3 mb-8 list-disc list-inside">
                                <li>Persistent feelings of sadness or hopelessness</li>
                                <li>Trouble focusing or making decisions</li>
                                <li>Difficulty maintaining relationships</li>
                                <li>Feeling constantly exhausted or unmotivated</li>
                                <li>A pervasive sense of being overwhelmed</li>
                            </ul>

                            <p className="logo-text text-[#223614] text-[16px] md:text-[18px] leading-[1.6]">
                                With empathy and guidance, we&apos;ll work together to navigate the
                                challenges life throws your way.
                            </p>

                        </div>
                        <div className="w-full mt-30 ">
                            <Link
                                href="/contact"
                                className="logo-text flex items-center justify-center w-full text-center text-[#223614] border-t-[1.5px] border-[#223614] py-5 text-[15px] md:text-[17px] font-normal uppercase tracking-wide hover:bg-[#223614] hover:text-[#f4efe9] transition-all duration-300 ease-in-out"
                            >
                                WORK WITH ME →
                            </Link>
                        </div>
                    </div>

                </div>


            </div>
        </section>
    );
}
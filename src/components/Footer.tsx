import Link from "next/link";
import LazySection from "./LazySection";
import { drMayaContent } from "@/lib/content";

export default function Footer() {
    const { footer } = drMayaContent;

    return (
        <footer className="bg-[#f4efe9] text-[#223614]">

            <LazySection>
                <div className="px-6 md:px-[3.75vw] py-12 md:py-16 lg:py-25">
                    <div className="max-w-750 mx-auto">

                        {/* Desktop */}
                        <div className="hidden md:grid md:grid-cols-3">

                            {/* Business Info */}
                            <div>
                                <h3 className="logo-text leading-6 text-[28px] lg:text-[32px] font-medium mb-6">
                                    {footer.businessName}
                                </h3>

                                <address className="logo-text not-italic text-[17px] leading-relaxed mb-6">
                                    <p>{footer.address}</p>
                                </address>

                                <div className="logo-text text-[17px] space-y-1">
                                    <p>
                                        <a
                                            href={`mailto:${footer.email}`}
                                            className="underline hover:opacity-70 transition-opacity"
                                        >
                                            {footer.email}
                                        </a>
                                    </p>
                                    <p>{footer.phone}</p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="text-right ml-4">
                                <h3 className="logo-text text-[28px] lg:text-[32px] font-medium mb-6">
                                    Hours
                                </h3>
                                <div className="logo-text text-[17px] leading-relaxed">
                                    <p>{footer.hours}</p>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="text-center">
                                <h3 className="logo-text text-[28px] lg:text-[32px] font-medium mb-6">
                                    Find
                                </h3>
                                <nav className="logo-text text-[17px] space-y-2">
                                    <p>
                                        <Link href="/" className="underline hover:opacity-70 transition-opacity">
                                            Home
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="/contact" className="underline hover:opacity-70 transition-opacity">
                                            Contact
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="/blog" className="underline hover:opacity-70 transition-opacity">
                                            Blog
                                        </Link>
                                    </p>
                                </nav>
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className="md:hidden text-center space-y-10">

                            <div>
                                <h3 className="logo-text text-[24px] font-medium mb-4">
                                    {footer.businessName}
                                </h3>

                                <address className="logo-text font-extralight not-italic text-[16px] leading-tight mb-4">
                                    <p>{footer.address}</p>
                                </address>

                                <div className="logo-text font-extralight text-[16px] space-y-1">
                                    <p>
                                        <a
                                            href={`mailto:${footer.email}`}
                                            className="underline"
                                        >
                                            {footer.email}
                                        </a>
                                    </p>
                                    <p>{footer.phone}</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="logo-text text-[24px] font-medium mb-4">
                                    Hours
                                </h3>
                                <div className="logo-text font-extralight text-[16px] leading-tight">
                                    <p>{footer.hours}</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="logo-text text-[24px] font-medium mb-4">
                                    Find
                                </h3>
                                <nav className="logo-text text-[16px] space-y-2">
                                    <p>
                                        <Link href="/" className="font-extralight underline">
                                            Home
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="/contact" className="font-extralight underline">
                                            Contact
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="/blog" className="font-extralight underline">
                                            Blog
                                        </Link>
                                    </p>
                                </nav>
                            </div>
                        </div>

                    </div>
                </div>
            </LazySection>

            {/* Bottom Bar */}
            <div className="bg-[#e5e0da] px-6 py-8 md:py-10">
                <div className="max-w-750 mx-auto text-center">

                    <div className="logo-text text-[13px] md:text-[14px] mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
                        <Link href="/privacy" className="underline hover:opacity-70 transition-opacity">
                            Privacy & Cookies Policy
                        </Link>
                        <Link href="/good-faith" className="underline hover:opacity-70 transition-opacity">
                            Good Faith Estimate
                        </Link>
                        <Link href="/terms" className="underline hover:opacity-70 transition-opacity">
                            Website Terms & Conditions
                        </Link>
                        <Link href="/disclaimer" className="underline hover:opacity-70 transition-opacity">
                            Disclaimer
                        </Link>
                    </div>

                    <p className="logo-text text-[13px] md:text-[14px] mb-4">
                        Website Template Credits:{" "}
                        <a
                            href="https://my-portfolio-pearl-xi-96.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:opacity-70 transition-opacity"
                        >
                            sufal thakre
                        </a>
                    </p>

                    <p className="logo-text text-[13px] md:text-[14px]">
                        All Rights Reserved © 2024 {footer.businessName}.
                    </p>

                </div>
            </div>
        </footer>
    );
}

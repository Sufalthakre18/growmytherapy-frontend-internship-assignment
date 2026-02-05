'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="w-full relative bg-[#fbf6f1] z-2">
            <div className="w-full mx-auto p-6.5 md:px-6 md:py-4  flex items-center justify-between">

                <button
                    onClick={() => setOpen(!open)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    className="md:hidden relative z-10 h-8 w-8 flex items-center justify-center"
                >
                    <span className="sr-only">{open ? 'Close Menu' : 'Open Menu'}</span>

                    <div className="relative w-6 h-4">
                        <span
                            className={`absolute left-0   bg-[#223614] transition-transform duration-400
        ${open ? 'top-1/2 rotate-45 h-[0.8px] w-7.25' : 'w-8.75 top-0 h-[0.2px]'}`}
                        />
                        <span
                            className={`hidden absolute left-0 w-full bg-[#223614] transition-opacity duration-400
        ${open ? 'opacity-0' : 'top-1/2 -translate-y-1/2'}`}
                        />
                        <span
                            className={`absolute left-0  bg-[#223614] transition-transform duration-400
        ${open ? 'top-1/2 -rotate-45 h-[0.8px] w-7.25' : 'w-8.75 bottom-0 h-[1.5px]'}`}
                        />
                    </div>
                </button>

                {/* Logo */}

                <Link
                    href="/"
                    className="logo-text z-2 font-medium leading-5.25 text-[18px]  md:text-[32px] md:leading-9.5 text-[#223614]"
                >
                    Lilac Template
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10 text-sm ">
                    <Link href="/blog" className="logo-text font-normal text-[19px] leading-7.75 text-[#223614] hover:opacity-60 transition-all duration-300 ease-in">
                        Blog
                    </Link>
                    <Link href="/contact" className="logo-text font-normal text-[19px] leading-7.75 text-[#223614] hover:opacity-60 transition-all duration-300 ease-in">
                        Contact
                    </Link>
                </nav>


            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0  flex flex-col transition-all duration-500 ease-in-out ${open ? 'translate-y-0 opacity-100 bg-[#fbf6f1]' : 'translate-y-10 opacity-0 pointer-events-none bg-transparent'}`}>
                {/* Top spacing (matches Squarespace header offset) */}
                <div className="h-24" />

                {/* Menu content */}
                <div className={`
        flex-1 flex flex-col items-center justify-center
        font-gopher font-medium
        text-[21.5px] leading-[21.5px]
        text-[#223614]
        text-center `}>
                    <nav className="flex flex-col gap-10">
                        <Link href="/blog" onClick={() => setOpen(false)} className='logo-text font-light leading-8.5 text-[34px] text-[#223614]'>
                            Blog
                        </Link>

                        <Link href="/contact" onClick={() => setOpen(false)} className='logo-text font-light leading-8.5 text-[34px] text-[#223614]'>
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>

        </header>
    )
}
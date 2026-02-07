'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  // Header scroll behavior
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY

      if (!open) {
        if (y > lastScrollY && y > 120) setVisible(false)
        else setVisible(true)
      }

      setScrolled(y > 10)
      setLastScrollY(y)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastScrollY, open])

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${visible ? 'translate-y-0' : '-translate-y-full'}
          ${scrolled ? 'bg-secondary shadow-md' : 'bg-transparent'}
        `}
      >
        <div className="flex items-center justify-between px-4 py-3 md:px-6">

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden z-50 w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-4">
              <span
                className={`absolute left-0 h-px w-full bg-dark transition-all
                  ${open ? 'top-1/2 rotate-45' : 'top-0'}`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-dark transition-all
                  ${open ? 'top-1/2 -rotate-45' : 'bottom-0'}`}
              />
            </div>
          </button>

          {/* Logo */}
          <Link href="/" className="md:ml-5 font-heading leading-tight text-dark text-[18px] md:text-[30px] font-medium">
            Dr. Maya Reynolds, PsyD
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10">
            <Link href="/office" className="body-text text-[18px] text-shadow-dark hover:opacity-60">
              Office
            </Link>
            <Link href="#contact" className="body-text text-[18px] text-shadow-dark hover:opacity-60">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* MOBILE MENU — FULL SCREEN */}
      <div
        className={`fixed inset-0 z-40 bg-secondary
           duration-500 transition-all ease-in-out
          ${open ? 'translate-y-0 opacity-100 bg-secondary' : 'translate-y-5 opacity-1 pointer-events-none bg-transparent'}
        `}
      >
        <div className="flex h-dvh items-center justify-center">
          <nav className="flex flex-col gap-12 text-center">
            <Link
              href="/office"
              onClick={() => setOpen(false)}
              className="body-text text-[34px] font-light text-shadow-dark"
            >
              Office
            </Link>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="body-text text-[34px] font-light text-shadow-dark"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

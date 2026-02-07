'use client'
import Image from 'next/image'
import { useState } from 'react'
import LazySection from './LazySection'
import { drMayaContent } from '@/lib/content'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-linear-to-r from-[#E6E0D9] via-secondary to-secondary py-20 md:py-28">
      <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-2 items-start">

        {/* Image */}
        <div className="flex justify-center md:justify-start md:ml-20 lg:ml-28">
          <div className="relative w-48 md:w-100 aspect-2/3 overflow-hidden rounded-t-full">
            <LazySection>
              <Image
                src="/images/hero5.jpg"
                alt="Decorative florals"
                fill
                className="object-cover"
              />
            </LazySection>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="text-dark mt-28">
          <LazySection>
            <h2 className="heading-text text-4xl md:text-5xl mb-12">
              FAQs
            </h2>
          </LazySection>

          <div className="border-t border-muted">
            {drMayaContent.faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div
                  key={i}
                  className="border-b border-muted py-6"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left font-text text-3xl md:text-4xl"
                  >
                    <LazySection>
                      <span className="flex items-center gap-4">
                        <span className="text-4xl font-medium">
                          {isOpen ? '—' : '+'}
                        </span>
                        {item.question}
                      </span>
                    </LazySection>
                  </button>

                  {isOpen && (
                    <p className="mt-4 ml-10 max-w-lg body-text text-base md:text-lg leading-relaxed text-dark">
                      {item.answer}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

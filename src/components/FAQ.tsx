'use client'
import Image from 'next/image'
import { useState } from 'react'

const faqs = [
  {
    q: 'Do you take insurance?',
    a: 'Answer goes here.'
  },
  {
    q: 'What are your rates?',
    a: 'Answer goes here.'
  },
  {
    q: 'Do you have any openings?',
    a: 'Answer goes here.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-[#fbf6f1] py-20 md:py-28">
      <div className="mx-auto  px-6 grid grid-cols-1 md:grid-cols-2 gap-2 items-start">

        {/* Image */}
        <div className="flex justify-center md:justify-start md:ml-20 lg:ml-28">
          <div className="relative w-48 md:w-100 aspect-2/3 overflow-hidden rounded-t-full">
            <Image
              src="/images/faq.webp"
              alt="Decorative florals"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* FAQ Content */}
        <div className="text-[#223614] mt-28">
          <h2 className="logo-text text-4xl md:text-5xl font-medium mb-12">
            FAQs
          </h2>

          <div className="border-t border-[#223614]">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={i} className="border-b border-[#223614] py-6">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left logo-text text-3xl md:text-4xl font-medium"
                  >
                    <span className="flex items-center gap-4">
                      <span className="logo-text text-4xl font-medium">{isOpen ? '—' : '+'}</span>
                      {item.q}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-4 ml-10 max-w-lg logo-text text-base md:text-lg leading-relaxed">
                      {item.a}
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

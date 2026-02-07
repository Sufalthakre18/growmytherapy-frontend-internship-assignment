'use client'

import { useState } from 'react'
import OfficeHero from './OfficeHero'
import ImageGallery from './ImageGallery'
import GalleryThumbnails from './GalleryThumbnails'
import ActiveImageInfo from './ActiveImageInfo'
import DrMayaCard from './DrMayaCard'
import LocationCard from './LocationCard'
import SessionFormatCard from './SessionFormatCard'
import OfficeCTA from './OfficeCTA'
import LazySection from '../LazySection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Therapy Office',
  description:
    'A calm and welcoming therapy office designed for comfort, privacy, and healing.',
}



export default function Office() {
  const [activeImage, setActiveImage] = useState(0)

  const officeImages = [
    {
      src: '/images/office/office1.jpeg',
      title: 'The Therapy Space',
      description:
        'A calm, private room with natural light and comfortable seating designed for healing conversations.',
      alt: 'Bright therapy room with gray sofa and bookshelves',
    },
    {
      src: '/images/office/office2.jpeg',
      title: 'A Welcoming Environment',
      description:
        'Thoughtfully designed with natural materials and warm lighting to help you feel immediately at ease.',
      alt: 'Cozy therapy space with large windows and natural light',
    },
  ]

  return (
    <section
      className="relative bg-[linear-gradient(135deg,#F6F8F6_0%,#E6EFEA_40%,#D5E3DD_100%)] py-20 md:py-32 px-[6vw] md:px-[3.75vw] overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-40 -left-40 w-130 h-130 rounded-full bg-[#B7CDC4]/30 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 -right-40 w-120 h-120 rounded-full bg-[#D5E3DD]/40 blur-[160px]" />

      <div className="relative max-w-350 mx-auto">
        {/* Header */}
        <LazySection>
          <OfficeHero
            title="A Calm Space for Healing"
            description="My Santa Monica office is designed to feel grounding and welcoming. With natural light, comfortable seating, and an uncluttered environment, clients often share that the space itself helps them feel more at ease from the moment they arrive."
          />
        </LazySection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          {/* LEFT — Gallery */}
          <div className="space-y-6">
            <ImageGallery image={officeImages[activeImage]} />

            <GalleryThumbnails
              images={officeImages}
              activeIndex={activeImage}
              onSelect={setActiveImage}
            />

            <LazySection>
              <ActiveImageInfo
                title={officeImages[activeImage].title}
                description={officeImages[activeImage].description}
              />
            </LazySection>
          </div>

          {/* RIGHT — Profile + Details */}
          <div className="space-y-8">
            <DrMayaCard
              imageSrc="/images/office/Profileimage.jpg"
              name="Dr. Maya Reynolds, PsyD"
              title="Licensed Clinical Psychologist"
              bio="I'm committed to creating a safe, collaborative space where you can explore your thoughts and emotions. With warmth and evidence-based care, we'll work together to help you feel more grounded and at peace."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <LazySection>
                <LocationCard
                  address="123th Street 45 W"
                  city="Santa Monica, CA 90401"
                  mapsUrl="https://maps.google.com/?q=Santa+Monica+CA+90401"
                />
              </LazySection>

              <LazySection>
                <SessionFormatCard
                  formats="In-Person & Telehealth"
                  description="I offer both in-office sessions and secure video therapy throughout California."
                />
              </LazySection>
            </div>
          </div>
        </div>

        {/* Soft divider */}
        <div className="h-px w-full my-20 bg-linear-to-r from-transparent via-[#B7CDC4]/60 to-transparent" />

        <OfficeCTA
          title="Ready to Take the First Step?"
          description="Schedule a consultation to discuss how therapy can help you navigate anxiety, trauma, or burnout with compassionate, evidence-based care."
          primaryCTA={{
            text: 'Schedule Consultation',
            href: '/contact',
          }}
          secondaryCTA={{
            text: '(310) 555-0123',
            href: 'tel:310-555-0123',
          }}
        />
      </div>
    </section>
  )
}

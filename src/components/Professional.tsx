'use client'

import { useState } from 'react'
import LazySection from './LazySection'
import { drMayaContent } from '@/lib/content'

export default function Professional() {
    type Section = 'education' | 'licensure' | 'certifications' | null

    const [open, setOpen] = useState<Section>('education')


    const Item = ({
        id,
        title,
        children,
    }: {
        id: 'education' | 'licensure' | 'certifications'
        title: string
        children?: React.ReactNode
    }) => {
        const isOpen = open === id

        return (
            <div className="border-b border-[#223614]">
                <button
                    onClick={() => setOpen(isOpen ? null : id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                >
                    <span className="logo-text text-[22px] md:text-[26px] font-extralight text-[#223614]">
                        {title}
                    </span>
                    <span className="text-[28px] text-[#223614] font-extralight leading-tight">
                        {isOpen ? '–' : '+'}
                    </span>
                </button>

                {isOpen && children && (
                    <div className="pb-8 max-w-2xl">
                        <LazySection>
                        <p className="logo-text text-[16px] md:text-[18px] leading-[1.7] text-[#223614]">
                            {children}
                        </p></LazySection>
                    </div>
                )}
            </div>
        )
    }

    return (
        <section className="bg-[#e5e0da] py-24 ">
            <div className="max-w-5xl mx-auto px-6 md:px-50">

                {/* Title */}
                <LazySection>
                <h2 className="logo-text text-center text-[#223614] text-[30px] md:text-[38px] font-medium mb-10">
                    Experience & Training
                </h2></LazySection>

                {/* Divider */}
                <div className="border-t border-[#223614] mb-2" />

                {/* Accordion */}
                <Item id="education" title="Education">
                    Doctor of Psychology (PsyD) in Clinical Psychology. My training focused on evidence-based treatment for anxiety, trauma, and stress-related disorders, with a strong emphasis on integrating research with compassionate, client-centered care.
                </Item>

                <Item id="licensure" title="Licensure">
                    Licensed Clinical Psychologist in the state of California. I provide therapy to adults through in-person sessions at my Santa Monica office as well as secure telehealth for clients located throughout California.
                </Item>

                <Item id="certifications" title="Certifications">
                     Trained in Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based approaches, and body-oriented techniques. I regularly pursue continuing education to stay current with best practices in trauma-informed and anxiety-focused care.
                </Item>

            </div>
        </section>
    )
}

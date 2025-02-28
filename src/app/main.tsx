'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Main from '@/components/Main'
import Development from '@/components/Development'
import Ops from '@/components/Ops'
import Infrastructure from '@/components/Infrastructure'
import BusinessIT from '@/components/BusinessIT'

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

const Section = ({ id, children }: SectionProps) => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)
  
  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen w-screen"
    >
      {isInView && children}
    </section>
  )
}

export default function Home() {
  return (
    <main className="w-full">
      <section id="main" className="min-h-screen w-screen flex items-center justify-center pt-[130px]">
        <Main />
      </section>
      <Section id="development">
        <Development key={Math.random()} />
      </Section>
      <Section id="ops">
        <Ops key={Math.random()} />
      </Section>
      <Section id="infrastructure">
        <Infrastructure key={Math.random()} />
      </Section>
      <Section id="business-it">
        <BusinessIT key={Math.random()} />
      </Section>
    </main>
  )
}
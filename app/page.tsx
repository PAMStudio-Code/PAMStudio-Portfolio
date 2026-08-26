import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { DnaBackground } from '@/components/dna-background'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#0C1622] text-slate-100 overflow-x-hidden">
      {/* 3D Moving DNA Helix Background */}
      <DnaBackground />

      {/* Page Content */}
      <div className="relative z-10 flex flex-col gap-12 sm:gap-20">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <SiteFooter />
      </div>
    </main>
  )
}

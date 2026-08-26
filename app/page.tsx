import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-slate-100 selection:bg-cyan-500 selection:text-black overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {/* Top-left cyan/indigo glow */}
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
        
        {/* Center-right purple glow */}
        <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-purple-600/15 blur-3xl" />
        
        {/* Bottom-left emerald/cyan glow */}
        <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* Subtle developer grid pattern */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
        />
      </div>

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

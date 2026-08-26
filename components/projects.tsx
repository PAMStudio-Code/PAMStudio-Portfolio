import { ArrowRight, ArrowUpRight, Rocket } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Projects() {
  return (
    <section id="work" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Selected Work
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
            My Recent Projects
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A collection of projects built using the power of Artificial Intelligence and modern
            web frameworks.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <Reveal className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_24px_60px_-20px_rgba(99,102,241,0.35)]">
            <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-background">
              {/* Academic microlithic texture */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.5]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, oklch(1 0 0 / 6%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 6%) 1px, transparent 1px)',
                  backgroundSize: '22px 22px',
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 select-none overflow-hidden font-mono text-[10px] leading-5 text-brand/25"
              >
                <span className="absolute left-3 top-2">a² + b² = c²</span>
                <span className="absolute right-4 top-4">∫ f(x) dx</span>
                <span className="absolute left-6 top-14">H₂O + CO₂</span>
                <span className="absolute right-6 top-16">v = u + at</span>
                <span className="absolute bottom-14 left-4">πr²</span>
                <span className="absolute bottom-10 right-8">E = mc²</span>
                <span className="absolute bottom-3 left-10">sin²θ + cos²θ = 1</span>
                <span className="absolute bottom-5 right-4">Δ = b² − 4ac</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://strack.ai.studio/favicon.svg"
                alt="StrackCBSE logo"
                className="relative size-24 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
              <a
                href="https://strack.ai.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-brand group-hover:opacity-100"
                aria-label="Open StrackCBSE live site"
              >
                <ArrowUpRight className="size-5" />
              </a>
            </div>

            <div className="p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  AI App
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  Education
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-brand">
                StrackCBSE (Class 10)
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                An intelligent study companion for CBSE Class 10 students. Features AI-driven
                syllabus tracking, automated study planning, and instant doubt resolution to
                streamline board exam preparation.
              </p>
              <a
                href="https://strack.ai.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-brand"
              >
                View Project <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={120}
            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border p-12 text-center md:mt-16"
          >
            <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-secondary">
              <Rocket className="size-7 text-brand" />
            </div>
            <h3 className="mb-2 text-xl font-bold">More in progress</h3>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              I&apos;m currently building and training new AI applications. Check back soon for my
              next launch.
            </p>
            <a
              href="#contact"
              className="rounded-full bg-secondary px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              Get in touch
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

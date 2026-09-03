import { ArrowDownRight, ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 lg:pt-40"
    >
      {/* Ambient brand glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-blob absolute -left-[10%] -top-[10%] size-[45%] rounded-full bg-brand/20 blur-[130px]" />
        <div className="animate-blob absolute bottom-[-15%] right-[5%] size-[40%] rounded-full bg-brand/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-brand">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-brand" />
          </span>
          Building with AI
        </div>

        <h1 className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
          Crafting AI-powered{' '}
          <span className="bg-gradient-to-r from-brand to-brand/60 bg-clip-text text-transparent">
            experiences.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Hi! Welcome to PAMStudio. Created by a student developer who leverages AI to build smart,
          clean, and modern applications. Enjoy this website and reach out if you want to collaborate for a new idea.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#work"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
          >
            View My Work
            <ArrowDownRight className="size-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-secondary px-8 py-4 font-semibold transition-colors hover:bg-accent sm:w-auto"
          >
            Get in touch
          </a>
        </div>
      </div>

      <a
        href="#work"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-foreground md:block"
        aria-label="Scroll to work"
      >
        <ChevronDown className="size-8" />
      </a>
    </section>
  )
}

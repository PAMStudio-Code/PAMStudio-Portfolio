import { Mail } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const EMAIL = 'pushpamdivyam5262@gmail.com'

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand">
            About Me
          </p>
          <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Class 10 student.
            <br />
            Building AI solutions.
          </h2>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-10 rounded-3xl border border-border bg-card/60 p-8 text-left shadow-xl backdrop-blur-sm md:p-12"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hello! I&apos;m Pushpam Kumar, a 10th-grade student based in India with a deep passion
            for coding and exploring the frontiers of Artificial Intelligence. While balancing my
            academics, my primary aim is to{' '}
            <strong className="font-semibold text-foreground">
              create powerful, tailored AI solutions for my clients
            </strong>
            , turning complex ideas into intuitive, modern applications.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            My academic journey is heavily driven by a love for the sciences, and my future goal is
            to study at an IISER (Indian Institutes of Science Education and Research). By blending
            rigorous scientific fundamentals with my passion for technology, I&apos;m constantly
            exploring new ways to engineer tools that solve real-world problems.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 rounded-full border border-border bg-secondary px-6 py-4 font-medium transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:bg-brand/10"
            >
              <Mail className="size-5 text-brand" />
              {EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

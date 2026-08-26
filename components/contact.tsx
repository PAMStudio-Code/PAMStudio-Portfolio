'use client'

import { useState } from 'react'
import { Check, Copy, Send } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const EMAIL = 'pushpamdivyam5262@gmail.com'
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute left-1/2 top-1/2 size-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[150px]" />
      </div>

      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
          Let&apos;s build something together.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Have a project in mind, want to collaborate, or just want to say hi? Feel free to reach
          out via email.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={GMAIL_COMPOSE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-brand px-8 py-5 font-bold text-brand-foreground shadow-[0_0_40px_-8px_rgba(99,102,241,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_60px_-8px_rgba(99,102,241,0.7)]"
          >
            <Send className="size-5" />
            <span className="text-lg">Email Me Directly</span>
          </a>

          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address to clipboard"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-5 font-medium text-foreground transition-colors hover:bg-accent"
          >
            {copied ? (
              <>
                <Check className="size-5 text-brand" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="size-5" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        <p className="mt-8 font-mono text-sm text-muted-foreground">{EMAIL}</p>
      </Reveal>
    </section>
  )
}

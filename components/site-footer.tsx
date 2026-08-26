import { Mail } from 'lucide-react'
import { Logo } from '@/components/logo'

const EMAIL = 'pushpamdivyam5262@gmail.com'

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <Logo className="size-6" />
          <span>
            PAM<span className="text-brand">Studio</span>
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Pushpam Kumar. All rights reserved.
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Mail className="size-5" />
          <span className="sr-only">Email Pushpam Kumar</span>
        </a>
      </div>
    </footer>
  )
}

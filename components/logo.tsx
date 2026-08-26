import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      role="img"
      aria-label="PAMStudio logo"
    >
      <defs>
        <linearGradient id="pam-logo-grad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="oklch(0.68 0.19 277)" />
          <stop offset="1" stopColor="oklch(0.52 0.24 277)" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="37" height="37" rx="11" fill="url(#pam-logo-grad)" />
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="11"
        stroke="oklch(1 0 0 / 22%)"
        strokeWidth="1"
      />
      {/* Stylized angular "P" / peak monogram */}
      <path
        d="M13 28V13.5C13 12.6716 13.6716 12 14.5 12H22.5C25.5376 12 28 14.4624 28 17.5C28 20.5376 25.5376 23 22.5 23H17.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14.5" cy="28" r="1.9" fill="white" />
    </svg>
  )
}

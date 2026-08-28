'use client'

import { useEffect, useRef } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

function AestheticDnaHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let angle = 0

    const resize = () => {
      if (!canvas.parentElement) return
      canvas.width = canvas.parentElement.clientWidth
      canvas.height = canvas.parentElement.clientHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const basePairCount = 42
    const radius = 100
    const heightStep = 18
    const twistRate = 0.14

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Anchored to the top right of the Hero section
      const centerX = canvas.width * 0.72
      const centerY = canvas.height * 0.48

      for (let i = 0; i < basePairCount; i++) {
        const currentAngle = angle + i * twistRate
        const yOffset = (i - basePairCount / 2) * heightStep

        const cos = Math.cos(currentAngle)
        const sin = Math.sin(currentAngle)

        // Subtle 35-degree tilt
        const x1 = Math.cos(Math.PI / 5) * (cos * radius) - Math.sin(Math.PI / 5) * yOffset
        const y1 = Math.sin(Math.PI / 5) * (cos * radius) + Math.cos(Math.PI / 5) * yOffset

        const x2 = Math.cos(Math.PI / 5) * (-cos * radius) - Math.sin(Math.PI / 5) * yOffset
        const y2 = Math.sin(Math.PI / 5) * (-cos * radius) + Math.cos(Math.PI / 5) * yOffset

        // Soft, muted connecting rungs
        ctx.beginPath()
        ctx.moveTo(centerX + x1, centerY + y1)
        ctx.lineTo(centerX + x2, centerY + y2)
        ctx.strokeStyle = 'rgba(74, 107, 130, 0.18)'
        ctx.lineWidth = 1
        ctx.stroke()

        // Dull, aesthetic muted cyan node
        const size1 = Math.max(1.8, 3.2 + sin * 1.2)
        ctx.beginPath()
        ctx.arc(centerX + x1, centerY + y1, size1, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(78, 205, 196, 0.55)'
        ctx.shadowColor = 'rgba(78, 205, 196, 0.3)'
        ctx.shadowBlur = 6
        ctx.fill()

        // Dull, aesthetic muted lavender/violet node
        const size2 = Math.max(1.8, 3.2 - sin * 1.2)
        ctx.beginPath()
        ctx.arc(centerX + x2, centerY + y2, size2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(157, 126, 219, 0.5)'
        ctx.shadowColor = 'rgba(157, 126, 219, 0.25)'
        ctx.shadowBlur = 6
        ctx.fill()
      }

      ctx.shadowBlur = 0
      angle += 0.007 // Slower, elegant rotation speed
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 h-full w-full opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_40%,#000_30%,transparent_85%)]"
    />
  )
}

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#0C1622] text-slate-100 overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar />

      {/* Top Hero Section Containing the Restricted DNA Animation */}
      <div className="relative w-full overflow-hidden">
        <AestheticDnaHero />
        <div className="relative z-10">
          <Hero />
        </div>
      </div>

      {/* Remaining Portfolio Sections */}
      <div className="relative z-10 flex flex-col gap-12 sm:gap-20">
        <Projects />
        <About />
        <Contact />
        <SiteFooter />
      </div>
    </main>
  )
}

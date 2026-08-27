'use client'

import { useEffect, useRef } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

function DnaBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let angle = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const basePairCount = 80
    const radius = 140
    const heightStep = 24
    const twistRate = 0.15

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Center the helix across the screen
      const centerX = canvas.width * 0.65
      const centerY = canvas.height * 0.5

      for (let i = 0; i < basePairCount; i++) {
        const currentAngle = angle + i * twistRate
        const yOffset = (i - basePairCount / 2) * heightStep

        const cos = Math.cos(currentAngle)
        const sin = Math.sin(currentAngle)

        // 45-degree diagonal rotation tilt
        const x1 = Math.cos(Math.PI / 4) * (cos * radius) - Math.sin(Math.PI / 4) * yOffset
        const y1 = Math.sin(Math.PI / 4) * (cos * radius) + Math.cos(Math.PI / 4) * yOffset

        const x2 = Math.cos(Math.PI / 4) * (-cos * radius) - Math.sin(Math.PI / 4) * yOffset
        const y2 = Math.sin(Math.PI / 4) * (-cos * radius) + Math.cos(Math.PI / 4) * yOffset

        // Connecting rungs
        ctx.beginPath()
        ctx.moveTo(centerX + x1, centerY + y1)
        ctx.lineTo(centerX + x2, centerY + y2)
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.25)'
        ctx.lineWidth = 2
        ctx.stroke()

        // Strand 1 (Bright Cyan #00FFFF)
        const size1 = Math.max(3, 6 + sin * 3)
        ctx.beginPath()
        ctx.arc(centerX + x1, centerY + y1, size1, 0, Math.PI * 2)
        ctx.fillStyle = '#00FFFF'
        ctx.shadowColor = '#00FFFF'
        ctx.shadowBlur = 15
        ctx.fill()

        // Strand 2 (Bright Violet #8F00FF)
        const size2 = Math.max(3, 6 - sin * 3)
        ctx.beginPath()
        ctx.arc(centerX + x2, centerY + y2, size2, 0, Math.PI * 2)
        ctx.fillStyle = '#8F00FF'
        ctx.shadowColor = '#8F00FF'
        ctx.shadowBlur = 15
        ctx.fill()
      }

      ctx.shadowBlur = 0
      angle += 0.012
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
      className="fixed inset-0 pointer-events-none z-0 h-full w-full"
    />
  )
}

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#0C1622] text-slate-100 overflow-x-hidden">
      {/* Canvas placed at z-0 directly above the background color */}
      <DnaBackground />

      {/* Foreground content at z-10 */}
      <div className="relative z-10 flex flex-col gap-12 sm:gap-20 bg-transparent">
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

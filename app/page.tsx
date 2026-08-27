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

    const basePairCount = 65
    const radius = 130
    const heightStep = 28
    const twistRate = 0.16

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width * 0.75
      const centerY = canvas.height * 0.5

      for (let i = 0; i < basePairCount; i++) {
        const currentAngle = angle + i * twistRate
        const yOffset = (i - basePairCount / 2) * heightStep

        const cos = Math.cos(currentAngle)
        const sin = Math.sin(currentAngle)

        const x1 = Math.cos(Math.PI / 4) * (cos * radius) - Math.sin(Math.PI / 4) * yOffset
        const y1 = Math.sin(Math.PI / 4) * (cos * radius) + Math.cos(Math.PI / 4) * yOffset

        const x2 = Math.cos(Math.PI / 4) * (-cos * radius) - Math.sin(Math.PI / 4) * yOffset
        const y2 = Math.sin(Math.PI / 4) * (-cos * radius) + Math.cos(Math.PI / 4) * yOffset

        // Connecting rungs
        ctx.beginPath()
        ctx.moveTo(centerX + x1, centerY + y1)
        ctx.lineTo(centerX + x2, centerY + y2)
        ctx.strokeStyle = 'rgba(74, 93, 120, 0.35)'
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Strand 1 (Cyan #00FFFF)
        const size1 = Math.max(2, 4.5 + sin * 2)
        ctx.beginPath()
        ctx.arc(centerX + x1, centerY + y1, size1, 0, Math.PI * 2)
        ctx.fillStyle = '#00FFFF'
        ctx.shadowColor = '#00FFFF'
        ctx.shadowBlur = 12
        ctx.fill()

        // Strand 2 (Violet #8F00FF)
        const size2 = Math.max(2, 4.5 - sin * 2)
        ctx.beginPath()
        ctx.arc(centerX + x2, centerY + y2, size2, 0, Math.PI * 2)
        ctx.fillStyle = '#8F00FF'
        ctx.shadowColor = '#8F00FF'
        ctx.shadowBlur = 12
        ctx.fill()
      }

      ctx.shadowBlur = 0
      angle += 0.015
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
      className="fixed inset-0 pointer-events-none -z-10 h-full w-full opacity-80"
    />
  )
}

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#0C1622] text-slate-100 overflow-x-hidden">
      <DnaBackground />

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

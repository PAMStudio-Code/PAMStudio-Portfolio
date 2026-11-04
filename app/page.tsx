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
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

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

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseRef.current.targetX = (e.clientX / innerWidth - 0.5) * 2
      mouseRef.current.targetY = (e.clientY / innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouseMove)

    const basePairCount = 42
    const radius = 100
    const heightStep = 18
    const twistRate = 0.14

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05

    // Noticeable tilt & perspective shift:
const centerX = canvas.width * 0.72 + mouseRef.current.x * 90
const centerY = canvas.height * 0.48 + mouseRef.current.y * 60
const tiltAngle = Math.PI / 5 + mouseRef.current.x * 0.45

      for (let i = 0; i < basePairCount; i++) {
        const currentAngle = angle + i * twistRate
        const yOffset = (i - basePairCount / 2) * heightStep

        const cos = Math.cos(currentAngle)
        const sin = Math.sin(currentAngle)

        const x1 = Math.cos(tiltAngle) * (cos * radius) - Math.sin(tiltAngle) * yOffset
        const y1 = Math.sin(tiltAngle) * (cos * radius) + Math.cos(tiltAngle) * yOffset

        const x2 = Math.cos(tiltAngle) * (-cos * radius) - Math.sin(tiltAngle) * yOffset
        const y2 = Math.sin(tiltAngle) * (-cos * radius) + Math.cos(tiltAngle) * yOffset

        ctx.beginPath()
        ctx.moveTo(centerX + x1, centerY + y1)
        ctx.lineTo(centerX + x2, centerY + y2)
        ctx.strokeStyle = 'rgba(74, 107, 130, 0.18)'
        ctx.lineWidth = 1
        ctx.stroke()

        const size1 = Math.max(1.8, 3.2 + sin * 1.2)
        ctx.beginPath()
        ctx.arc(centerX + x1, centerY + y1, size1, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(78, 205, 196, 0.55)'
        ctx.shadowColor = 'rgba(78, 205, 196, 0.3)'
        ctx.shadowBlur = 6
        ctx.fill()

        const size2 = Math.max(1.8, 3.2 - sin * 1.2)
        ctx.beginPath()
        ctx.arc(centerX + x2, centerY + y2, size2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(157, 126, 219, 0.5)'
        ctx.shadowColor = 'rgba(157, 126, 219, 0.25)'
        ctx.shadowBlur = 6
        ctx.fill()
      }

      ctx.shadowBlur = 0
    // Spins with your mouse speed:
angle += 0.007 + Math.abs(mouseRef.current.x) * 0.015
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
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
      <Navbar />

      <div className="relative w-full overflow-hidden">
        <AestheticDnaHero />
        <div className="relative z-10">
          <Hero />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-12 sm:gap-20">
        <Projects />
        <About />
        <Contact />
        <SiteFooter />
      </div>
    </main>
  )
}

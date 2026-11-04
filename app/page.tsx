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

    // Smoothly track mouse coordinates normalized from -1 to 1
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

      // Smooth interpolation (lerp) for fluid cursor trailing
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05

      // Dynamic reactive center and tilt based on cursor position
      const centerX = canvas.width * 0.72 + mouseRef.current.x * 25
      const centerY = canvas.height * 0.48 + mouseRef.current.y * 20
      const tilt

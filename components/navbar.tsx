'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#090D16]/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        
        {/* Brand: Circular Orbit Logo + PAMStudio */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-8 w-8 items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="h-full w-full drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
            >
              <defs>
                <linearGradient id="navCursorGrad" x1="10%" y1="60%" x2="80%" y2="20%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="40%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="navHaloGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="70%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#6D28D9" />
                </linearGradient>
              </defs>

              {/* Transparent Circular Ring Border */}
              <circle cx="50" cy="50" r="46" fill="none" stroke="#2563EB" strokeWidth="4.5" />

              {/* Logo Shapes */}
              <g transform="translate(5, 3) scale(0.9)">
                {/* Back Orbit Segment */}
                <path
                  d="M 38 31 C 45 27, 68 28, 71 39"
                  fill="none"
                  stroke="url(#navHaloGrad)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  opacity="0.85"
                />

                {/* Arrowhead */}
                <path
                  d="M 18 53 L 70 20 L 70 78 L 50 56 Z"
                  fill="url(#navCursorGrad)"
                  strokeLinejoin="round"
                />

                {/* Front Orbit Segment */}
                <path
                  d="M 36 32 C 30 38, 38 52, 57 56 C 75 60, 84 50, 79 41"
                  fill="none"
                  stroke="url(#navHaloGrad)"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            PAM<span className="text-[#3B82F6]">Studio</span>
          </span>
        </Link>

        {/* Right Navigation & Action Button */}
        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 sm:flex">
            <Link
              href="#home"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Home
            </Link>
            <Link
              href="#work"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Work
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              About
            </Link>
          </nav>

          {/* Let's Talk Pill Button */}
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.08)]"
          >
            Let&apos;s Talk
            <span className="text-base transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar

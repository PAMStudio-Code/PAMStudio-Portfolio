'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-black/70 backdrop-blur-xl shadow-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Section: Transparent Logo + PAMStudio */}
        <Link href="/" className="inline-flex items-center gap-3 transition-opacity hover:opacity-90">
          {/* Logo with No Background */}
          <div className="relative flex h-8 w-8 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="h-full w-full drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            >
              <defs>
                <linearGradient id="cursorGradNav" x1="10%" y1="60%" x2="80%" y2="20%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="40%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>

                <linearGradient id="haloGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="70%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#6D28D9" />
                </linearGradient>
              </defs>

              {/* Transparent Circular Ring Border */}
              <circle cx="50" cy="50" r="46" fill="none" stroke="#0047AB" strokeWidth="4" />

              {/* Logo Shapes */}
              <g transform="translate(5, 3) scale(0.9)">
                {/* Back Orbit Ring */}
                <path
                  d="M 38 31 C 45 27, 68 28, 71 39"
                  fill="none"
                  stroke="url(#haloGradNav)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  opacity="0.85"
                />

                {/* Stylized Arrowhead */}
                <path
                  d="M 18 53 L 70 20 L 70 78 L 50 56 Z"
                  fill="url(#cursorGradNav)"
                  strokeLinejoin="round"
                />

                {/* Front Orbit Ring */}
                <path
                  d="M 36 32 C 30 38, 38 52, 57 56 C 75 60, 84 50, 79 41"
                  fill="none"
                  stroke="url(#haloGradNav)"
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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#projects" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
            Projects
          </Link>
          <Link href="#services" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
            About
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Toggle Navigation</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-black/95 px-4 pt-2 pb-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            <Link
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
            >
              Services
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

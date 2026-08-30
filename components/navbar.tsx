'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X, SquareCode } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="inline-flex items-center gap-3 transition-opacity hover:opacity-90">
          {/* Pure Transparent Circular Logo */}
          <div className="relative flex h-9 w-9 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="h-full w-full drop-shadow-[0_0_10px_rgba(0,71,171,0.6)]"
            >
              <defs>
                {/* Cursor Gradient: Electric Blue to Violet */}
                <linearGradient id="navCursorGrad" x1="10%" y1="60%" x2="80%" y2="20%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="40%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>

                {/* Orbit Ring Gradient */}
                <linearGradient id="navHaloGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="70%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#6D28D9" />
                </linearGradient>
              </defs>

              {/* Transparent Circular Outer Ring */}
              <circle cx="50" cy="50" r="46" fill="none" stroke="#0047AB" strokeWidth="4" />

              {/* Centered Logo Shapes */}
              <g transform="translate(5, 3) scale(0.9)">
                {/* Orbit Ring (Back segment) */}
                <path
                  d="M 38 31 C 45 27, 68 28, 71 39"
                  fill="none"
                  stroke="url(#navHaloGrad)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  opacity="0.85"
                />

                {/* Stylized Arrowhead */}
                <path
                  d="M 18 53 L 70 20 L 70 78 L 50 56 Z"
                  fill="url(#navCursorGrad)"
                  strokeLinejoin="round"
                />

                {/* Orbit Ring (Front segment) */}
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

          {/* Brand Text */}
          <span className="text-xl font-bold tracking-tight text-white">
            PAM<span className="text-[#3B82F6]">Studio</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
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

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
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
            <span className="sr-only">Open main menu</span>
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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-black/95 px-4 pt-2 pb-6 md:hidden">
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

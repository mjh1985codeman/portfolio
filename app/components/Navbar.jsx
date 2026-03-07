'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/97 shadow-lg backdrop-blur-md border-b border-[#2d90eb]/20'
          : 'bg-slate-900/90 backdrop-blur-sm border-b border-slate-600/40'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        {/* Desktop nav - visible from 768px up */}
        <ul className="navbar-desktop-links flex items-center gap-6 list-none m-0 p-0">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block px-4 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#2d90eb]/20 font-medium transition-colors border border-transparent hover:border-[#2d90eb]/40"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button - only on small screens */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="navbar-mobile-toggle p-2.5 rounded-lg text-slate-200 hover:text-white hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-[#2d90eb] focus:ring-offset-2 focus:ring-offset-slate-900"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu - only on small screens */}
      <div
        id="mobile-menu"
        className={`navbar-mobile-menu overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="border-t border-slate-700/50 bg-slate-800/95 px-4 py-3 backdrop-blur-sm list-none m-0">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={closeMobileMenu}
                className="block py-3 text-slate-200 hover:text-[#2d90eb] font-medium transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

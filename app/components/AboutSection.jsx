'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const AboutSection = () => {
  const highlights = [
    { emoji: '👨‍👩‍👧‍👧', text: 'Married and Dad Life', borderColor: 'border-l-amber-400' },
    { emoji: '🖥️', text: 'Web and API Developer', borderColor: 'border-l-[#2d90eb]' },
    { emoji: '🏢', text: 'FinTech Developer', borderColor: 'border-l-emerald-500' },
    { emoji: '🧰', text: 'Aspiring Systems Architect', borderColor: 'border-l-violet-500' },
    { emoji: '⚽', text: 'Soccer Fan #GoNashvilleSC', borderColor: 'border-l-green-500' },
    { emoji: '🌲', text: 'Disc Golf Player (IYKYK) 😆', borderColor: 'border-l-lime-500' },
    { emoji: '🤝', text: "Don't hesitate—let's collaborate!!!", borderColor: 'border-l-[#2d90eb]' },
  ]

  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 border-t border-slate-700">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-200 via-[#2d90eb] to-slate-200 bg-clip-text text-transparent mb-6 text-center">
          About Me
        </h2>
        <p className="text-slate-200 text-lg leading-relaxed">
          Married dad by night, developer by day—I build web apps and APIs in FinTech and have my sights set on becoming a Systems Architect. When I&apos;m not at the keyboard, you&apos;ll find me cheering for Nashville SC or chasing discs in the woods.
        </p>
        <div className="mt-4 mb-6" style={{ minHeight: '2.5em' }} aria-live="polite">
          <span className="text-slate-200 text-base sm:text-lg">I am a </span>
          <TypeAnimation
            sequence={[
              "Certified Full Stack Developer...",
              1750,
              "UX/UI Developer...",
              1750,
              "Node API Builder and Debugger...",
              1750,
              "Logo Designer...",
              1750,
              "Experienced Problem Solver in a Corporate Agile Dev Environment...",
              1750,
              "Coding Coach for other aspiring developers...",
              1750,
              "Novice Disc Golf Player ;)",
              1750,
            ]}
            wrapper="span"
            speed={60}
            className="text-[#2d90eb] text-base sm:text-lg font-semibold"
            repeat={Infinity}
          />
        </div>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {highlights.map(({ emoji, text, borderColor }) => (
            <li
              key={text}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-700/60 border-l-4 ${borderColor} border border-slate-600 shadow-sm hover:bg-slate-700/80 hover:border-[#2d90eb]/50 transition-all duration-200 ${text.includes('collaborate') ? 'sm:col-span-2' : ''}`}
            >
              <span className="text-slate-200 font-medium">
                {emoji} {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutSection

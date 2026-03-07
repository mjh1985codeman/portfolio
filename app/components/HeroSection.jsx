'use client'
import React from 'react'
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-[60vh] py-10 lg:py-14 px-4 hero-fade-in">
            <div className="flex flex-col text-center justify-center max-w-4xl">
                <div className="flex justify-center mb-4">
                    <Image src="/images/mh-light-logo.gif" alt="mh animated logo" width={300} height={100} />
                </div>
            </div>
            <a
                href="#projects"
                className="max-w-fit flex flex-col items-center lg:flex-row lg:justify-center space-y-2 lg:space-y-0 lg:space-x-2 mt-6 font-extrabold sm:text-xl text-4xl lg:text-5xl animated-border-div rounded focus:outline-none focus:ring-2 focus:ring-[#2d90eb] focus:ring-offset-2 transition-transform hover:scale-[1.02]"
            >
                <h2 className="text-black m-0 p-0">Take A Peek At My</h2>
                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-800 to-[#2d90eb] m-0 p-0">Work Below</h2>
            </a>
            <div className="mt-8 flex flex-col items-center gap-2 text-slate-600 text-sm font-medium">
                <span>Scroll to explore</span>
                <span className="scroll-indicator" aria-hidden="true" />
            </div>
        </section>
    )
}

export default HeroSection

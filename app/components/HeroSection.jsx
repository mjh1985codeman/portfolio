'use client'
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className='flex flex-col items-center'>
            <div className="flex-col text-center justify-center">
                <div className="flex justify-center">
                    <Image src="/images/mh-light-logo.gif" alt="mh animated logo" width={300} height={100} />
                </div>
                <h1 className="text-black mb-4 text-4xl lg:text-6xl font-extrabold">Hello There, My name is Michael and I am a:</h1>
                <div className="m-3 mt-7" style={{ minHeight: '5em' }}>
                    <TypeAnimation
                        sequence={[
                            "Certified Full Stack Developer...",
                            1750,
                            "Mobile Developer...",
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
                            'Novice Disc Golf Player ;)',
                            1750,
                        ]}
                        wrapper="span"
                        speed={60}
                        className="text-[#474747] text-3xl lg:text-4xl font-extrabold font-serif"
                        repeat={Infinity}
                    />
                </div>
            </div>
            <div className='max-w-fit flex flex-col items-center lg:flex-row lg:justify-center space-x-2 mt-6 font-extrabold sm:text-1xl text-4xl lg:text-5xl animated-border-div'>
                <h2 className="text-black m-0 p-0">Take A Peek At My</h2>
                <div className="custom-glow"></div>
                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-800 to-[#2d90eb] m-0 p-0">Work Below</h2>
            </div>
        </section>
    )
}

export default HeroSection

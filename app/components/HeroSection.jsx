'use client'
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className='container flex items-center justify-center flex-col'>
            <div className="text-center">
                <div className="flex flex-col items-center">
                    <Image
                        src="/images/mh-light-logo.gif"
                        alt="mh animated logo"
                        width={300}
                        height={100}
                    />
                </div>
                <h1 className="text-black mb-4 text-4xl lg:text-6xl font-extrabold">Hello There, My name is Michael and I am a:</h1>
                <div className="m-3 mt-7">
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
            <h2 className="text-black mt-5 text-3xl lg:text-5xl text-center">Check out SOME of my work below!</h2>
        </section>
    )
}

export default HeroSection

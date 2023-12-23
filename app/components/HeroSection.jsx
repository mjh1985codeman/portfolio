import React from 'react'
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols=12">
                <div className="col-span-7 place-self-center">
                    <Image src="/images/mh-light-logo.gif"
                        alt="mh animated logo"
                        width={250}
                        height={100}>
                    </Image>
                    <h1 className="text-black mb-4 text-4xl lg:text-6xl font-extrabold">Michael Hodges Dev Portfolio</h1>
                </div>
                <div className="col-span-5">
                    <p className="text-[#505559] text-lg lg:text-xl">Seasoned Full Stack Developer that specializes in Javscript based technologies such as React, Next.js and Node.js.  Experiences include:</p>
                    <ul className="list-disc text-[#505559] my-4 pl-6">
                        <li className="mb-2">Building Multiple Javascript powered Full Stack Applications.</li>
                        <li className="mb-2">Building Node based Express powered Server API's; Both multi-route REST based and Document/Query based such as GraphQL.</li>
                        <li>Navigating, correcting and refactoring horrendous legacy code where I learned the importance of sound Development Principles and proper Documentation Procedures.</li>
                        <li>Product Support Engineer for a Large Payment Processor as part of an Agile Dev Team.</li>
                        <li>TA in the Full Stack Coding department of a global online learning platform that was founded by Harvard and MIT; edX.</li>
                        <li>AWS Certified.</li>
                    </ul>
                    <h2 className="text-black mb-4 text-3xl lg:text-5xl font-extrabold">Check out SOME of my work below!</h2>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

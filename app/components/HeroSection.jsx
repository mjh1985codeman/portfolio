import React from 'react'
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols=12">
                <div className="col-span-7 place-self-center">

                    <h1 className="text-black mb-4 text-4xl lg:text-6xl font-extrabold">Michael Hodges Dev Portfolio</h1>
                </div>
                <div className="col-span-5">
                    <p className="text-[#505559] text-lg lg:text-xl">Seasoned Full Stack Developer that specializes in Javscript based technologies such as React, Next.js and Node.js.</p>

                </div>
                <Image src="/images/mh-light-logo.gif"
                    alt="mh animated logo"
                    width={250}
                    height={100}>
                </Image>
            </div>
        </section>
    )
}

export default HeroSection

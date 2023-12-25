'use client'
import React, { useEffect } from 'react';
import Image from "next/image";

function ProjectSection() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        }, {});

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <>
            <div className='projectSectionDiv text-[#d8d8d8] font-serif"'>
                <section className='hidden'>
                    <h2 className='text-3xl lg:text-4xl font-extrabold'>Project One</h2>
                    <p className='flex flex-col items-center m-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolores tenetur nisi voluptas at similique labore, adipisci soluta molestias eius ab enim id sed ratione culpa ducimus ipsam hic consequatur?</p>
                    <Image src="/images/timber-prop-ss.png" alt="timber properties project" width={300} height={300} />
                </section>
                <section className='hidden'>
                    <h2>Project Two</h2>
                    <p>Brief Description here.</p>
                </section>
                <section className='hidden'>
                    <h2>Project Three</h2>
                    <p>Brief Description here.</p>
                </section>
                <section className='hidden'>
                    <h2>Project Four</h2>
                    <p>Brief Description here.</p>
                </section>
                <section className='hidden'>
                    <h2>Project Five</h2>
                    <p>Brief Description here.</p>
                </section>
                <section className='hidden'>
                    <h2>Project Six</h2>
                    <p>Brief Description here.</p>
                </section>
            </div>
        </>
    )
}

export default ProjectSection;

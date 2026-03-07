'use client'
import React, { useEffect } from 'react';
import Image from "next/image";

function ProjectSection() {
    useEffect(() => {
        const hiddenElements = document.querySelectorAll('.hidden');
        const intersectionState = new Map();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                intersectionState.set(entry.target, {
                    isIntersecting: entry.isIntersecting,
                    ratio: entry.intersectionRatio
                });
            });

            let best = null;
            let bestRatio = 0;
            hiddenElements.forEach((el) => {
                const state = intersectionState.get(el);
                if (state?.isIntersecting && state.ratio > bestRatio) {
                    bestRatio = state.ratio;
                    best = el;
                }
            });

            hiddenElements.forEach((el) => el.classList.remove('show'));
            if (best) best.classList.add('show');
        }, {
            rootMargin: '-38% 0px -38% 0px',
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
        });

        hiddenElements.forEach((el) => {
            intersectionState.set(el, { isIntersecting: false, ratio: 0 });
            observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <>
            <div id="projects" className="projectSectionDiv text-[#d8d8d8] font-serif">
                <section className='hidden'>
                    <h2 className="text-3xl lg:text-4xl font-extrabold rounded-lg border-2 cst-border-color p-2">Timber Properties</h2>
                    <p className='flex flex-col items-center m-12 text-xl'>This is a Full Stack (MERN) application I built where a rental property owner (and their staff) can host their various properties so that potential renters can review and reserve their properties.</p>
                    <a href="https://timber-properties.netlify.app/">
                        <Image src="/images/timber-prop-ss.png" alt="timber properties project" width={300} height={300} className='cst-border-color' />
                    </a>
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

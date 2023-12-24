'use client'
import React, { useEffect } from 'react';

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
    }, []);
    return (
        <>
            <div className='projectSectionDiv text-[#d8d8d8] text-3xl lg:text-4xl font-extrabold font-serif"'>
                <section className='hidden'>
                    <h2>Project One</h2>
                    <p>Brief Description here.</p>
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

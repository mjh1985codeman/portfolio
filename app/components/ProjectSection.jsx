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
    const projects = [
        {
            title: 'Timber Properties',
            description: 'A full-stack MERN application for a rental property business. Property owners can manage listings and upload images to S3, while renters can browse properties, book reservations with date validation, and pay down payments via Stripe. Includes JWT auth, email confirmations via Courier, and an admin dashboard.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB', 'GraphQL', 'Stripe', 'AWS S3'],
            liveUrl: 'https://timber-properties.netlify.app/',
            repoUrl: 'https://github.com/mjh1985codeman/timber-properties-client',
            image: '/images/timber-prop-ss.png',
        },
        {
            title: 'Holiday Chaos Coordinator',
            description: 'A holiday gift list organizer built with the MERN stack and GraphQL. Users can create gift lists, add recipients, and search for products via the eBay Browse API. Features JWT authentication, a responsive UI with Material UI and Bootstrap, and a full GraphQL schema with Apollo Client.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB', 'GraphQL', 'eBay API', 'MUI'],
            liveUrl: 'https://holiday-chaos-coordinator-production.up.railway.app/',
            repoUrl: 'https://github.com/mjh1985codeman/holiday-chaos-coordinator',
            image: '/images/Holiday-Chaos-ss.png',
        },
        {
            title: 'LOTR RPG',
            description: 'A text-based choose-your-own-adventure game set in Middle-earth. Players create a character, choose a role (Hobbit, Wizard, Elf, Dwarf, or Human), and navigate through ~20 branching scenarios. Wrong choices cost health points, and final scores land on a persistent leaderboard.',
            tech: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Handlebars', 'Howler.js'],
            liveUrl: 'https://lotr-rpg-production.up.railway.app/',
            repoUrl: 'https://github.com/mjh1985codeman/LOTR-RPG',
            image: '/images/LOTR-SS.png',
        },
        {
            title: 'Snake Game',
            description: 'The classic Snake game reimagined with vanilla JavaScript and ES modules. Features a clean modular architecture (separate modules for snake, food, grid, and input), a start screen, live score tracking, and a game-over modal. No frameworks or bundlers — just pure JS.',
            tech: ['JavaScript', 'HTML5', 'CSS3', 'ES Modules'],
            repoUrl: 'https://github.com/mjh1985codeman/mh-snake-game',
        },
        {
            title: 'Calorie Counter',
            description: 'A straightforward calorie tracking app. Set your profile and the Mifflin-St Jeor equation calculates your daily target based on age, weight, height, activity level, and goal (lose, maintain, or gain). Log calories with a quick-add input that instantly shows how many you have left for the day, and review your history over time.',
            tech: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
            image: '/images/Calorie-Counter-SS.png',
            liveUrl: 'https://calorie-counter-production-36b5.up.railway.app/',
            repoUrl: 'https://github.com/mjh1985codeman/calorie-counter',
        },
    ];

    return (
        <>
            <div id="projects" className="projectSectionDiv text-[#d8d8d8] font-serif">
                {projects.map((project, idx) => (
                    <section key={idx} className='hidden'>
                        <h2 className="text-3xl lg:text-4xl font-extrabold rounded-lg border-2 cst-border-color p-2">
                            {project.title}
                        </h2>
                        <p className='flex flex-col items-center m-8 text-xl leading-relaxed'>
                            {project.description}
                        </p>
                        <div className='flex flex-wrap justify-center gap-2 mb-6'>
                            {project.tech.map((t) => (
                                <span key={t} className='px-3 py-1 text-sm rounded-full bg-[#2d90eb22] border border-[#2d90eb55] text-[#2d90eb]'>
                                    {t}
                                </span>
                            ))}
                        </div>
                        {project.image && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className='mb-6'>
                                <Image src={project.image} alt={`${project.title} screenshot`} width={300} height={300} className='cst-border-color rounded-lg' />
                            </a>
                        )}
                        <div className='flex gap-4 mt-4'>
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                   className='px-6 py-2 rounded-lg border-2 border-[#2d90eb] text-[#2d90eb] hover:bg-[#2d90eb] hover:text-black transition-all duration-300 font-bold no-underline'>
                                    Live Site
                                </a>
                            )}
                            {project.repoUrl && (
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                                   className='px-6 py-2 rounded-lg border-2 border-[#6b7280] text-[#a0a0b0] hover:bg-[#6b7280] hover:text-white transition-all duration-300 font-bold no-underline'>
                                    GitHub
                                </a>
                            )}
                        </div>
                    </section>
                ))}
            </div>
        </>
    )
}

export default ProjectSection;

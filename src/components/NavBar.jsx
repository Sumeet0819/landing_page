import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import contentData from '../constants/content.json'

const NavBar = () => {
    const logoRef = useRef(null)
    const leftNavRef = useRef(null)
    const rightNavRef = useRef(null)

    useEffect(() => {
        // Create a timeline for coordinated animations with delay
        const tl = gsap.timeline({
            defaults: { ease: 'power3.out' },
            delay: 0.5 // Delay navbar animation to start after hero content begins
        })

        // Animate logo from top
        tl.fromTo(
            logoRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
        )

        // Animate left navigation from left
        tl.fromTo(
            leftNavRef.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1 },
            '-=0.6' // Start 0.6s before previous animation ends
        )

        // Animate right navigation from right
        tl.fromTo(
            rightNavRef.current,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1 },
            '-=0.8' // Start at the same time as left nav
        )
    }, [])

    return (
        <header className='absolute top-0 left-0 right-0 z-50'>
            <nav className='container mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6'>
                <div className='flex justify-between items-center relative'>
                    {/* Left Navigation - Hidden on mobile */}
                    <ul ref={leftNavRef} className='hidden md:flex items-center gap-4 lg:gap-6 order-1'>
                        {contentData.header.navigation.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.link}
                                    className='nav-link text-xs lg:text-sm font-medium uppercase tracking-widest text-white/90 hover:text-white transition-colors duration-300 relative'
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Logo - Centered on tablet/desktop, left on mobile */}
                    <div ref={logoRef} className='md:absolute md:left-1/2 md:-translate-x-1/2 order-2'>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.2em] text-white'>
                            {contentData.header.logo}
                        </h1>
                    </div>

                    {/* Right Navigation - Hidden on mobile */}
                    <ul ref={rightNavRef} className='hidden md:flex items-center gap-4 lg:gap-6 order-3'>
                        {contentData.header.rightNav.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.link}
                                    className='nav-link text-xs lg:text-sm font-medium uppercase tracking-widest text-white/90 hover:text-white transition-colors duration-300 relative'
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button - Visible only on mobile */}
                    <button
                        className='md:hidden flex flex-col gap-1 p-2 order-3'
                        aria-label='Toggle menu'
                    >
                        <span className='w-6 h-0.5 bg-white transition-all duration-300'></span>
                        <span className='w-6 h-0.5 bg-white transition-all duration-300'></span>
                        <span className='w-6 h-0.5 bg-white transition-all duration-300'></span>
                    </button>
                </div>
            </nav>

            {/* Styles for hover underline animation */}
            <style jsx>{`
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #ffffff;
                    transition: width 0.4s ease-out;
                }

                .nav-link:hover::after {
                    width: 100%;
                }
            `}</style>
        </header>
    )
}

export default NavBar
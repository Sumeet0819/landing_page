import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import NavBar from './NavBar'
import contentData from '../constants/content.json'

const Hero = () => {
    const bgImageRef = useRef(null)
    const heroContentRef = useRef(null)

    useEffect(() => {
        // Create a timeline for coordinated animations
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        // Animate background image - scale from 1.2 to 1 for immersive zoom effect
        tl.fromTo(
            bgImageRef.current,
            { scale: 1.2, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.8, ease: 'power2.out' }
        )

        // Animate hero content from bottom with opacity
        // Start slightly after navbar begins (0.3s delay to coordinate)
        tl.fromTo(
            heroContentRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
            '-=1.5' // Start 1.5s before previous animation ends (overlapping for smooth flow)
        )
    }, [])

    return (
        <section id='hero' className='h-[100vh]  p-2'>
            <div className='relative h-full w-full overflow-hidden rounded-lg'>
                {/* Background Image */}
                <img
                    ref={bgImageRef}
                    className='absolute inset-0 h-full w-full rounded-lg object-[center_100%] object-cover '
                    src="./bg.webp"
                    alt="Mountain landscape"
                />

                {/* Content Container */}
                <div className='relative h-full flex flex-col'>
                    {/* NavBar */}
                    <NavBar />

                    {/* Hero Content */}
                    <div className='flex-1 flex items-end justify-center '>
                        <div className='container px-4 md:px-6 lg:px-8 pb-6 lg:pb-12 '>
                            <div ref={heroContentRef} className='flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 lg:gap-0 '>
                                <div className='max-w-4xl'>

                                    {/* Title */}
                                    <h1 className='font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-white mb-6 leading-[0.85] tracking-tighter drop-shadow-2xl opacity-95'>
                                        {contentData.hero.title}
                                    </h1>

                                    {/* Subtitle with italic emphasis */}
                                    <p className='font-sans text-xl md:text-3xl lg:text-4xl font-light text-white/90 mb-2 leading-tight drop-shadow-lg tracking-wide max-w-2xl'>
                                        <span className='font-serif italic font-normal text-white'>{contentData.hero.subtitle}</span> {contentData.hero.subtitleContinue}
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <button className='group relative px-10 py-5 bg-[#454C2D] text-white rounded-full font-sans font-semibold text-sm md:text-base uppercase tracking-widest transition-all duration-500 ease-out shadow-[0_0_20px_rgba(69,76,45,0.4)] hover:shadow-[0_0_30px_rgba(69,76,45,0.6)] hover:-translate-y-1 overflow-hidden border border-white/10'>
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">Book Now</span>
                                    <div className="absolute inset-0 bg-[#3a4025] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
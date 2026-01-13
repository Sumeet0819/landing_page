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
                    className='absolute inset-0 h-full w-full rounded-lg object-cover'
                    src="./bg.webp"
                    alt="Mountain landscape"
                />

                {/* Content Container */}
                <div className='relative h-full flex flex-col'>
                    {/* NavBar */}
                    <NavBar />

                    {/* Hero Content */}
                    <div className='flex-1 flex items-end justify-center'>
                        <div className='container px-4 md:px-6 lg:px-8'>
                            <div ref={heroContentRef} className=' flex flex-col lg: flex-row justify-between items-center'>
                                <div>

                                    {/* Title */}
                                    <h2 className='text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-2 leading-tight drop-shadow-lg'>
                                        {contentData.hero.title}
                                    </h2>

                                    {/* Subtitle with italic emphasis */}
                                    <h2 className='text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-8 md:mb-10 lg:mb-12 leading-tight drop-shadow-lg'>
                                        <em className='font-serif italic'>{contentData.hero.subtitle}</em> {contentData.hero.subtitleContinue}
                                    </h2>
                                </div>

                                {/* CTA Button */}
                                <button className='bg-[#454C2D] hover:bg-[#3a4025] text-white px-6 py-3 md:px-8 md:py-4 rounded font-semibold text-sm md:text-base uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0'>
                                    book now                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
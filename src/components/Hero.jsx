import React from 'react'
import NavBar from './NavBar'
import contentData from '../constants/content.json'

const Hero = () => {
    return (
        <section id='hero' className='h-[96vh] rounded p-2'>
            <div className='relative h-full w-full overflow-hidden'>
                {/* Background Image */}
                <img
                    className='absolute inset-0 h-full w-full rounded object-cover'
                    src="https://images.unsplash.com/photo-1569369926169-9ee7fb80adeb?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Mountain landscape"
                />

                {/* Content Container */}
                <div className='relative h-full flex flex-col'>
                    {/* NavBar */}
                    <NavBar />

                    {/* Hero Content */}
                    <div className='flex-1 flex items-end justify-center'>
                        <div className='container px-4 md:px-6 lg:px-8'>
                            <div className=' flex flex-row justify-between items-center'>
                                <div>

                                    {/* Title */}
                                    <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-2 leading-tight drop-shadow-lg'>
                                        {contentData.hero.title}
                                    </h2>

                                    {/* Subtitle with italic emphasis */}
                                    <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-8 md:mb-10 lg:mb-12 leading-tight drop-shadow-lg'>
                                        <em className='font-serif italic'>{contentData.hero.subtitle}</em> {contentData.hero.subtitleContinue}
                                    </h2>
                                </div>

                                {/* CTA Button */}
                                <button className='bg-[#f4a261] hover:bg-[#e8924a] text-white px-6 py-3 md:px-8 md:py-4 rounded font-semibold text-sm md:text-base uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0'>
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
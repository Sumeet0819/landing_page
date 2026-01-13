import React from 'react'
import contentData from '../constants/content.json'

const NavBar = () => {
    return (
        <header className='absolute top-0 left-0 right-0 z-50'>
            <nav className='container mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6'>
                <div className='flex justify-between items-center relative'>
                    {/* Left Navigation - Hidden on mobile */}
                    <ul className='hidden md:flex items-center gap-4 lg:gap-6 order-1'>
                        {contentData.header.navigation.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.link}
                                    className='text-xs lg:text-sm font-medium uppercase tracking-widest text-white/90 hover:text-white transition-colors duration-300'
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Logo - Centered on tablet/desktop, left on mobile */}
                    <div className='md:absolute md:left-1/2 md:-translate-x-1/2 order-2'>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.2em] text-white'>
                            {contentData.header.logo}
                        </h1>
                    </div>

                    {/* Right Navigation - Hidden on mobile */}
                    <ul className='hidden md:flex items-center gap-4 lg:gap-6 order-3'>
                        {contentData.header.rightNav.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.link}
                                    className='text-xs lg:text-sm font-medium uppercase tracking-widest text-white/90 hover:text-white transition-colors duration-300'
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
        </header>
    )
}

export default NavBar
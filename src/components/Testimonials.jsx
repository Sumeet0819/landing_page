import React, { useRef, useState, useEffect } from 'react';
import content from '../constants/content.json';

const Testimonials = () => {
    const { testimonials } = content;
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScrollButtons();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollButtons);
            return () => container.removeEventListener('scroll', checkScrollButtons);
        }
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const newScrollLeft = scrollContainerRef.current.scrollLeft +
                (direction === 'left' ? -scrollAmount : scrollAmount);

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="reviews" className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header with Navigation */}
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif">
                        Our client <span className="italic font-light">says</span> about us!
                    </h2>

                    {/* Navigation Arrows */}
                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${canScrollLeft
                                ? 'border-gray-800 bg-white hover:bg-gray-800 hover:border-gray-800 group'
                                : 'border-gray-300 bg-gray-100 cursor-not-allowed'
                                }`}
                            aria-label="Previous testimonials"
                        >
                            <svg
                                className={`w-6 h-6 transition-colors ${canScrollLeft ? 'text-gray-800 group-hover:text-white' : 'text-gray-400'
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${canScrollRight
                                ? 'border-gray-800 bg-white hover:bg-gray-800 hover:border-gray-800 group'
                                : 'border-gray-300 bg-gray-100 cursor-not-allowed'
                                }`}
                            aria-label="Next testimonials"
                        >
                            <svg
                                className={`w-6 h-6 transition-colors ${canScrollRight ? 'text-gray-800 group-hover:text-white' : 'text-gray-400'
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Testimonials Carousel */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.reviews.map((review) => (
                        <div
                            key={review.id}
                            className="flex-shrink-0 w-[340px] md:w-[380px] snap-start"
                        >
                            <div className="bg-gradient-to-br from-[#e8ebe3] to-[#d4dac8]/80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                                {/* Header */}
                                <div className="p-6 pb-4">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">
                                                {review.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 font-light">
                                                {review.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="relative h-48 overflow-hidden group/img">
                                    <img
                                        src={review.image}
                                        alt={`${review.name}'s experience`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Review Text */}
                                <div className="p-6 pt-4 flex-1 flex flex-col justify-between">
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                        {review.review}
                                    </p>

                                    {/* Date */}
                                    <p className="text-xs text-gray-500 font-light">
                                        {review.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Navigation Hint */}
                <div className="md:hidden text-center mt-6">
                    <p className="text-sm text-gray-500">
                        Swipe to see more reviews →
                    </p>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
};

export default Testimonials;

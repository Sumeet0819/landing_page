import React, { useState } from 'react';
import content from '../constants/content.json';

const PopularPlaces = () => {
    const { popularPlaces } = content;
    const [currentPlace, setCurrentPlace] = useState(0);
    const place = popularPlaces.places[currentPlace];

    const handlePrevious = () => {
        setCurrentPlace((prev) =>
            prev === 0 ? popularPlaces.places.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentPlace((prev) =>
            prev === popularPlaces.places.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-16">
                    Popular <span className="italic font-light">places</span> nearby!
                </h2>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Side - Place Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
                                {place.name}
                            </h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                {place.description}
                            </p>
                        </div>

                        {/* Counter */}
                        <div className="text-sm text-gray-500 font-light">
                            {place.counter}
                        </div>
                    </div>

                    {/* Right Side - Images */}
                    <div className="space-y-6">
                        {/* Main Image Card */}
                        <div className="relative bg-gradient-to-br from-[#d4dac8] to-[#c5cdb5] rounded-2xl p-6 shadow-lg">
                            <div className="relative rounded-xl overflow-hidden mb-4 group">
                                <img
                                    src={place.mainImage}
                                    alt={place.name}
                                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <p className="text-center text-gray-800 font-serif text-lg">
                                {place.location}
                            </p>
                        </div>

                        {/* Thumbnail Gallery with Navigation */}
                        <div className="flex items-center gap-4">
                            {/* Thumbnails */}
                            <div className="flex-1 grid grid-cols-4 gap-3">
                                {place.thumbnails.map((thumb, index) => (
                                    <div
                                        key={index}
                                        className="relative rounded-lg overflow-hidden aspect-square cursor-pointer group"
                                    >
                                        <img
                                            src={thumb}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <div className="flex gap-2">
                                <button
                                    onClick={handlePrevious}
                                    className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 hover:bg-gray-50 transition-all duration-300 group"
                                    aria-label="Previous place"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors"
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
                                    onClick={handleNext}
                                    className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-gray-500 hover:bg-gray-50 transition-all duration-300 group"
                                    aria-label="Next place"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors"
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

                        {/* Description Text */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We have many more beautiful and adventurous places waiting to be explored. From hidden waterfalls and serene beaches to rugged mountains and vibrant cities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularPlaces;

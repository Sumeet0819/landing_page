import React from 'react';
import content from '../constants/content.json';

const Benefits = () => {
    const { about, benefits } = content;

    return (
        <section id="about" className="w-full bg-gradient-to-b from-white to-blue-50/30 py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16 flex   justify-between">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-[1px] bg-gray-400"></div>
                        <span className="text-sm text-gray-600 font-light tracking-wide">{about.label}</span>
                    </div>
                    <div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
                            Key <span className="italic font-light">benefits</span> of our resort
                        </h2>

                        <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
                            {about.description}
                        </p>
                    </div>

                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className={`${benefit.colSpan} ${benefit.rowSpan} rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group`}
                        >
                            {benefit.type === 'text' ? (
                                <div className="h-full bg-gradient-to-br from-[#e8ebe3] to-[#d4dac8]/80 p-8 flex flex-col justify-between border border-[#454C2D]/20 backdrop-blur-sm">
                                    <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4 group-hover:text-[#454C2D] transition-colors">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            ) : (
                                <div className="h-full relative overflow-hidden">
                                    <img
                                        src={benefit.image}
                                        alt={benefit.title || 'Travel experience'}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;

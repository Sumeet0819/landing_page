import React, { useState } from 'react';
import content from '../constants/content.json';

const Rooms = () => {
    const { rooms } = content;
    const [selectedRoom, setSelectedRoom] = useState(0);
    const [activeImage, setActiveImage] = useState(0);

    const currentRoom = rooms.roomTypes[selectedRoom];

    // Icon components
    const AmenityIcon = ({ type }) => {
        const icons = {
            coffee: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
            ),
            tv: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            intercom: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            'no-smoking': (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
            ),
            ac: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            ),
            water: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            doctor: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            wifi: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
            )
        };
        return icons[type] || icons.coffee;
    };

    return (
        <section id="rooms" className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 px-4 md:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-gray-400"></div>
                        <span className="text-sm text-gray-600 font-light tracking-wide uppercase">Accommodations</span>
                        <div className="w-8 h-[1px] bg-gray-400"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
                        Our <span className="italic font-light">Rooms</span>
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                        {rooms.description}
                    </p>
                </div>

                {/* Room Type Selector - Mobile First */}
                <div className="mb-8 md:mb-12">
                    <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide snap-x snap-mandatory">
                        {rooms.roomTypes.map((room, index) => (
                            <button
                                key={room.id}
                                onClick={() => {
                                    setSelectedRoom(index);
                                    setActiveImage(0);
                                }}
                                className={`flex-shrink-0 snap-start px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${selectedRoom === index
                                    ? 'bg-[#454C2D] text-white shadow-lg'
                                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#454C2D] hover:text-[#454C2D]'
                                    }`}
                            >
                                {room.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Room Details - Mobile First Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left: Images */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/3]">
                            <img
                                src={currentRoom.gallery[activeImage]}
                                alt={currentRoom.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Price Badge */}
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                <p className="text-[#454C2D] font-bold text-lg">{currentRoom.price}</p>
                                <p className="text-xs text-gray-600">{currentRoom.priceUnit}</p>
                            </div>
                        </div>

                        {/* Thumbnail Gallery */}
                        {currentRoom.gallery.length > 1 && (
                            <div className="grid grid-cols-4 gap-3">
                                {currentRoom.gallery.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(index)}
                                        className={`relative rounded-lg overflow-hidden aspect-square transition-all duration-300 ${activeImage === index
                                            ? 'ring-2 ring-[#454C2D] ring-offset-2'
                                            : 'opacity-70 hover:opacity-100'
                                            }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`${currentRoom.name} ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Details */}
                    <div className="space-y-6">
                        {/* Room Info */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-3">
                                {currentRoom.name}
                            </h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#454C2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span>{currentRoom.capacity}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#454C2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                    </svg>
                                    <span>{currentRoom.size}</span>
                                </div>
                            </div>

                            {/* Room Description */}
                            {currentRoom.description && (
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    {currentRoom.description}
                                </p>
                            )}
                        </div>

                        {/* Amenities */}
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Room Amenities</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {currentRoom.amenities.map((amenity, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-[#454C2D]/30 transition-colors"
                                    >
                                        <div className="text-[#454C2D]">
                                            <AmenityIcon type={amenity.icon} />
                                        </div>
                                        <span className="text-sm text-gray-700">{amenity.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Features */}
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {currentRoom.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                        <svg className="w-5 h-5 text-[#454C2D] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <button className="w-full sm:w-auto px-8 py-4 bg-[#454C2D] hover:bg-[#3a4025] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default Rooms;

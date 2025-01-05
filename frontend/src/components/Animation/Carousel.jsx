import React, { useState, useEffect, useRef } from 'react';
import { styles } from "../../styles/common";

const CarouselSection = ({ title, techs }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [momentum, setMomentum] = useState(0);
    const [autoScrollIndex, setAutoScrollIndex] = useState(0);
    const itemsPerScreen = 6;
    const [wheelTimeout, setWheelTimeout] = useState(null);

    const filteredTechs = techs.filter(tech =>
        tech.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Auto scroll every 15 seconds when idle
    useEffect(() => {
        let autoScrollTimer;
        if (!isDragging && filteredTechs.length > itemsPerScreen) {
            autoScrollTimer = setInterval(() => {
                setAutoScrollIndex((prev) => {
                    const nextIndex = prev + itemsPerScreen;
                    return nextIndex >= filteredTechs.length ? 0 : nextIndex;
                });
            }, 15000);
        }
        return () => clearInterval(autoScrollTimer);
    }, [isDragging, filteredTechs.length]);

    // Apply auto scroll
    useEffect(() => {
        if (carouselRef.current) {
            const scrollWidth = carouselRef.current.clientWidth;
            carouselRef.current.scrollTo({
                left: (scrollWidth / itemsPerScreen) * autoScrollIndex,
                behavior: 'smooth'
            });
        }
    }, [autoScrollIndex]);

    // Handle infinite scroll
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = carousel;
            const scrollEnd = scrollWidth / 2;

            if (scrollLeft >= scrollEnd) {
                carousel.scrollLeft = 0;
            } else if (scrollLeft <= 0) {
                carousel.scrollLeft = scrollEnd;
            }
        };

        carousel.addEventListener('scroll', handleScroll);
        return () => carousel.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle wheel events
    const handleWheel = (e) => {
        e.preventDefault();
        if (carouselRef.current) {
            const delta = e.deltaY;
            const scrollSpeed = 50;

            if (wheelTimeout) {
                clearTimeout(wheelTimeout);
            }

            carouselRef.current.scrollLeft += delta > 0 ? scrollSpeed : -scrollSpeed;

            const timeout = setTimeout(() => {
                const velocity = delta > 0 ? 2 : -2;
                setMomentum(velocity);
            }, 50);

            setWheelTimeout(timeout);
        }
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('wheel', handleWheel, { passive: false });
        }
        return () => {
            if (carousel) {
                carousel.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseUp = (e) => {
        setIsDragging(false);
        const endX = e.pageX - carouselRef.current.offsetLeft;
        const distance = startX - endX;
        const velocity = distance / 200;
        setMomentum(velocity);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.2;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        if (momentum !== 0) {
            const animate = () => {
                if (!carouselRef.current) return;
                carouselRef.current.scrollLeft += momentum;
                setMomentum(momentum * 0.90);
                if (Math.abs(momentum) > 0.1) {
                    requestAnimationFrame(animate);
                } else {
                    setMomentum(0);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [momentum]);

    return (
        <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
                <h3 className={`${styles.typography.textBase} font-semibold`}>{title}</h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/50
                                 border border-gray-200 dark:border-gray-700
                                 focus:outline-none focus:ring-2 focus:ring-blue-500
                                 placeholder:text-gray-400 text-sm w-40
                                 transition-all duration-300 focus:w-48"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/90 dark:from-gray-900/90 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/90 dark:from-gray-900/90 to-transparent z-10"></div>

                <div
                    ref={carouselRef}
                    className="flex gap-8 overflow-x-auto hide-scrollbar py-4 cursor-grab active:cursor-grabbing select-none"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setIsDragging(false)}
                    onWheel={handleWheel}
                >
                    {/* First set of items */}
                    {filteredTechs.map((tech, index) => (
                        <div
                            key={`prefix-${tech.name}-${index}`}
                            className="flex flex-col items-center flex-shrink-0 w-24 transition-transform duration-300 hover:scale-110"
                        >
                            <div className="pointer-events-none">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="h-12 w-12 mb-2 drop-shadow-lg"
                                    draggable="false"
                                />
                            </div>
                            <span className={`${styles.typography.textBase} text-sm text-center pointer-events-none`}>
                                {tech.name}
                            </span>
                        </div>
                    ))}
                    {/* Duplicated set for infinite scroll */}
                    {filteredTechs.map((tech, index) => (
                        <div
                            key={`suffix-${tech.name}-${index}`}
                            className="flex flex-col items-center flex-shrink-0 w-24 transition-transform duration-300 hover:scale-110"
                        >
                            <div className="pointer-events-none">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="h-12 w-12 mb-2 drop-shadow-lg"
                                    draggable="false"
                                />
                            </div>
                            <span className={`${styles.typography.textBase} text-sm text-center pointer-events-none`}>
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarouselSection;
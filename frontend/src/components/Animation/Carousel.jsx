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
        <div className={styles.carousel.container}>
            <div className={styles.carousel.header}>
                <h3 className={`${styles.typography.textBase} font-semibold`}>{title}</h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.carousel.searchInput}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <svg className={styles.carousel.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className={styles.carousel.carouselWrapper}>
                <div className={styles.carousel.gradientLeft}></div>
                <div className={styles.carousel.gradientRight}></div>

                <div
                    ref={carouselRef}
                    className={styles.carousel.scrollContainer}
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
                            className={styles.carousel.itemContainer}
                        >
                            <div className="pointer-events-none">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className={styles.carousel.itemImage}
                                    draggable="false"
                                />
                            </div>
                            <span className={styles.carousel.itemText}>
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
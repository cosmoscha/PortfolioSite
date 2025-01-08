import React, { useEffect, useState } from "react";
import { styles } from "../styles/common";
import PageHeader from "../components/PageHeader";
import useContentFetch from '../hooks/useContentFetch';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { content: aboutContent, isLoading, error } = useContentFetch('about', 'About');

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.mainWrapper}>
            <PageHeader title="About Me" />
            <main className={`${styles.pageContentWrapper} pt-32`}>
                <div className={`${styles.projectContainer} ${styles.pageTransition.base} ${isVisible ? styles.pageTransition.visible : styles.pageTransition.hidden}`}>
                    <div className={`${styles.firstProjectMobile} space-y-8`}>
                        {isLoading ? (
                            <div className={styles.loadingSpinner}>
                                <div className={styles.spinnerStyle} />
                            </div>
                        ) : error ? (
                            <div className={styles.errorContainer}>
                                <p className={styles.errorText}>{error}</p>
                            </div>
                        ) : aboutContent.length > 0 ? (
                            <>
                                {aboutContent.map((content, index) => (
                                    <p key={index} className={`${styles.typography.textBase} text-left`}>
                                        {content.Body}
                                    </p>
                                ))}
                                
                                {/* Image grid */}
                                <div className="flex flex-col space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div className="flex flex-col items-center w-full">
                                        <div className="w-full aspect-square bg-white/10 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
                                            <img
                                                src="/ventricosa.jpg"
                                                alt="Ventricosa"
                                                className="object-cover w-full h-full rounded-lg"
                                            />
                                        </div>
                                        <p className={`${styles.typography.textBase} text-center`}>My Nepenthes Ventricosa "Porcelain" 7 years old!</p>
                                    </div>

                                    <div className="flex flex-col items-center w-full">
                                        <div className="w-full aspect-square bg-white/10 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
                                            <img
                                                src="/hills.jpg"
                                                alt="Hiking Adventures"
                                                className="object-cover w-full h-full rounded-lg"
                                            />
                                        </div>
                                        <p className={`${styles.typography.textBase} text-center`}>Top of Brasstown Bald</p>
                                    </div>

                                    <div className="flex flex-col items-center w-full">
                                        <div className="w-full aspect-square bg-white/10 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
                                            <img
                                                src="/sky.png"
                                                alt="Nature Views"
                                                className="object-cover w-full h-full rounded-lg"
                                            />
                                        </div>
                                        <p className={`${styles.typography.textBase} text-center`}>Savannah Coast</p>
                                    </div>

                                    <div className="flex flex-col items-center w-full">
                                        <div className="w-full aspect-square bg-white/10 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
                                            <img
                                                src="/smokeys.png"
                                                alt="Plant Collection"
                                                className="object-cover w-full h-full rounded-lg"
                                            />
                                        </div>
                                        <p className={`${styles.typography.textBase} text-center`}>Great Smokey Mountains</p>
                                    </div>

                                    <div className="flex flex-col items-center w-full">
                                        <div className="w-full aspect-square bg-white/10 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
                                            <img
                                                src="/abg.png"
                                                alt="Botanical Gardens"
                                                className="object-cover w-full h-full rounded-lg"
                                            />
                                        </div>
                                        <p className={`${styles.typography.textBase} text-center`}>Atlanta Botanical Gardens</p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className={styles.emptyStateContainer}>
                                <p>No content available at the moment.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;
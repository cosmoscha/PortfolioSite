import React, { useEffect, useState } from "react";
import { styles } from "../styles/common";
import PageHeader from "../components/PageHeader";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

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
                        <p className={`${styles.typography.textBase} text-left`}>
                            Hi there! I'm River Cha, a software engineer with a deep fascination for artificial intelligence
                            and its potential to transform how we solve complex problems. I'm particularly excited about
                            building and understanding AI networks, constantly exploring new architectures and approaches
                            to machine learning.
                        </p>
                        <p className={`${styles.typography.textBase} text-left`}>
                            When I'm not immersed in code or AI research, you'll likely find me on a trail somewhere.
                            I'm an avid hiker and camping enthusiast, finding both peace and inspiration in nature.
                            There's something magical about disconnecting from technology and reconnecting with the
                            natural world, whether it's a challenging mountain trek or a peaceful weekend camping trip.
                        </p>
                        <p className={`${styles.typography.textBase} text-left`}>
                            My love for nature extends to my home, where I maintain a diverse collection of plants.
                            Gardening has become more than just a hobby - it's a way to bring life and tranquility
                            into my space. From nurturing delicate indoor plants to cultivating outdoor gardens,
                            I find joy in watching things grow and creating green spaces that promote wellbeing.
                        </p>
                        <p className={`${styles.typography.textBase} text-left`}>
                            This blend of technology and nature defines who I am - someone who's equally excited about
                            advancing the frontiers of AI as I am about spending a quiet morning tending to my plants
                            or planning the next outdoor adventure. I believe this balance brings a unique perspective
                            to my work and life.
                        </p>


                        <div className="flex flex-col space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center w-full">
                                <div className="w-full aspect-square bg-white/10 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
                                    <img
                                        src="/ventricosa.jpg"
                                        alt="Ventricosa"
                                        className="object-cover w-full h-full rounded-lg"
                                    />
                                </div>
                                <p className="mt-4 text-base text-gray-300 w-full text-center">My Nepenthes Ventricosa "Porcelain" 7 years old!</p>
                            </div>

                            <div className="flex flex-col items-center w-full">
                                <div className="w-full aspect-square bg-white/10 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
                                    <img
                                        src="/hills.jpg"
                                        alt="Hiking Adventures"
                                        className="object-cover w-full h-full rounded-lg"
                                    />
                                </div>
                                <p className="mt-4 text-base text-gray-300 w-full text-center">Top of Brasstown Bald</p>
                            </div>

                            <div className="flex flex-col items-center w-full">
                                <div className="w-full aspect-square bg-white/10 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
                                    <img
                                        src="/sky.png"
                                        alt="Nature Views"
                                        className="object-cover w-full h-full rounded-lg"
                                    />
                                </div>
                                <p className="mt-4 text-base text-gray-300 w-full text-center">Savannah coast</p>
                            </div>

                            <div className="flex flex-col items-center w-full">
                                <div className="w-full aspect-square bg-white/10 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
                                    <img
                                        src="/plantdaddy.png"
                                        alt="Plant Collection"
                                        className="object-cover w-full h-full rounded-lg"
                                    />
                                </div>
                                <p className="mt-4 text-base text-gray-300 w-full text-center">My pinguicula</p>
                            </div>

                            <div className="flex flex-col items-center w-full">
                                <div className="w-full aspect-square bg-white/10 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
                                    <img
                                        src="/abg.png"
                                        alt="Botanical Gardens"
                                        className="object-cover w-full h-full rounded-lg"
                                    />
                                </div>
                                <p className="mt-4 text-base text-gray-300 w-full text-center">Atlanta Botanical Gardens</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;
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
                    <div className={`${styles.firstProjectMobile} space-y-8`}> {/* Added space-y-8 for paragraph spacing */}
                        <p className={`${styles.typography.textBase} text-left`}>
                            Hi there! I'm River Cha, a software engineer focused on cloud solutions and infrastructure automation.
                            Currently at Trident Trust Corporate Services, I architect and develop scalable software solutions
                            for crypto data processing using Python, Go, and AWS services.
                        </p>
                        <p className={`${styles.typography.textBase} text-left`}>
                            My expertise spans infrastructure-as-code with Terraform, containerization with Docker and Kubernetes,
                            and developing robust data pipelines for both real-time and batch processing. I have a strong
                            background in financial technology, having previously engineered RESTful APIs for payment processing
                            systems at Priority Technology Holdings.
                        </p>
                        <p className={`${styles.typography.textBase} text-left`}>
                            I'm passionate about building efficient, cloud-native applications and implementing automated
                            solutions that drive operational excellence. Whether it's designing microservices architectures
                            or optimizing data processing workflows, I focus on creating reliable and scalable systems.
                        </p>
                        <p className={`${styles.typography.textBase} text-left`}>
                            Take a look at my projects to see how I've put these skills into practice!
                        </p>

                        {/* Image container */}
                        <div className="flex flex-col md:flex-row justify-between items-center mt-12 space-y-8 md:space-y-0 md:space-x-8">
                            <div className="w-full md:w-1/2 h-72 md:h-96 bg-white/10 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
                                <img
                                    src="/ventricosa.jpg"
                                    alt="Ventricosa"
                                    className="object-contain h-full w-full p-6"
                                />
                            </div>
                            <div className="w-full md:w-1/2 h-72 md:h-96 bg-white/10 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
                                <img
                                    src="/hills.jpg"
                                    alt="Vite"
                                    className="object-contain h-full w-full p-6"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;
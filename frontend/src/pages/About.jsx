import React, { useEffect, useState } from "react";
import { styles } from "../styles/common";
import PageHeader from "../components/PageHeader";

const BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = BASE_URL.startsWith('http') ? BASE_URL : `https://${BASE_URL}`;

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [aboutContent, setAboutContent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        fetchAboutContent();
    }, []);

    const fetchAboutContent = async () => {
        try {
            console.log('Fetching from:', `${API_URL}/api/about`);
            const response = await fetch(`${API_URL}/api/about`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                credentials: 'include'
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to fetch about content: ${response.status} ${response.statusText} ${errorText}`);
            }

            const data = await response.json();
            console.log('Received data:', data);


            const contentArray = Object.values(data)
                .filter(item => item.Component === "About")
                .sort((a, b) => parseInt(a.Paragraph) - parseInt(b.Paragraph));

            setAboutContent(contentArray);
            setError(null);
        } catch (err) {
            console.error("Error fetching about content:", err);
            setError(err.message || "Failed to load content. Please try again later.");
            setAboutContent([]);
        } finally {
            setIsLoading(false);
        }
    };

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
                                    {/* ... rest of your image grid ... */}
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
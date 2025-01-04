import React, { useEffect, useState } from "react";
import { styles } from "../styles/common";
import PageHeader from "../components/PageHeader";

// Modify the API URL construction
const BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = BASE_URL.startsWith('http') ? BASE_URL : `https://${BASE_URL}`;

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            console.log('Fetching from:', `${API_URL}/api/projects`);
            const response = await fetch(`${API_URL}/api/projects`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                credentials: 'include' // Add this if you need to send cookies
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to fetch projects: ${response.status} ${response.statusText} ${errorText}`);
            }

            const data = await response.json();
            console.log('Received data:', data);
            setProjects(Array.isArray(data) ? data : [data]);
            setError(null);
        } catch (err) {
            console.error("Error fetching projects:", err);
            setError(err.message || "Failed to load projects. Please try again later.");
            setProjects([]);
        } finally {
            setIsLoading(false);
        }
    };

    // Rest of your component code remains the same
    const renderProjectUrl = (url) => (
        <div className={styles.projectText}>
            <a href={url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                {url}
            </a>
        </div>
    );

    const renderProjectCard = (project, index) => (
        <div key={index} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>
                {project.title || `Project ${index + 1}`}
            </h3>
            <p className={styles.projectText}>
                {project.description || "No description available"}
            </p>
            {project.URL && renderProjectUrl(project.URL)}
            {project.technologies && (
                <div className={styles.projectTechContainer}>
                    {project.technologies.map((tech, i) => (
                        <span key={i} className={styles.technologyTag}>
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <div className={styles.mainWrapper}>
            <PageHeader title="My Projects" />
            <main className={styles.pageContentWrapper}>
                <div className={`${styles.projectContainer} ${styles.pageTransition.base} ${isVisible ? styles.pageTransition.visible : styles.pageTransition.hidden}`}>
                    {isLoading ? (
                        <div className={styles.loadingSpinner}>
                            <div className={styles.spinnerStyle} />
                        </div>
                    ) : error ? (
                        <div className={styles.errorContainer}>
                            <p className={styles.errorText}>{error}</p>
                        </div>
                    ) : projects.length > 0 ? (
                        <div className={styles.projectGrid}>
                            {projects.map((project, index) => renderProjectCard(project, index))}
                        </div>
                    ) : (
                        <div className={styles.emptyStateContainer}>
                            <p>No projects available at the moment.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Projects;
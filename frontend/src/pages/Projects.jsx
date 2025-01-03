import React, { useEffect, useState } from "react";
import { getAccessToken } from '../utils/AWSAuth';
import { styles } from "../styles/common";
import PageHeader from "../components/PageHeader"

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
            const token = await getAccessToken();
            console.log('Got token:', token ? 'Token received' : 'No token');

            const response = await fetch(
                "https://awb63ldwlh.execute-api.us-east-1.amazonaws.com/Get_Tables",
                {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'Origin': window.location.origin,
                    },
                    mode: 'cors'
                }
            );

            if (!response.ok) {
                const errorText = await response.text();
                console.error('API Response:', {
                    status: response.status,
                    statusText: response.statusText,
                    body: errorText
                });
                throw new Error(`Failed to fetch projects: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('API Response:', data);
            setProjects(Array.isArray(data) ? data : [data]);
            setError(null);

        } catch (err) {
            console.error("Detailed Error:", err);
            setError(err.message || "Failed to load projects. Please try again later.");
            setProjects([]);
        } finally {
            setIsLoading(false);
        }
    };

    const renderProjectUrl = (url) => (
        <div className={styles.projectText}>
            <a href={url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                {url}
            </a>
        </div>
    );

   const renderProjectCard = (project, index) => (
    <div key={index} className={styles.projectCard}>  {/* Removed the conditional firstProjectMobile class */}
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

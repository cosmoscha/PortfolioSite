import { useState, useEffect } from 'react';

const BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = BASE_URL.startsWith('http') ? BASE_URL : `https://${BASE_URL}`;

export const useContentFetch = (endpoint, component) => {  // removed default export
    const [content, setContent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchContent = async () => {
        try {
            console.log('Fetching from:', `${API_URL}/api/${endpoint}`);
            const response = await fetch(`${API_URL}/api/${endpoint}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch content: ${response.status}`);
            }

            const data = await response.json();
            setContent(data || []);
            setError(null);
        } catch (err) {
            console.error(`Error fetching ${endpoint}:`, err);
            setError(err.message);
            setContent([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchContent();
    }, [endpoint, component]);

    return { content, isLoading, error, refetch: fetchContent };
};
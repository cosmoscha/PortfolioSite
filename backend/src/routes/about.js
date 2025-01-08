import express from 'express';
import { getAwsToken } from '../config/aws.js';

const router = express.Router();

router.get('/projects', async (req, res) => {
    try {
        const token = await getAwsToken();

        const response = await fetch(
            "https://awb63ldwlh.execute-api.us-east-1.amazonaws.com/paragraphs",

            {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!response.ok) {
            throw new Error(`AWS API error: ${response.statusText}`);
        }

        const projects = await response.json();
        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({
            error: 'Failed to fetch projects',
            details: error.message
        });
    }
});

export default aboutRoutes;
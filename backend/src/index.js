import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { CognitoIdentityProviderClient, InitiateAuthCommand } from '@aws-sdk/client-cognito-identity-provider';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// More explicit env loading
const envPath = path.resolve(__dirname, '../.env');
console.log('Loading .env from:', envPath);
console.log('.env file exists:', fs.existsSync(envPath));

const result = dotenv.config({ path: envPath });
console.log('Dotenv load result:', result);

// Log all env variables immediately
console.log('Initial Environment Check:', {
    AWS_CLIENT_ID: process.env.AWS_CLIENT_ID?.substring(0, 3) + '...',
    AWS_CLIENT_SECRET: process.env.AWS_CLIENT_SECRET ? 'Present' : 'Missing',
    AWS_USERNAME: process.env.AWS_USERNAME ? 'Present' : 'Missing',
    AWS_PASSWORD: process.env.AWS_PASSWORD ? 'Present' : 'Missing'
});
// Make sure this is at the top
dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Debug function
function debugEnvVariables() {
    console.log('AWS Credentials Check:', {
        clientId: process.env.AWS_CLIENT_ID ? 'Present' : 'Missing',
        clientSecret: process.env.AWS_CLIENT_SECRET ? 'Present' : 'Missing',
        username: process.env.AWS_USERNAME ? 'Present' : 'Missing',
        password: process.env.AWS_PASSWORD ? 'Present' : 'Missing'
    });
}

// Add this function that was missing
async function getAwsToken() {
    try {
        const client = new CognitoIdentityProviderClient({
            region: 'us-east-1'
        });

        const secretHash = await calculateSecretHash(
            process.env.AWS_CLIENT_ID,
            process.env.AWS_CLIENT_SECRET,
            process.env.AWS_USERNAME
        );

        const command = new InitiateAuthCommand({
            AuthFlow: 'USER_PASSWORD_AUTH',
            ClientId: process.env.AWS_CLIENT_ID,
            AuthParameters: {
                USERNAME: process.env.AWS_USERNAME,
                PASSWORD: process.env.AWS_PASSWORD,
                SECRET_HASH: secretHash
            },
        });

        const response = await client.send(command);
        return response.AuthenticationResult?.AccessToken;
    } catch (error) {
        console.error('AWS Authentication Error:', error);
        throw error;
    }
}

async function calculateSecretHash(clientId, clientSecret, username) {
    if (!clientId || !clientSecret || !username) {
        throw new Error('Missing required credentials for secret hash calculation');
    }

    const crypto = await import('crypto');
    const message = username + clientId;
    const hmac = crypto.createHmac('SHA256', clientSecret);
    hmac.update(message);
    return Buffer.from(hmac.digest()).toString('base64');
}

app.get('/api/projects', async (req, res) => {
    try {
        debugEnvVariables();

        console.log('Starting AWS authentication...');
        const token = await getAwsToken();

        if (!token) {
            throw new Error('Failed to get AWS token');
        }

        console.log('Token received, fetching projects...');
        const response = await fetch(
            "https://awb63ldwlh.execute-api.us-east-1.amazonaws.com/Get_Tables",
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
        console.error('Detailed error:', error);
        res.status(500).json({
            error: 'Failed to fetch projects',
            details: error.message,
            stack: error.stack
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    debugEnvVariables();
});
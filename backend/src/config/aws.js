import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { CognitoIdentityProviderClient, InitiateAuthCommand } from '@aws-sdk/client-cognito-identity-provider';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

async function getAwsToken() {
    const client = new CognitoIdentityProviderClient({ region: 'us-east-1' });

    const command = new InitiateAuthCommand({
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: process.env.AWS_CLIENT_ID,
        AuthParameters: {
            USERNAME: process.env.AWS_USERNAME,
            PASSWORD: process.env.AWS_PASSWORD,
        },
    });

    try {
        const response = await client.send(command);
        return response.AuthenticationResult?.AccessToken;
    } catch (error) {
        console.error('AWS Auth Error:', error);
        throw error;
    }
}

app.get('/api/projects', async (req, res) => {
    try {
        console.log('Getting AWS token...');
        const token = await getAwsToken();
        console.log('Token received:', token ? 'Yes' : 'No');

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
        console.error('Error:', error);
        res.status(500).json({
            error: 'Failed to fetch projects',
            details: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
import { CognitoIdentityProviderClient, InitiateAuthCommand } from '@aws-sdk/client-cognito-identity-provider';

// Debug loaded environment variables
const clientId = import.meta.env.VITE_AWS_CLIENT_ID;
const clientSecret = import.meta.env.VITE_AWS_CLIENT_SECRET;
const username = import.meta.env.VITE_AWS_USERNAME;
const password = import.meta.env.VITE_AWS_PASSWORD;

console.log('Loaded Environment Variables:', {
    clientId,
    clientSecret,
    username,
    password,
});

// Helper function to calculate secret hash using Web Crypto API
async function calculateSecretHash(clientId, clientSecret, username) {
    if (!clientId || !clientSecret || !username) {
        throw new Error(`Missing required parameters for calculateSecretHash:
        clientId=${clientId},
        clientSecret=${clientSecret},
        username=${username}`);
    }

    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
        'raw',
        encoder.encode(clientSecret),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
    );
    const data = encoder.encode(username + clientId);
    const signature = await crypto.subtle.sign('HMAC', key, data);
    return btoa(String.fromCharCode(...new Uint8Array(signature))); // Base64 encoding
}

// Function to fetch AccessToken
export async function getAccessToken() {
    const region = 'us-east-1';

    if (!clientId || !clientSecret || !username || !password) {
        throw new Error(`Missing environment variables for authentication:
        clientId=${clientId},
        clientSecret=${clientSecret},
        username=${username},
        password=${password ? '********' : 'undefined'}`); // Mask the password for security
    }

    const client = new CognitoIdentityProviderClient({ region });
    const secretHash = await calculateSecretHash(clientId, clientSecret, username);

    const command = new InitiateAuthCommand({
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: clientId,
        AuthParameters: {
            USERNAME: username,
            PASSWORD: password,
            SECRET_HASH: secretHash,
        },
    });

    try {
        const authResponse = await client.send(command);
        if (authResponse.AuthenticationResult) {
            console.log('Authentication Successful:', authResponse.AuthenticationResult);
            return authResponse.AuthenticationResult.AccessToken; // Return only AccessToken
        } else {
            throw new Error('Authentication failed or additional steps required.');
        }
    } catch (error) {
        console.error('Error during authentication:', error.message);
        throw error;
    }
}

import { CognitoIdentityProviderClient, InitiateAuthCommand } from '@aws-sdk/client-cognito-identity-provider';
import crypto from 'crypto';

function calculateSecretHash(username, clientId, clientSecret) {
    const message = username + clientId;
    const hmac = crypto.createHmac('SHA256', clientSecret);
    return hmac.update(message).digest('base64');
}

export async function getAwsToken() {
    const secretHash = calculateSecretHash(
        process.env.AWS_USERNAME,
        process.env.AWS_CLIENT_ID,
        process.env.AWS_CLIENT_SECRET
    );

    const client = new CognitoIdentityProviderClient({
        region: process.env.AWS_REGION || 'us-east-1'
    });

    const command = new InitiateAuthCommand({
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: process.env.AWS_CLIENT_ID,
        AuthParameters: {
            USERNAME: process.env.AWS_USERNAME,
            PASSWORD: process.env.AWS_PASSWORD,
            SECRET_HASH: secretHash
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
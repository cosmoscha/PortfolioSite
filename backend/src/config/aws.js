import { CognitoIdentityProviderClient, InitiateAuthCommand } from '@aws-sdk/client-cognito-identity-provider';

export async function getAwsToken() {
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
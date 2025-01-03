import { Amplify } from 'aws-amplify';

const awsConfig = {
    Auth: {
        Cognito: {
            region: "us-east-1",
            userPoolId: "us-east-1_iWJLJdz9k",
            userPoolClientId: "35cirb9f920v50jqm27gvt566f",
            oauth: {
                domain: 'd84l1y8p4kdic.cloudfront.net',
                scope: ['openid', 'email', 'profile'],
                redirectSignIn: ['https://d84l1y8p4kdic.cloudfront.net'],
                redirectSignOut: ['https://d84l1y8p4kdic.cloudfront.net'],
                responseType: 'code'
            }
        }
    }
};

Amplify.configure(awsConfig);
export default awsConfig;
import { CognitoUserPool } from "amazon-cognito-identity-js"

const poolData = {
    UserPoolId: "us-east-1_LmNMqJsD1",
    ClientId: "4u3q6m7tcqf4t8lkui8tohmpp6"
}

export default new CognitoUserPool(poolData);
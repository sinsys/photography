import env from '../env'

export const CognitoConfig = {
  Auth: {
    identityPoolId: env.AMAZON_IDENTITY_POOL_ID
  }
}

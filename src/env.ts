import { cleanEnv, str, email } from 'envalid'

export default cleanEnv(process.env, {
  AMAZON_IDENTITY_POOL_ID: str(),
  AMAZON_REGION: email(),
  AMAZON_USER_POOL_ID: str(),
  AMAZON_WEB_CLIENT_ID: str(),
})

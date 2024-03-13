export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly APP_HOST_EMAIL_PASSWORD: string;
      readonly MONGO_CONNECTION_ID: string;
      readonly JWT_SECRET: string;
    }
  }
}

import path from "path";
import dotenv from "dotenv";

const result2 = dotenv.config({
  path: path.join(__dirname, `../../.env`),
});
if (result2.error) {
  throw result2.error;
}

const { env } = process;

export default {
  SECRET_KEY: env.SECRET_KEY ?? "",
  NodeEnv: env.NODE_ENV ?? "",
  Port: env.PORT ?? 0,
  DB: {
    DATABASE: env.DATABASE ?? "postgres", // Ensure this is set to your PostgreSQL database name
    HOST: env.DB_HOST ?? "127.0.0.1", // Host for PostgreSQL
    PORT: env.DB_PORT ?? "5432", // Default PostgreSQL port
    USERNAME: env.DB_USERNAME ?? "postgres", // Default PostgreSQL username
    PASSWORD: env.DB_PASSWORD , // Password for PostgreSQL
    READER_HOST: env.DB_READER_HOST ?? "127.0.0.1", // Reader host if applicable
  },
  accessKeyId: env.ACCESS_KEY_ID!,
  secretAccessKey: env.SECRET_ACCESS_KEY!,
  region: env.REGION!,
  bucket: env.BUCKET!,
  userEmail: env.userEmail!,
  password: env.password!,
  companyEmail : env.companyEmail!,
  Server : 'Gmail'!
} as const;

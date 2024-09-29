import { S3Client } from "@aws-sdk/client-s3";
import ENVs from "@src/constants/EnvVars";
// s3 storage client
export const s3Client = new S3Client({
  credentials: {
    accessKeyId: ENVs.accessKeyId,
    secretAccessKey: ENVs.secretAccessKey,
  },
  region: ENVs.region,
});

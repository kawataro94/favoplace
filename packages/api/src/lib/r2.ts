import { ReadStream } from 'node:fs';
import { S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';

const client = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

export function R2Upload({
  stream,
  key,
  mimetype,
}: {
  stream: ReadStream;
  key: string;
  mimetype: string;
}) {
  return new Upload({
    client,
    params: {
      Bucket: `favoplace`,
      Body: stream,
      Key: key,
      ContentType: mimetype,
    },
  });
}

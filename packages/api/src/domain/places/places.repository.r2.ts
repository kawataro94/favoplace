import { ReadStream } from 'node:fs';
import { R2Upload } from '@api/lib/r2';

export async function uploadThumbnail({
  id,
  userId,
  file,
}: {
  id: string;
  userId: string;
  file: {
    filename: string;
    mimetype: string;
    createReadStream: () => ReadStream;
  };
}): Promise<boolean> {
  const upload = R2Upload({
    stream: file.createReadStream(),
    key: `${userId}/places/${id}/thumbnails/${file.filename}`,
    mimetype: file.mimetype,
  });

  await upload.done();

  return true;
}

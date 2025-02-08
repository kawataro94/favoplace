import { ReadStream } from 'node:fs';
import { R2Upload } from '@api/lib/r2';

export async function upload({
  userId,
  placeId,
  file,
}: {
  userId: string;
  placeId: string;
  file: {
    filename: string;
    mimetype: string;
    createReadStream: () => ReadStream;
  };
}): Promise<{ pathname: string }> {
  const pathname = `${userId}/places/${placeId}/thumbnails/${file.filename}`;
  const upload = R2Upload({
    stream: file.createReadStream(),
    key: pathname,
    mimetype: file.mimetype,
  });

  await upload.done();

  return { pathname };
}

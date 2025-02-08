import { ReadStream } from 'node:fs';
import { R2Upload } from '@api/lib/r2';

export async function upload({
  placeId,
  userId,
  file,
}: {
  placeId: string;
  userId: string;
  file: {
    filename: string;
    mimetype: string;
    createReadStream: () => ReadStream;
  };
}): Promise<{ pathname: string }> {
  const pathname = `${userId}/places/${placeId}/photos/${file.filename}`;
  const upload = R2Upload({
    stream: file.createReadStream(),
    key: pathname,
    mimetype: file.mimetype,
  });

  await upload.done();

  return { pathname };
}

import { ReadStream } from 'node:fs';
import { Injectable } from '@nestjs/common';
import { upload } from './place-photos.repository.r2';

@Injectable()
export class PlacePhotosService {
  constructor() {}

  async upload({
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
    return upload({ id, userId, file });
  }
}

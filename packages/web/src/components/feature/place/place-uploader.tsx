import { Button, FileInput, Flex } from "@mantine/core";
import { useNotification } from "@web/components/ui/use-notification";
import { UPLOAD_PLACE_PHOTO } from "@web/lib/upload-place-photo";
import { UPLOAD_PLACE_THUMBNAIL } from "@web/lib/upload-place-thumbnail";
import { useState } from "react";
import { useMutation } from "urql";

function PlaceThumbnailUploader({
  userId,
  placeId,
}: {
  userId: string;
  placeId: string;
}) {
  const [file, setFile] = useState<File>();
  const [_, uploadFile] = useMutation(UPLOAD_PLACE_THUMBNAIL);
  const { notifySuccess, notifyFailure } = useNotification();

  async function handleFileUpload() {
    try {
      await uploadFile({ userId, placeId, file });
      notifySuccess();
    } catch (e) {
      notifyFailure();
    }
  }

  return (
    <Flex align={"end"} gap={12}>
      <FileInput
        label="Thumbnail Upload"
        placeholder="Select file"
        clearable
        onChange={(file) => setFile(file!)}
        w={400}
      />
      <Button onClick={handleFileUpload}>Upload</Button>
    </Flex>
  );
}

function PlacePhotosUploader({
  userId,
  placeId,
}: {
  userId: string;
  placeId: string;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [_, uploadFile] = useMutation(UPLOAD_PLACE_PHOTO);
  const { notifySuccess, notifyFailure } = useNotification();

  async function handleFilesUpload() {
    try {
      await Promise.all(
        files.map((file) => {
          return (async () => uploadFile({ placeId, userId, file }))();
        })
      );

      notifySuccess();
    } catch (e) {
      notifyFailure();
    }
  }

  return (
    <Flex align={"end"} gap={12}>
      <FileInput
        label="Photos Upload"
        placeholder="Select files"
        clearable
        multiple
        onChange={setFiles}
        w={400}
      />
      <Button onClick={handleFilesUpload}>Upload</Button>
    </Flex>
  );
}

export const PlaceUploader = {
  Thumbnail: PlaceThumbnailUploader,
  Photos: PlacePhotosUploader,
};

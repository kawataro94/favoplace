import { useState } from "react";
import { useMutation } from "urql";
import { useNotification } from "@web/components/ui/use-notification";
import { UPLOAD_PLACE_PHOTO } from "@web/lib/upload-place-photo";
import { Button, FileInput, Flex } from "@mantine/core";

export function PlacePhotoUploader({
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

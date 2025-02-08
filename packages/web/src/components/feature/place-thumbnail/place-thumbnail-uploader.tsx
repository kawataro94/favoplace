import { useState } from "react";
import { useMutation } from "urql";
import { useNotification } from "@web/components/ui/use-notification";
import { UPLOAD_PLACE_THUMBNAIL } from "@web/lib/upload-place-thumbnail";
import { Button, FileInput, Flex } from "@mantine/core";

export function PlaceThumbnailUploader({
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

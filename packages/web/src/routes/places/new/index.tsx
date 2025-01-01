import { Button, Flex, Space, Textarea, TextInput } from "@mantine/core";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useForm } from "@mantine/form";
import { useNotification } from "@web/components/ui/use-notification";
import { createPlace } from "@web/lib/create-place";

export const Route = createFileRoute("/places/new/")({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();
  const { notifySuccess, notifyFailure } = useNotification();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      placeName: "",
      description: "",
    },
    validate: {
      placeName: (value) => (value ? null : "name is required"),
    },
  });

  async function _createPlace(place: {
    placeName: string;
    description: string;
  }) {
    try {
      const { id } = await createPlace(place);

      notifySuccess();
      router.navigate({ to: "/places/$placeId", params: { placeId: id } });
    } catch (e) {
      notifyFailure();
    }
  }

  return (
    <form onSubmit={form.onSubmit(_createPlace)}>
      <TextInput
        withAsterisk
        label="name"
        {...form.getInputProps("placeName")}
      />

      <Space h="xs" />

      <Textarea label="description" {...form.getInputProps("description")} />

      <Space h="md" />

      <Flex justify="flex-end">
        <Button type="submit">Save</Button>
      </Flex>
    </form>
  );
}

import { Card, Image } from "@mantine/core";

function Default({
  pathname,
  children,
}: {
  pathname: string;
  children: React.ReactNode;
}) {
  return (
    <Card p="0" shadow="lg" radius="md">
      <Image src={`${import.meta.env.PUBLIC_R2_URL}/${pathname}`} />
      {children}
    </Card>
  );
}

export const ImageCard = {
  Default,
};

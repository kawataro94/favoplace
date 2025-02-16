import { Fragment } from "react/jsx-runtime";
import { IconCalendar, IconHeart } from "@tabler/icons-react";
import { Group, SimpleGrid, Text, useMantineTheme } from "@mantine/core";
import { ImageCard } from "@web/components/ui/image-card";

export function PlacePhotoGallery({
  placePhotos,
}: {
  placePhotos: { pathname: string; isFavorite: boolean }[];
}) {
  const theme = useMantineTheme();

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 4 }}
      spacing={{ md: 20 }}
      verticalSpacing={{ md: 20 }}
    >
      {placePhotos.map(({ pathname, isFavorite }) => (
        <Fragment key={pathname}>
          <ImageCard.Default pathname={pathname}>
            <Group justify="space-between" gap="xs" p="10px">
              <Group gap="6px" color={theme.colors.dark[2]}>
                <IconCalendar
                  size={20}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm">2024-12-20</Text>
              </Group>
              <IconHeart
                size={20}
                stroke={1.5}
                color={isFavorite ? theme.colors.pink[6] : undefined}
                {...{
                  fill: isFavorite ? theme.colors.pink[6] : "#fff",
                }}
                cursor="pointer"
              />
            </Group>
          </ImageCard.Default>
        </Fragment>
      ))}
    </SimpleGrid>
  );
}

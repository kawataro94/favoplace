import { Fragment } from "react/jsx-runtime";
import { IconCalendar, IconHeart, IconStar } from "@tabler/icons-react";
import {
  Group,
  SimpleGrid,
  Text,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { ImageCard } from "@web/components/ui/image-card";

export function PlacePhotoGallery({
  placePhotos,
  handleFavoritePhotoUpdate,
  handleThumbnailPhotoUpdate,
}: {
  placePhotos: {
    id: string;
    pathname: string;
    isFavorite: boolean;
    isThumbnail: boolean;
  }[];
  handleFavoritePhotoUpdate: (
    placePhotoId: string,
    isFavorite: boolean
  ) => Promise<void>;
  handleThumbnailPhotoUpdate?: (
    placePhotoId: string,
    isThumbnail: boolean
  ) => Promise<void>;
}) {
  const theme = useMantineTheme();

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 4 }}
      spacing={{ md: 20 }}
      verticalSpacing={{ md: 20 }}
    >
      {placePhotos.map(({ id, pathname, isFavorite, isThumbnail }) => (
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

              <Group gap="6px">
                {handleThumbnailPhotoUpdate && (
                  <Tooltip label="Thumbnail Photo" position="bottom">
                    <IconStar
                      size={20}
                      stroke={1.5}
                      color={theme.colors.yellow[6]}
                      {...{
                        fill: isThumbnail ? theme.colors.yellow[6] : "#fff",
                      }}
                      cursor="pointer"
                      onClick={() =>
                        handleThumbnailPhotoUpdate(id, !isThumbnail)
                      }
                    />
                  </Tooltip>
                )}
                <IconHeart
                  size={20}
                  stroke={1.5}
                  color={theme.colors.pink[6]}
                  {...{
                    fill: isFavorite ? theme.colors.pink[6] : "#fff",
                  }}
                  cursor="pointer"
                  onClick={() => handleFavoritePhotoUpdate(id, !isFavorite)}
                />
              </Group>
            </Group>
          </ImageCard.Default>
        </Fragment>
      ))}
    </SimpleGrid>
  );
}

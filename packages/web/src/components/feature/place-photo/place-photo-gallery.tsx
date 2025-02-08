import { Fragment } from "react/jsx-runtime";
import { SimpleGrid } from "@mantine/core";

export function PlacePhotoGallery({
  placePhotos,
}: {
  placePhotos: { pathname: string }[];
}) {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 4 }}
      spacing={{ md: 20 }}
      verticalSpacing={{ md: 20 }}
    >
      {placePhotos.map(({ pathname }) => (
        <Fragment key={pathname}>
          <img src={`${import.meta.env.PUBLIC_R2_URL}/${pathname}`} />
        </Fragment>
      ))}
    </SimpleGrid>
  );
}

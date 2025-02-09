import { useEffect, useState } from "react";
import { Anchor, Space, Title } from "@mantine/core";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PlacePhotoGallery } from "@web/components/feature/place-photo/place-photo-gallery";
import { fetchPlace } from "@web/lib/fetch-place";
import { useUserContext } from "@web/lib/user-context";

export const Route = createFileRoute("/places_/$placeId/photos")({
  component: RouteComponent,
});

function RouteComponent() {
  const { placeId } = Route.useParams();
  const { userId } = useUserContext();
  const [{ name, placePhotos }, setPlace] = useState<{
    name: string;
    description: string;
    visitCount: number;
    visitHistories: { date: string }[];
    placePhotos: {
      pathname: string;
    }[];
  }>({
    name: "",
    description: "",
    visitCount: 0,
    visitHistories: [],
    placePhotos: [],
  });

  useEffect(() => {
    if (!userId) return;
    (async function () {
      const { place: _place } = await fetchPlace({ placeId, userId });
      setPlace(_place);
    })();
  }, [userId]);

  return (
    <>
      <Title order={1}>{name}</Title>
      <Space h="md" />
      <PlacePhotoGallery placePhotos={placePhotos} />
      <Space h="sm" />
      <Anchor component={Link} to="/places/$placeId" params={{ placeId }}>
        Back
      </Anchor>
    </>
  );
}

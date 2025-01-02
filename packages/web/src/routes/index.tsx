import { useEffect, useState, Fragment } from "react";
import { SimpleGrid } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { fetchPlaces } from "@web/lib/fetch-places";
import { PlaceCounter } from "@web/components/feature/place/place-counter";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const [places, setPlaces] = useState<
    {
      id: string;
      name: string;
      visitCount: number;
    }[]
  >([]);

  useEffect(() => {
    (async function () {
      const { places: _places } = await fetchPlaces();
      setPlaces(_places);
    })();
  }, []);

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 4 }}
      spacing={20}
      verticalSpacing={20}
    >
      {places.map(({ id, name, visitCount }) => (
        <Fragment key={name}>
          <PlaceCounter id={id} name={name} visitCount={visitCount} />
        </Fragment>
      ))}
    </SimpleGrid>
  );
}

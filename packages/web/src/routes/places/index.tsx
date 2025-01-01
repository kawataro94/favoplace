import { useEffect, useState } from "react";
import stylex from "@stylexjs/stylex";
import { createFileRoute } from "@tanstack/react-router";
import { Tabs } from "@mantine/core";
import { fallback, zodSearchValidator } from "@tanstack/router-zod-adapter";
import { z } from "zod";
import { PlaceTable } from "@web/components/feature/place/place-table";
import { PlaceGallery } from "@web/components/feature/place/place-gallery";
import { fetchPlaces } from "@web/lib/fetch-places";

const searchSchema = z.object({
  view: fallback(z.enum(["list", "gallery"]), "gallery").default("gallery"),
});

export const Route = createFileRoute("/places/")({
  component: PlaceComponent,
  validateSearch: zodSearchValidator(searchSchema),
});

function PlaceComponent() {
  const { view } = Route.useSearch();

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
    <Tabs defaultValue={view}>
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="list">List</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" {...stylex.props(styles.panel)}>
        <PlaceGallery places={places} />
      </Tabs.Panel>

      <Tabs.Panel value="list" {...stylex.props(styles.panel)}>
        <PlaceTable places={places} />
      </Tabs.Panel>
    </Tabs>
  );
}

const styles = stylex.create({
  panel: { paddingTop: "20px" },
});

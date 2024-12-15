import { useEffect, useState } from "react";
import { Space, Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { fetchPlace } from "@web/lib/fetchPlace";
import { PlaceDetails } from "@web/components/feature/place/place-details";
import { VisitHistoryTable } from "@web/components/feature/visit-history/visit-history-table";

export const Route = createFileRoute("/places/$placeId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { placeId } = Route.useParams();

  const [{ name, description, visitCount, visitHistories }, setPlace] =
    useState<{
      name: string;
      description: string;
      visitCount: number;
      visitHistories: { date: string }[];
    }>({
      name: "",
      description: "",
      visitCount: 0,
      visitHistories: [],
    });

  useEffect(() => {
    (async function () {
      const { place: _place } = await fetchPlace({ placeId });
      setPlace(_place);
    })();
  }, []);

  return (
    <>
      <Title order={1}>{name}</Title>
      <Space h="sm" />
      <PlaceDetails description={description} visitCount={visitCount} />

      <Space h="xl" />

      <Title order={2}>History</Title>
      <Space h="sm" />
      <VisitHistoryTable histories={visitHistories} />
    </>
  );
}

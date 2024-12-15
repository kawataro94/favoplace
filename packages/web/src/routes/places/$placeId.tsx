import { useEffect, useState } from "react";
import { Space, Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { fetchPlace } from "@web/lib/fetchPlace";
import { PlaceDetails } from "@web/components/feature/place/place-details";
import { VisitHistoryTable } from "@web/components/feature/visit-history/visit-history-table";

const histories = [
  { date: "2024-12-15 12:00" },
  { date: "2024-12-16 12:00" },
  { date: "2024-12-19 12:00" },
  { date: "2024-12-21 12:00" },
  { date: "2024-12-22 12:00" },
];

export const Route = createFileRoute("/places/$placeId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { placeId } = Route.useParams();

  const [{ name, description, visitCount }, setPlace] = useState<{
    name: string;
    description: string;
    visitCount: number;
  }>({
    name: "",
    description: "",
    visitCount: 0,
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
      <VisitHistoryTable histories={histories} />
    </>
  );
}

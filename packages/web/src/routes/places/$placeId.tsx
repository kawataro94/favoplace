import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/places/$placeId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { placeId } = Route.useParams();

  return `Hello places/${placeId} !`;
}

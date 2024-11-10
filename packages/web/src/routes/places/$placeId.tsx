import { createFileRoute } from "@tanstack/react-router";
import { fallback, zodSearchValidator } from "@tanstack/router-zod-adapter";
import { z } from "zod";

const searchSchema = z.object({
  view: fallback(z.enum(["list", "gallery"]), "list").default("list"),
});

export const Route = createFileRoute("/places/$placeId")({
  component: RouteComponent,
  validateSearch: zodSearchValidator(searchSchema),
});

function RouteComponent() {
  const { placeId } = Route.useParams();
  const { view } = Route.useSearch();

  return (
    <>
      Hello
      <br />
      placeId: {placeId}
      <br />
      view: {view}
    </>
  );
}

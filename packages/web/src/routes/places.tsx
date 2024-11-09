import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/places")({
  component: PlaceComponent,
});

function PlaceComponent() {
  return (
    <div className="p-2">
      <h3>Places</h3>
    </div>
  );
}

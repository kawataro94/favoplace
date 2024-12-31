import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/places/new/")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /places/new/!";
}

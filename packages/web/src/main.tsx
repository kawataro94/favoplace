import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import {
  RouterProvider,
  createRouter,
  LinkComponentProps,
} from "@tanstack/react-router";
import { Notifications } from "@mantine/notifications";
import { routeTree } from "./routeTree.gen";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

declare module "@mantine/core" {
  interface AnchorProps extends LinkComponentProps {}
}

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <MantineProvider>
        <Notifications />
        <RouterProvider router={router} />
      </MantineProvider>
    </React.StrictMode>
  );
}

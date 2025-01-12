import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
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
  interface ButtonProps extends LinkComponentProps {}
}

const CLERK_PUBLISHABLE_KEY = import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!CLERK_PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env.local file");
}

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <MantineProvider>
        <ClerkProvider
          publishableKey={CLERK_PUBLISHABLE_KEY}
          afterSignOutUrl="/"
        >
          <Notifications />
          <RouterProvider router={router} />
        </ClerkProvider>
      </MantineProvider>
    </React.StrictMode>
  );
}

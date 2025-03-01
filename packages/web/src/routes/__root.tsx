import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Anchor, Space } from "@mantine/core";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { UserContextProvider } from "@web/lib/user-context";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <UserContextProvider>
      <div className="px-4 py-2 flex justify-between gap-2 text-lg">
        <div className="flex">
          <Anchor
            component={Link}
            to="/"
            activeProps={{
              className: "font-bold",
            }}
            activeOptions={{ exact: true }}
          >
            Counter
          </Anchor>
          <Space w="sm" />
          <Anchor
            component={Link}
            to="/places"
            activeProps={{
              className: "font-bold",
            }}
          >
            Place
          </Anchor>
        </div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <hr />
      <div className="p-10 md:p-20">
        <Outlet />
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </UserContextProvider>
  );
}

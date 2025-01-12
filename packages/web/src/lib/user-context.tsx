import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useUser } from "@clerk/clerk-react";

const UserContext = createContext({ userId: "" });

export function UserContextProvider({ children }: { children: ReactNode }) {
  const { user } = useUser();
  const userId = useMemo(() => user?.id ?? "", [user]);

  return (
    <UserContext.Provider value={{ userId }}>{children}</UserContext.Provider>
  );
}

export function useUserContext(): { userId: string } {
  return useContext(UserContext);
}

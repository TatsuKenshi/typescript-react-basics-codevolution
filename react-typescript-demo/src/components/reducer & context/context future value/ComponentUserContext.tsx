import { createContext, useState } from "react";

export type AuthorizedUser = {
  name: string;
  email: string;
};

type ComponentUserContextType = {
  user: AuthorizedUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthorizedUser | null>>;
};

type ComponentUserContextProviderProps = {
  children: React.ReactNode;
};

// export const ComponentUserContext = createContext<ComponentUserContextType | null>(null);
export const ComponentUserContext = createContext(
  {} as ComponentUserContextType
);

const ComponentUserContextProvider = ({
  children,
}: ComponentUserContextProviderProps) => {
  const [user, setUser] = useState<AuthorizedUser | null>(null);

  return (
    <ComponentUserContext.Provider value={{ user, setUser }}>
      {children}
    </ComponentUserContext.Provider>
  );
};

export default ComponentUserContextProvider;

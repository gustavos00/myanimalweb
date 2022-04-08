import { createContext, useState } from "react";

interface StatesContextContent {
  isLoading: boolean;
  setIsLoading: (e: boolean) => void;
}

const StatesContext = createContext<StatesContextContent>(
  {} as StatesContextContent
);

export function StatesProvider({ children }: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <StatesContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
}

export default StatesContext;

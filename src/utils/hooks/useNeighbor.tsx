import React, { useState, useRef, createContext, useCallback, useContext, useMemo } from "react";

type NeighborContext = {
  screenIndex: number;
  screens: React.MutableRefObject<React.ReactNode[]>;
  setScreenIndex: React.Dispatch<React.SetStateAction<number>>;
}

const NeighborContext = createContext<NeighborContext | null>(null);

function useNeighborContext() {
  const context = useContext(NeighborContext);
  if (!context) {
    throw new Error("NeighborContext must be used within Neighbor's Provider.");
  }

  return context;
}

function useNeighbor() {
  const { screens, screenIndex, setScreenIndex } = useNeighborContext();

  const previous = useCallback(() => {
    if (screenIndex - 1 < 0) {
      return;
    }
    setScreenIndex(screenIndex - 1);
  }, [screenIndex, setScreenIndex]);

  const next = useCallback(() => {
    if (screenIndex + 1 >= screens.current.length) {
      return;
    }
    setScreenIndex(screenIndex + 1);
  }, [screens, screenIndex, setScreenIndex]);

  const isLastIndex = useCallback(() => {
    return screenIndex === screens.current.length - 1;
  }, [screenIndex, screens]);

  return { previous, next, isLastIndex } as const;
}

type NeighborProviderProps = {
  components: React.ReactElement[];
}

function Neighbor(props: NeighborProviderProps) {
  const { components } = props;

  const [screenIndex, setScreenIndex] = useState(0);
  const screens = useRef<React.ReactElement[]>(components);
  const screen = screens.current[screenIndex];

  const value = useMemo(() => {
    return {
      screens,
      screenIndex,
      setScreenIndex
    };
  }, [screenIndex]);

  return (
    <NeighborContext.Provider value={value}>
      {screen}
    </NeighborContext.Provider>
  );
}

export {
  useNeighbor,
  Neighbor
};
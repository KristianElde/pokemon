"use client";

import { createContext, ReactNode, useState } from "react";
import { Pokemon } from "./functions/data-fetching";

interface ProvidersProps {
  children: ReactNode;
}

interface ColsContextType {
  hiddenColumns: string[];
  toggleCol: (colName: string) => void;
}

interface SelectedPokemonContextType {
  selectedPokemon: Pokemon | null;
  setSelectedPokemon: (pokemon: Pokemon) => void;
}

export const ColsContext = createContext<ColsContextType>({
  hiddenColumns: [],
  toggleCol: () => {},
});

export const SelectedPokemonContext = createContext<SelectedPokemonContextType>(
  {
    selectedPokemon: null,
    setSelectedPokemon: () => {},
  }
);

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const toggleCol = (colName: string) => {
    hiddenColumns.includes(colName)
      ? setHiddenColumns(hiddenColumns.filter((e) => e !== colName))
      : setHiddenColumns([...hiddenColumns, colName]);
  };

  return (
    <ColsContext.Provider value={{ hiddenColumns, toggleCol }}>
      <SelectedPokemonContext.Provider
        value={{ selectedPokemon, setSelectedPokemon }}
      >
        {children}
      </SelectedPokemonContext.Provider>
    </ColsContext.Provider>
  );
};

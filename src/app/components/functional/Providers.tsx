"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { getPokemonObjects, Pokemon } from "../../functions/data-fetching";

interface ProvidersProps {
  children: ReactNode;
}

interface PokemonDataContextType {
  pokemonData: Pokemon[];
  setPokemonData: (pokemons: Pokemon[]) => void;
}

export const PokemonDataContext = createContext<PokemonDataContextType>({
  pokemonData: [],
  setPokemonData: () => {},
});

interface SelectedPokemonContextType {
  selectedPokemon: Pokemon | null;
  setSelectedPokemon: (pokemon: Pokemon) => void;
}

export const SelectedPokemonContext = createContext<SelectedPokemonContextType>(
  {
    selectedPokemon: null,
    setSelectedPokemon: () => {},
  }
);

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemons: Pokemon[] = await getPokemonObjects(151);
      setPokemonData(pokemons);
    };
    if (pokemonData.length === 0) fetchPokemon();
    if (selectedPokemon === null) setSelectedPokemon(pokemonData[0]);
  }, []);

  return (
    <PokemonDataContext.Provider value={{ pokemonData, setPokemonData }}>
      <SelectedPokemonContext.Provider
        value={{ selectedPokemon, setSelectedPokemon }}
      >
        {children}
      </SelectedPokemonContext.Provider>
    </PokemonDataContext.Provider>
  );
};

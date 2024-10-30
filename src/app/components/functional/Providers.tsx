"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import {
  getPokemonObjects,
  getTypeSprites,
  Pokemon,
} from "../../functions/data-fetching";

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

interface TypeSPritesContextType {
  typeSprites: Map<string, string>;
  setTypeSprites: (pokemon: Map<string, string>) => void;
}

export const TypeSpritesContext = createContext<TypeSPritesContextType>({
  typeSprites: new Map<string, string>(),
  setTypeSprites: () => {},
});

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [typeSprites, setTypeSprites] = useState<Map<string, string>>(
    new Map<string, string>()
  );

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemons: Pokemon[] = await getPokemonObjects(151);
      setPokemonData(pokemons);
    };

    const fetchTypeSprites = async () => {
      const typeSprites: Map<string, string> = await getTypeSprites();
      setTypeSprites(typeSprites);
    };

    if (pokemonData.length === 0) fetchPokemon();
    if (selectedPokemon === null) setSelectedPokemon(pokemonData[0]);
    if (typeSprites.size === 0) fetchTypeSprites();
  }, []);

  return (
    <PokemonDataContext.Provider value={{ pokemonData, setPokemonData }}>
      <TypeSpritesContext.Provider value={{ typeSprites, setTypeSprites }}>
        {children}
      </TypeSpritesContext.Provider>
    </PokemonDataContext.Provider>
  );
};

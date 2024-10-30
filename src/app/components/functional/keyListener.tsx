"use client";

import { useContext, useEffect } from "react";
import { PokemonDataContext } from "./Providers";
import { parseAsInteger, useQueryState } from "nuqs";

export default function KeyListener() {
  const [selectedPokemon, setSelectedPokemon] = useQueryState(
    "selectedId",
    parseAsInteger.withDefault(1)
  );
  const pokemonData = useContext(PokemonDataContext).pokemonData;
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (selectedPokemon) {
        if (event.key === "ArrowUp") {
          const newSelectedPokemon =
            selectedPokemon === 1 ? selectedPokemon : selectedPokemon - 1;
          setSelectedPokemon(newSelectedPokemon);
        }
        if (event.key === "ArrowDown") {
          const newSelectedPokemon =
            selectedPokemon === pokemonData.length
              ? selectedPokemon
              : selectedPokemon + 1;
          setSelectedPokemon(newSelectedPokemon);
        }
      }
    };

    document.addEventListener("keyup", handleKeyPress);

    return () => {
      document.removeEventListener("keyup", handleKeyPress);
    };
  });

  return null;
}

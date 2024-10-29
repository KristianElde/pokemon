"use client";

import { useContext, useEffect } from "react";
import { PokemonDataContext, SelectedPokemonContext } from "./Providers";

export default function KeyListener() {
  const { selectedPokemon, setSelectedPokemon } = useContext(
    SelectedPokemonContext
  );
  const pokemonData = useContext(PokemonDataContext).pokemonData;
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (selectedPokemon) {
        if (event.key === "ArrowUp") {
          const currentId = selectedPokemon.id;
          const newSelectedPokemon =
            currentId === 1 ? selectedPokemon : pokemonData.at(currentId - 2);
          setSelectedPokemon(newSelectedPokemon ?? selectedPokemon);
        }
        if (event.key === "ArrowDown") {
          const currentId = selectedPokemon.id;
          const newSelectedPokemon =
            currentId === pokemonData.length
              ? selectedPokemon
              : pokemonData.at(currentId);
          setSelectedPokemon(newSelectedPokemon ?? selectedPokemon);
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

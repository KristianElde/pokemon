"use client";

import PokemonTableRow from "./components/PokemonTableRow";
import { getPokemonObjects, type Pokemon } from "./functions/data-fetching";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [tableHeaders, setTableHeaders] = useState<string[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemons: Pokemon[] = await getPokemonObjects(151);
      setPokemonData(pokemons);
    };
    if (pokemonData.length === 0) fetchPokemon();
    if (selectedPokemon === null) setSelectedPokemon(pokemonData[0]);
  }, []);

  return (
    <div>
      <h1>Pokemon</h1>
      <table className="border">
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Weight</th>
          <th>Height</th>
          <th>Types</th>
          <th>Picture</th>
        </tr>
        {pokemonData.map((pokemon) => {
          return <PokemonTableRow pokemon={pokemon} />;
        })}
      </table>
    </div>
  );
}

"use client";

import Checkbox from "./components/checkbox";
import PokemonTableRow from "./components/pokemonTableRow";
import { getPokemonObjects, type Pokemon } from "./functions/data-fetching";
import { useContext, useEffect, useState } from "react";
import { ColsContext, SelectedPokemonContext } from "./Providers";
import SelectedPokemon from "./components/selectedPokemon";

export default function Home() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const { hiddenColumns, toggleCol } = useContext(ColsContext);
  const { selectedPokemon, setSelectedPokemon } = useContext(
    SelectedPokemonContext
  );

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemons: Pokemon[] = await getPokemonObjects(151);
      setPokemonData(pokemons);
    };
    if (pokemonData.length === 0) fetchPokemon();
    if (selectedPokemon === null) setSelectedPokemon(pokemonData[0]);
  }, []);

  const optionCols = ["Height", "Weight", "Types", "Picture"];

  return (
    <div className="flex flex-row justify-center">
      <div>
        <div className="flex flex-row space-x-4 h-14">
          {optionCols.map((col, i) => {
            return <Checkbox key={i} colName={col} />;
          })}
        </div>
        <div className="h-96 border rounded-l-xl overflow-y-auto">
          <table className="bg-background2">
            <thead className="bg-background2-shade">
              <tr>
                <th className="p-2">id</th>
                <th className="p-2">Name</th>
                {optionCols.map((col) => {
                  return (
                    <th
                      key={col}
                      className={`p-2 ${
                        hiddenColumns.includes(col) ? "hidden" : ""
                      }`}
                    >
                      {col}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="">
              {pokemonData.map((pokemon) => {
                return <PokemonTableRow key={pokemon.id} pokemon={pokemon} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-14 h-96 w-96 border rounded-r-xl bg-selected">
        {selectedPokemon != null ? (
          <SelectedPokemon pokemon={selectedPokemon}></SelectedPokemon>
        ) : (
          <h2 className="pt-36 text-center">
            Select a pokemon for detailed view
          </h2>
        )}
      </div>
    </div>
  );
}

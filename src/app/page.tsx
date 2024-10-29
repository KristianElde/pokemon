"use client";

import PokemonTableRow from "./components/graphical/pokemonTableRow";
import { useContext } from "react";
import {
  PokemonDataContext,
  SelectedPokemonContext,
} from "./components/functional/Providers";
import SelectedPokemon from "./components/graphical/selectedPokemon";
import { useHiddenColumns } from "./functions/useHiddenColumns";
import TableColumnSelection from "./components/graphical/tableColumnSelection";

export default function Home() {
  const hiddenColumns = useHiddenColumns()[0];
  const pokemonData = useContext(PokemonDataContext).pokemonData;
  const selectedPokemon = useContext(SelectedPokemonContext).selectedPokemon;

  const optionCols = ["Height", "Weight", "Types", "Picture"];

  console.log("Page", hiddenColumns);

  return (
    <div className="flex flex-col justify-center md:flex-row">
      <div>
        <TableColumnSelection optionalColumns={optionCols} />
        <div className="h-80 md:h-96 w-96 md:w-auto border rounded-t-xl md:rounded-tr-none md:rounded-l-xl overflow-y-auto">
          <table className="bg-background2 w-full">
            <thead className="bg-background2-shade sticky top-0 z-10">
              <tr>
                <th className="p-2">id</th>
                <th className="p-2">Name</th>
                {optionCols.map((col) => {
                  return (
                    <th
                      key={col}
                      className={`p-2 ${
                        hiddenColumns?.includes(col) ? "hidden" : ""
                      }`}
                    >
                      {col}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {pokemonData.map((pokemon) => {
                return <PokemonTableRow key={pokemon.id} pokemon={pokemon} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" md:mt-14 h-96 md:h-96 w-96 min-w-80 border rounded-b-xl md:rounded-r-xl md:rounded-b-none bg-selected">
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

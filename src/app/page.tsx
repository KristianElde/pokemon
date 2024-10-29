"use client";

import Checkbox from "./components/graphical/checkbox";
import PokemonTableRow from "./components/graphical/pokemonTableRow";
import { useContext } from "react";
import {
  PokemonDataContext,
  SelectedPokemonContext,
} from "./components/functional/Providers";
import SelectedPokemon from "./components/graphical/selectedPokemon";
import { useHiddenColumns } from "./functions/useHiddenColumns";

export default function Home() {
  const hiddenColumns = useHiddenColumns()[0];
  const pokemonData = useContext(PokemonDataContext).pokemonData;
  const selectedPokemon = useContext(SelectedPokemonContext).selectedPokemon;

  const optionCols = ["Height", "Weight", "Types", "Picture"];

  return (
    <div className="flex flex-col justify-center sm:flex-row">
      <div>
        <div className="flex flex-row space-x-5 h-14">
          {optionCols.map((col, i) => {
            return <Checkbox key={i} colName={col} />;
          })}
        </div>
        <div className="h-64 sm:h-96 w-96 sm:w-auto border rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl  overflow-y-auto">
          <table className="bg-background2 w-full">
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
      <div className=" sm:mt-14 h-64 sm:h-96 w-96 border rounded-b-xl sm:rounded-r-xl sm:rounded-b-none bg-selected">
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

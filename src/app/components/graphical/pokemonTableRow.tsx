"use client";

import { useContext } from "react";
import { type Pokemon } from "../../functions/data-fetching";
import { SelectedPokemonContext } from "../functional/Providers";
import { useHiddenColumns } from "../../functions/useHiddenColumns";
type TableRowProps = {
  pokemon: Pokemon;
};

export default function PokemonTableRow({ pokemon }: TableRowProps) {
  const hiddenColumns = useHiddenColumns()[0];
  const { selectedPokemon, setSelectedPokemon } = useContext(
    SelectedPokemonContext
  );

  return (
    <tr
      onClick={() => {
        setSelectedPokemon(pokemon);
      }}
      className={` ${pokemon === selectedPokemon ? "bg-selected" : ""}`}
    >
      <td className="p-2">{pokemon.id}</td>
      <td className="p-2">{pokemon.name}</td>
      <td className={`p-2 ${hiddenColumns.includes("Weight") ? "hidden" : ""}`}>
        {pokemon.weight}
      </td>
      <td className={`p-2 ${hiddenColumns.includes("Height") ? "hidden" : ""}`}>
        {pokemon.height}
      </td>
      <td className={`p-2 ${hiddenColumns.includes("Types") ? "hidden" : ""}`}>
        <ul>
          {pokemon.types.map((type, i) => {
            return <li key={i}>{type}</li>;
          })}
        </ul>
      </td>
      <td
        className={`p-2 ${hiddenColumns.includes("Picture") ? "hidden" : ""}`}
      >
        <img src={pokemon.picture} alt={`Picture of ${pokemon.name}`} />
      </td>
    </tr>
  );
}

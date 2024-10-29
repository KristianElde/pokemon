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
      className={`h-20 ${
        pokemon === selectedPokemon
          ? "bg-selected"
          : "odd:bg-background2 even:bg-background2-alt"
      }`}
    >
      <td>{pokemon.id}</td>
      <td>{pokemon.name}</td>
      <td className={`${hiddenColumns.includes("Weight") ? "hidden" : ""}`}>
        {pokemon.weight}
      </td>
      <td className={` ${hiddenColumns.includes("Height") ? "hidden" : ""}`}>
        {pokemon.height}
      </td>
      <td className={` ${hiddenColumns.includes("Types") ? "hidden" : ""}`}>
        <ul>
          {pokemon.types.map((type, i) => {
            return <li key={i}>{type}</li>;
          })}
        </ul>
      </td>
      <td className={`${hiddenColumns.includes("Picture") ? "hidden" : ""}`}>
        <img src={pokemon.pictureFront} alt={`Picture of ${pokemon.name}`} />
      </td>
    </tr>
  );
}

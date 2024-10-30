"use client";

import { useContext } from "react";
import { type Pokemon } from "../../functions/data-fetching";
import { TypeSpritesContext } from "../functional/Providers";
import { useHiddenColumns } from "@/app/functions/useHiddenColumns";
import { parseAsInteger, useQueryState } from "nuqs";
type TableRowProps = {
  pokemon: Pokemon;
};

export default function PokemonTableRow({ pokemon }: TableRowProps) {
  const [selectedPokemonIdx, setSelectedPokemon] = useQueryState(
    "selectedId",
    parseAsInteger.withDefault(1)
  );
  const typeSprites = useContext(TypeSpritesContext).typeSprites;

  const [getCol] = useHiddenColumns();

  return (
    <tr
      onClick={() => {
        setSelectedPokemon(pokemon.id);
      }}
      className={`h-20 text-center ${
        pokemon.id === selectedPokemonIdx
          ? "bg-selected"
          : "odd:bg-background2 even:bg-background2-alt"
      }`}
    >
      <td>{pokemon.id}</td>
      <td>{pokemon.name}</td>
      <td className={`${getCol("Weight") ? "hidden" : ""}`}>
        {pokemon.weight}
      </td>
      <td className={`${getCol("Height") ? "hidden" : ""}`}>
        {pokemon.height}
      </td>
      <td className={`${getCol("Types") ? "hidden" : ""}`}>
        <ul className="space-y-1">
          {pokemon.types.map((type) => {
            const url = typeSprites.get(type);
            return (
              <li key={type}>
                <img className="h-6" src={url} alt={type} />
              </li>
            );
          })}
        </ul>
      </td>
      <td className={`${getCol("Picture") ? "hidden" : ""}`}>
        <img src={pokemon.pictureFront} alt={`Picture of ${pokemon.name}`} />
      </td>
    </tr>
  );
}

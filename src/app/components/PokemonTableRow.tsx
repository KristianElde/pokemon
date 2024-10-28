import { type Pokemon } from "../functions/data-fetching";
// type Rows = {
//   picture: boolean;
//   weight: boolean;
//   height: boolean;
//   types: boolean;
// };

type TableRowProps = {
  pokemon: Pokemon;
};

export default function PokemonTableRow(props: TableRowProps) {
  return (
    <tr className="border">
      <td>{props.pokemon.id}</td>
      <td>{props.pokemon.name}</td>
      <td>{props.pokemon.weight}</td>
      <td>{props.pokemon.height}</td>
      <td>{props.pokemon.types}</td>
      <td>
        <img
          src={props.pokemon.picture}
          alt={`Picture of ${props.pokemon.name}`}
        />
      </td>
    </tr>
  );
}

import { Pokemon } from "../../functions/data-fetching";

interface Props {
  pokemon: Pokemon;
}

export default function SelectedPokemon({ pokemon }: Props) {
  const stats = [
    { title: "Height", value: pokemon.height },
    { title: "HP", value: pokemon.hp },
    { title: "Attack", value: pokemon.attack },
    { title: "Special Attack", value: pokemon.specialAttack },
    { title: "Weight", value: pokemon.weight },
    { title: "Speed", value: pokemon.speed },
    { title: "Defense", value: pokemon.defense },
    { title: "Special defense", value: pokemon.specialDefense },
  ];
  return (
    <div className="flex flex-col mx-5">
      <h1 className="text-center py-6">{pokemon.name}</h1>
      <div className="flex flex-row space-x-3">
        <ul className="w-full">
          {stats.slice(0, 4).map((stat, i) => {
            return (
              <li key={i} className="flex flex-row justify-between">
                <div>{stat.title}</div>
                <div>{stat.value}</div>
              </li>
            );
          })}
        </ul>
        <div className="bg-background w-1"></div>
        <ul className="w-full">
          {stats.slice(4).map((stat, i) => {
            return (
              <li key={i} className="flex flex-row justify-between">
                <div>{stat.value}</div>
                <div>{stat.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <img src={pokemon.picture} alt={`Picture of ${pokemon.name}`} />
      </div>
      <ul className="flex flex-row justify-center w-full space-x-10">
        {pokemon.types.map((type) => {
          return <li key={type}>{type}</li>;
        })}
      </ul>
    </div>
  );
}

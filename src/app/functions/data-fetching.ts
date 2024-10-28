function getPokemonData(n: number): Promise<Response> {
  return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${n}`);
}

export type Pokemon = {
  id: number;
  name: string;
  picture: string;
  weight: string;
  height: string;
  types: string[];
  hp: string;
  defense: string;
  attack: string;
};

export async function getPokemonObjects(n: number): Promise<Pokemon[]> {
  const data: Response = await getPokemonData(n);
  const json: any = await data.json();
  const urls: string[] = json.results.map((e: any) => e.url);

  const pokemons: Pokemon[] = await Promise.all(
    urls.map(async (url) => {
      let pokemonData: Response = await fetch(url);
      let PokemonJson: any = await pokemonData.json();

      return {
        id: PokemonJson.id,
        name: PokemonJson.name,
        picture: PokemonJson.sprites.front_default,
        weight: PokemonJson.weight,
        height: PokemonJson.height,
        types: PokemonJson.types.map((type: any) => {
          return type.type.name;
        }),
        hp: PokemonJson.hp,
        defense: PokemonJson.defense,
        attack: PokemonJson.attack,
      };
    })
  );

  return pokemons;
}

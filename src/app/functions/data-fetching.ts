export type Pokemon = {
  id: number;
  name: string;
  picture: string;
  weight: string;
  height: string;
  types: string[];
  hp: string;
  attack: string;
  defense: string;
  specialAttack: string;
  specialDefense: string;
  speed: string;
};

export async function getPokemonObjects(n: number): Promise<Pokemon[]> {
  const data: Response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${n}`
  );
  const json: any = await data.json();
  const urls: string[] = json.results.map((e: any) => e.url);

  const pokemons: Pokemon[] = await Promise.all(
    urls.map(async (url) => {
      let pokemonData: Response = await fetch(url);
      let PokemonJson: any = await pokemonData.json();

      return {
        id: PokemonJson.id,
        name:
          PokemonJson.name.charAt(0).toUpperCase() + PokemonJson.name.slice(1),
        picture: PokemonJson.sprites.front_default,
        weight: PokemonJson.weight,
        height: PokemonJson.height,
        types: PokemonJson.types.map((type: any) => {
          return type.type.name;
        }),
        hp: PokemonJson.stats[0].base_stat,
        attack: PokemonJson.stats[1].base_stat,
        defense: PokemonJson.stats[2].base_stat,
        specialAttack: PokemonJson.stats[3].base_stat,
        specialDefense: PokemonJson.stats[4].base_stat,
        speed: PokemonJson.stats[5].base_stat,
      };
    })
  );
  console.log("FETCH COMPLETE");
  return pokemons;
}

export async function getTypeSprites() {
  const data: Response = await fetch("https://pokeapi.co/api/v2/type/");
  const json: any = await data.json();
  const urls: string[] = json.results.map((type: any) => type.url);
  const types = await Promise.all(
    urls.map(async (url) => {
      let typeData = await fetch(url);
      let type;
    })
  );
}

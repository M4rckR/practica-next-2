import { PokemonsResponses, SimplePokemon } from "@/app/pokemons";
import { PokemonGrid } from "./components/PokemonGrid";
import { Metadata } from "next";


export const metadata: Metadata = {
<<<<<<< HEAD
    title: 'Pokemons',
    description: 'Pokemons estaticos',
}
=======
  title: "Pokemons",
  description: "Pokemons page",
};
>>>>>>> 46c80b2a2d866504312a520bb463ca2878852ff2

const getPokemons = async (limit=20, offset=0):Promise<SimplePokemon[]> => {
    const data:PokemonsResponses = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then((res) => res.json())


    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }))

    return pokemons;
}


export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col gap-2">
        <span className="text-5xl my-2">Pokemons <small className="text-blue-500"> estaticos</small></span>
     <div className="flex flex-wrap gap-10 items-center justify-center">
        <PokemonGrid pokemons={pokemons}/>
     </div>
    </div>
  );
}
import { Metadata } from "next";
import { FavoritePokemons } from "../pokemons/components/FavoritePokemons";

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Favoritos',
}


export default async function FavoritesPage() {

  return (
    <div className="flex flex-col gap-2">
        <span className="text-5xl my-2">Pokemons <small className="text-blue-500"> Favoritos</small></span>
     <div className="flex flex-wrap gap-10 items-center justify-center">
        <FavoritePokemons />
     </div>
    </div>
  );
}


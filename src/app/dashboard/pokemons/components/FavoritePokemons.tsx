'use client'

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid"
// import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
    const favoritesPokemons = useAppSelector(state => state.pokemons.favorites || {});
    // const [pokemons, setPokemons] = useState(favoritesPokemons)

    // useEffect(() => {
    //     setPokemons(favoritesPokemons)
    // }, [favoritesPokemons])

  return (
    <>
    {
      Object.values(favoritesPokemons).length === 0 ? <NoFavorites /> : <PokemonGrid pokemons={Object.values(favoritesPokemons)}/>
    }
    </>
  )
}

export const NoFavorites = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 min-h-[50vh]">
            <IoHeartOutline className="text-5xl my-2 text-red-500" />
            <span className="text-5xl my-2">No hay favoritos</span>
        </div>
    )
}
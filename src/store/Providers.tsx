"use client"
import { Provider } from "react-redux"
import { store } from "."
import { useEffect } from "react"
import { setFavoritesPokemons } from "./pokemons/pokemons"

type providersProps = {
    children: React.ReactNode
}

export const Providers = ({ children }: providersProps) => {

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') || '{}');
    store.dispatch(setFavoritesPokemons(favorites))
  }, []);

  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
} 
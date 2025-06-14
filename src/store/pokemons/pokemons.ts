import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/app/pokemons';

type PokemonsState = {
    favorites: {[key: string]: SimplePokemon}
}

// const getInitialState = (): PokemonsState => {
//   // No es una solucion perfecta
//   if(typeof window === 'undefined') return {};

//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') || '{}');
//   return favorites;
// }


const initialState: PokemonsState = {
  // ...getInitialState()
  favorites: {}
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritesPokemons(state, action:PayloadAction<PokemonsState>) {
      state.favorites = action.payload.favorites;
    },

    toggleFavorite(state, action:PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const {id} = pokemon;
      const idString = id.toString();

      if(!state.favorites){
        state.favorites = {};
      }

      if(!!state.favorites[idString]){
        delete state.favorites[idString]
        // return;
      }
      else {
        state.favorites[idString] = pokemon;
      }

      // TODO: Esto no se debe hacer 
      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));

    }
  }
});

export const {toggleFavorite, setFavoritesPokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer
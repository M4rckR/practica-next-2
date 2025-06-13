import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/app/pokemons';

type PokemonsState = {
    [key: string]: SimplePokemon
}

const getInitialState = (): PokemonsState => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
  return favorites;
}


const initialState: PokemonsState = {
  ...getInitialState()
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action:PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const {id} = pokemon;

      if(!!state[id]){
        delete state[id]
        return;
      }
      else {
        state[id] = pokemon;
      }

      // TODO: Esto no se debe hacer 
      localStorage.setItem('favorites', JSON.stringify(state));

    }
  }
});

export const {toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer
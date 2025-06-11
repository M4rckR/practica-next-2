import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type counterState = {
    count: number
    isReady: boolean
}

const initialState: counterState = {
    count: 5,
    isReady: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    initCounter(state, action: PayloadAction<number>) {
        if(state.isReady) return
        state.count = action.payload
        state.isReady = true
    },

    addOne(state) {
        state.count += 1
    },

    subtractOne(state) {
        if (state.count < 0) return
        state.count -= 1
    },

    resetCounter(state, action: PayloadAction<number>) {
        if (action.payload < 0) action.payload = 0
        state.count = action.payload
    }
  }
});

export const { addOne, subtractOne, resetCounter, initCounter } = counterSlice.actions

export default counterSlice.reducer
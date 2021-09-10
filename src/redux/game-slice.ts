import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IGameCard {
  isOpen?: boolean
  isHalfOpen?: boolean
  x: number
  y: number
}

interface IGameSlice {
  grid: {
    height: number
    width: number
  }
  elements?: IGameCard[]
}

const initialState: IGameSlice = {
  grid: {
    height: 6,
    width: 6
  }
}

export const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    init: (state: IGameSlice, action) => {
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { init } = gameSlice.actions

export default gameSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GameStatus, IGameSlice } from '../card/card-interfaces'
import { createCardsPairs, getHalfOpenPair } from '../card/card-pairs-logic'

export const GAME_TIMER = parseInt(process.env.REACT_APP_GAME_TIMER ?? '160')

const initialState: IGameSlice = {
  gameStatus: GameStatus.notStarted,
  secondsTimer: GAME_TIMER,
  grid: {
    height: parseInt(process.env.REACT_APP_GRID_HEIGHT ?? '6'),
    width: parseInt(process.env.REACT_APP_GRID_WIDTH ?? '6'),
  },
}

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    initGame: (state: IGameSlice) => {
      state.elements = createCardsPairs(state.grid.height, state.grid.width)
      state.gameStatus = GameStatus.playing
      state.secondsTimer = GAME_TIMER
    },

    increaseTimer: (state) => {
      if (state.secondsTimer == null) {
        return
      }

      state.secondsTimer -= 1

      if (state.secondsTimer <= 0) {
        state.secondsTimer = GAME_TIMER
        state.gameStatus = GameStatus.end
        return
      }
    },

    closeCard: (state, action: PayloadAction<{ cardId: number }>) => {
      const cardId = action.payload?.cardId
      const openedElement = state.elements?.[cardId]
      if (
        state.elements == null ||
        openedElement == null ||
        !openedElement.isHalfOpen
      ) {
        return
      }
      state.elements[cardId] = { ...openedElement, isHalfOpen: false }
    },

    openCard: (state, action: PayloadAction<{ cardId: number }>) => {
      const cardId = action.payload?.cardId
      const openedElement = state.elements?.[cardId]

      if (
        state.elements == null ||
        openedElement == null ||
        state.elements.filter((val) => val.isHalfOpen).length >= 2 ||
        openedElement.isOpen
      ) {
        return
      }

      state.elements[cardId] = { ...openedElement, isHalfOpen: true }

      const openedPair = getHalfOpenPair(state.elements)

      if (
        openedPair.length >= 2 &&
        openedPair?.every((value) => value.isOpen)
      ) {
        openedPair.forEach((value) => {
          if (state.elements?.[value.index] == null) {
            return
          }
          state.elements[value.index] = {
            ...state.elements?.[value.index],
            isOpen: true,
          }
        })

        if (state.elements.every((element) => element.isOpen)) {
          state.secondsTimer = GAME_TIMER - state.secondsTimer
          state.gameStatus = GameStatus.end
        }
      }
    },
  },
})

export const { initGame, openCard, closeCard, increaseTimer } =
  gameSlice.actions

export default gameSlice.reducer

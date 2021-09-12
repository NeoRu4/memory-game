export enum CardColor {
  primary = 'primary',
  action = 'action',
  error = 'error',
}

export enum GameStatus {
  notStarted,
  playing,
  end,
}

export interface ICard {
  isOpen?: boolean
  isHalfOpen?: boolean
  type: string
  color: CardColor
}

export interface IGameSlice {
  gameStatus: GameStatus
  secondsTimer: number
  grid: {
    height: number
    width: number
  }
  elements?: ICard[]
}

export interface IOpenedCard {
  index: number
  isOpen: boolean
}

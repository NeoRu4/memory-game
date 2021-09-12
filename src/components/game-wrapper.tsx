import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { initGame } from '../redux/game-slice'
import { GameStatus } from '../card/card-interfaces'

import CardGrid from './card-grid'
import GameStats from './game-stats'

const GameWrapper: React.FC = () => {
  const gameStatus = useAppSelector((state) => state?.game?.gameStatus)
  const dispatch = useAppDispatch()

  switch (gameStatus) {
    case GameStatus.playing:
      return <CardGrid />
    case GameStatus.end:
      return <GameStats />
    case GameStatus.notStarted:
    default:
      return (
        <Typography variant="h5">
          Найди и запомни пары иконок, начать {'=> '}
          <Button
            variant="contained"
            color="primary"
            size={'large'}
            onClick={() => dispatch(initGame())}
          >
            старт
          </Button>
        </Typography>
      )
  }
}

export default GameWrapper

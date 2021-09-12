import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { increaseTimer } from '../redux/game-slice'

const Timer: React.FC = () => {
  const secondsTimer = useAppSelector((state) => state.game.secondsTimer)
  const dispatch = useAppDispatch()

  const interval = useRef<NodeJS.Timeout>()

  useEffect(() => {
    interval.current = setInterval(() => dispatch(increaseTimer()), 1000)

    return () => {
      if (!!interval.current) {
        clearInterval(interval.current)
      }
    }
    // eslint-disable-next-line
  }, [])

  return <div>Игра закончится через {secondsTimer} сек.</div>
}

export default Timer

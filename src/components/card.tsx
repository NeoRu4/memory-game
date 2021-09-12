import React from 'react'
import { ICard } from '../card/card-interfaces'
import { TYPES_OF_CARDS } from '../card/card-types'
import styled from 'styled-components'
import { useAppDispatch } from '../redux/store'
import { closeCard, openCard } from '../redux/game-slice'

const Flipper = styled.div`
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transition: 0.7s linear;
  box-shadow: 0px 0px 15px -1px rgba(255, 0, 214, 0.2);
  &.flip {
    transform: rotateY(180deg);
  }
  &.hidden {
    visibility: hidden;
  }
  margin: 1%;
`

const BaseFlipper = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 20%;
  left: 0;
  right: 0;
  text-align: center;
  backface-visibility: hidden;
`

const Front = styled(BaseFlipper)`
  z-index: 2;
  transform: rotateY(0deg);
`

const Back = styled(BaseFlipper)`
  transform: rotateY(-180deg);
`
const GameCard: React.FC<{ data: ICard; cardId: number }> = ({
  data,
  cardId,
}) => {
  const CardIcon = TYPES_OF_CARDS?.[data.type].icon
  const dispatch = useAppDispatch()
  return (
    <Flipper
      className={data.isHalfOpen ? 'flip' : data.isOpen ? 'hidden' : ''}
      onClick={() => {
        dispatch(openCard({ cardId: cardId }))

        setTimeout(() => {
          dispatch(closeCard({ cardId: cardId }))
        }, 5000)
      }}
    >
      <Front>Переверни меня</Front>
      <Back>
        <CardIcon color={data.color} style={{ fontSize: 60 }} />
      </Back>
    </Flipper>
  )
}

export default GameCard

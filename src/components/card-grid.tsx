import React from 'react'
import { useAppSelector } from '../redux/store'

import GameCard from './card'
import styled from 'styled-components'
import Timer from './timer'
import { Box, Container } from '@material-ui/core'

const GridContainer = styled.div<{ widthItems: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.widthItems}, 1fr);
  gap: 10px;
`

const CardGrid: React.FC = () => {
  const elements = useAppSelector((state) => state.game.elements)
  const grid = useAppSelector((state) => state.game.grid)

  return (
    <Container>
      <GridContainer widthItems={grid.width}>
        {!!elements &&
          elements?.map((value, index) => (
            <GameCard key={index} data={value} cardId={index} />
          ))}
      </GridContainer>
      <Box marginTop={5}>
        <Timer />
      </Box>
    </Container>
  )
}

export default CardGrid

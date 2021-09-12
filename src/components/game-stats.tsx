import React, { useMemo } from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { useAppSelector } from '../redux/store'

const GameStats: React.FC = () => {
  const secondsTimer = useAppSelector((state) => state.game.secondsTimer)
  const elements = useAppSelector((state) => state.game.elements)

  const statData = useMemo<{ name: string; result: string }[]>(() => {
    const pairsElements = elements?.filter((value) => value.isOpen) || []

    return [
      {
        name: 'время игры',
        result: `${secondsTimer} сек.`,
      },
      {
        name: 'всего иконок',
        result: `${elements?.length || 0}`,
      },
      {
        name: 'всего пар',
        result: `${(elements?.length || 0) / 2} пар`,
      },
      {
        name: 'найдено пар',
        result: `${pairsElements?.length / 2} пар`,
      },
    ]
  }, [secondsTimer, elements])

  return (
    <>
      <h1>Результат игры</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Результат</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statData.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default GameStats

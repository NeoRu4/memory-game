import { TYPES_OF_CARDS } from './card-types'
import { CardColor, ICard, IOpenedCard } from './card-interfaces'

const shuffleArray = (array: any[]) =>
  array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

const getRandomElement = (array: any[]): any =>
  array[Math.floor(Math.random() * array.length)]

const colors = Object.values(CardColor)

export function createCardsPairs(height: number, width: number): ICard[] {
  if ((height * width) % 2 !== 0) {
    throw Error(`${height * width}/2 - no pair`)
  }

  const halfPairValue: number = (height * width) / 2
  const cardTypesKeys = Object.keys(TYPES_OF_CARDS)

  const cardElements = new Array(halfPairValue)
    .fill(null)
    .map(() => {
      const cardType = getRandomElement(cardTypesKeys)
      const color = getRandomElement(colors)

      const cardElement = {
        type: cardType,
        color: color,
      } as ICard
      return [cardElement, cardElement]
    })
    .flat(1)

  return shuffleArray(cardElements)
}

export const getHalfOpenPair = (elements: ICard[]): IOpenedCard[] => {
  const openedIndexes: number[] = []
  const halfOpenedElements = elements.filter((val, index) => {
    if (val.isHalfOpen) {
      openedIndexes.push(index)
    }
    return val.isHalfOpen
  })
  if (halfOpenedElements.length < 2) {
    return []
  }
  const isPairOpened = halfOpenedElements.every(
    (val, i, array) =>
      val.type === array[0].type && val.color === array[0].color
  )

  return openedIndexes.map((value) => ({
    index: value,
    isOpen: isPairOpened,
  }))
}

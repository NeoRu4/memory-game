import BathtubIcon from '@material-ui/icons/Bathtub'
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive'
import CakeIcon from '@material-ui/icons/Cake'
import HeadsetIcon from '@material-ui/icons/Headset'
import GitHubIcon from '@material-ui/icons/GitHub'
import PersonIcon from '@material-ui/icons/Person'
import PetsIcon from '@material-ui/icons/Pets'
import PoolIcon from '@material-ui/icons/Pool'
import StoreIcon from '@material-ui/icons/Store'
import LocalCafeIcon from '@material-ui/icons/LocalCafe'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ToysIcon from '@material-ui/icons/Toys'
import TrainIcon from '@material-ui/icons/Train'
import VisibilityIcon from '@material-ui/icons/Visibility'
import WatchIcon from '@material-ui/icons/Watch'
import SportsMotorsportsIcon from '@material-ui/icons/SportsMotorsports'
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import LocalFloristIcon from '@material-ui/icons/LocalFlorist'
import React from 'react'
import { CardColor } from './card-interfaces'

export const TYPES_OF_CARDS: {
  [key: string]: {
    icon: React.FC<{
      color?: CardColor
      style?: any
    }>
  }
} = {
  bathtub: { icon: BathtubIcon },
  airplane: { icon: AirplanemodeActiveIcon },
  headset: { icon: HeadsetIcon },
  github: { icon: GitHubIcon },
  person: { icon: PersonIcon },
  cake: { icon: CakeIcon },
  pets: { icon: PetsIcon },
  pool: { icon: PoolIcon },
  store: { icon: StoreIcon },
  sportsMotorsports: { icon: SportsMotorsportsIcon },
  thumb_up: { icon: ThumbUpIcon },
  toys: { icon: ToysIcon },
  train: { icon: TrainIcon },
  visibility: { icon: VisibilityIcon },
  watch: { icon: WatchIcon },
  cafe: { icon: LocalCafeIcon },
  gasStation: { icon: LocalGasStationIcon },
  emot: { icon: InsertEmoticonIcon },
  florist: { icon: LocalFloristIcon },
}

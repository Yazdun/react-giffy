import { RiHomeSmileFill } from 'react-icons/ri'
import { HiCode } from 'react-icons/hi'
import { FaGamepad } from 'react-icons/fa'
import { GiLaurelsTrophy, GiPlatform } from 'react-icons/gi'
import { MdCategory } from 'react-icons/md'

export const items = [
  {
    title: 'homepage',
    url: '/',
    icon: <RiHomeSmileFill />,
  },
  {
    title: 'top games',
    url: '',
    icon: <GiLaurelsTrophy />,
  },
  {
    title: 'platforms',
    url: '',
    icon: <GiPlatform />,
  },
  {
    title: 'categories',
    url: '',
    icon: <MdCategory />,
  },
  {
    title: 'game studios',
    url: '',
    icon: <FaGamepad />,
  },
  {
    title: 'developers',
    url: '',
    icon: <HiCode />,
  },
]

import { FaSave } from 'react-icons/fa'
import { FiSearch, FiGithub } from 'react-icons/fi'
import { AiFillFire } from 'react-icons/ai'

export const Links = [
  {
    title: 'trending',
    icon: <AiFillFire />,
    url: '/',
  },
  {
    title: 'explore',
    icon: <FiSearch />,
    url: '/explore',
  },
  {
    title: 'saved gifs',
    icon: <FaSave />,
    url: '/saved',
  },
]

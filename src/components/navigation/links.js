import { FaSave } from 'react-icons/fa'
import { FiSearch, FiGithub } from 'react-icons/fi'
import { AiFillFire } from 'react-icons/ai'

export const Links = [
  {
    title: 'trending',
    icon: <AiFillFire />,
    url: '/trending',
  },
  {
    title: 'explore',
    icon: <FiSearch />,
    url: '/explore',
  },
  {
    title: 'source code',
    icon: <FiGithub />,
    url: '/github',
  },
]

import useFetch from 'use-http'
import { Gifs } from '../../components'
import { GET_TRENDING } from '../../services'
import { AnimatedLayout } from '../AnimatedLayout'

export const Trending = () => {
  const { data = {} } = useFetch(GET_TRENDING, [])

  return (
    <AnimatedLayout>
      <h1>🔥 Trending</h1>
      <Gifs gifs={data} />
    </AnimatedLayout>
  )
}

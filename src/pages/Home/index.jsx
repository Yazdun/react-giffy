import useFetch from 'use-http'
import { Gifs } from '../../components'
import { GET_TRENDING } from '../../services'
import { AnimatedLayout } from '../AnimatedLayout'

export const Home = () => {
  const { data = {} } = useFetch(GET_TRENDING, [])

  return (
    <AnimatedLayout>
      <Gifs gifs={data} />
    </AnimatedLayout>
  )
}

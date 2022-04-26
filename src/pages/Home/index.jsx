import useFetch from 'use-http'
import { Container, Image } from '../../components'
import { GET_TRENDING } from '../../services'
import { AnimatedLayout } from '../AnimatedLayout'
import css from './styles.module.css'

export const Home = () => {
  const { data = {}, loading } = useFetch(GET_TRENDING, [])

  return (
    <AnimatedLayout>
      <div className={css.container}>
        {data.data?.map((gif, index) => {
          const { images } = gif
          return <Image key={index} src={images.original.url} alt="" />
        })}
      </div>
    </AnimatedLayout>
  )
}

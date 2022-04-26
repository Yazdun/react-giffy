import useFetch from 'use-http'
import { Container } from '../../components'
import { GET_TRENDING } from '../../services'
import css from './styles.module.css'

export const Home = () => {
  const { data = {} } = useFetch(GET_TRENDING, [])

  return (
    <Container>
      <div className={css.container}>
        {data.data?.map((gif, index) => {
          const { images } = gif
          return <img key={index} src={images.original.url} alt="" />
        })}
      </div>
    </Container>
  )
}

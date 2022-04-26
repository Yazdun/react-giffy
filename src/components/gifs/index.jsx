import css from './styles.module.css'
import { Image } from '../'
import cn from 'classnames'

export const Gifs = ({ gifs, errorMessage }) => {
  if (gifs?.length < 1 || !gifs) {
    return (
      <div className={css.error}>
        <h2>{errorMessage ? errorMessage : 'There is no available gif'}</h2>
      </div>
    )
  }

  return (
    <div className={css.container}>
      {gifs.data?.map((gif, index) => {
        const { images } = gif
        return <Image key={index} src={images.original.url} alt="" />
      })}
    </div>
  )
}

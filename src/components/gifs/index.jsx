import css from './styles.module.css'
import { Image } from '../'

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
      {gifs.data?.map(gif => {
        const { images, id } = gif
        return (
          <button key={id}>
            <Image src={images.original.url} alt="" />
          </button>
        )
      })}
    </div>
  )
}

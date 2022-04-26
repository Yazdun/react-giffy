import css from './styles.module.css'
import { Image } from '../'
import { useAppContext } from '../../context'

export const Gifs = ({ gifs, errorMessage }) => {
  const { addGifs, savedGifs, deleteGifs } = useAppContext()

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
        const { images, id } = gif
        const imgSrc = images.original.url
        const isSaved = savedGifs[0].includes(imgSrc)

        return (
          <button
            key={id}
            onClick={() => (isSaved ? deleteGifs(imgSrc) : addGifs(imgSrc))}
          >
            <Image src={imgSrc} alt="" />
          </button>
        )
      })}
    </div>
  )
}

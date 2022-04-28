import { AnimatedLayout } from '../AnimatedLayout'
import css from './styles.module.css'
import {
  dicaprio,
  joker,
  pulpfiction,
  bullymaguire,
  search,
} from '../../assets'
import { Image } from '../../components'
import { FiTrendingUp, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <AnimatedLayout>
      <div className={css.header}>
        <h1 className={css.title}>Start Making Use of Awesome GIFs</h1>
        <p className={css.info}>
          Huge collection of high quality GIFs, available for any usecases such
          as social medias and blog posts for free !
        </p>
      </div>
      <div className={css.trending}>
        <div className={css.text}>
          <h2 className={css.title}>🔥Now Trending</h2>
          <p className={css.info}>
            Looking for some hot and trending GIFs to use on your new blog post
            ? Here you can find fresh GIFs which are widely being use by our
            users !
          </p>
          <Link className={css.link} to="/trending">
            <FiTrendingUp />
            Checkout Trendings
          </Link>
        </div>
        <div className={css.gifs}>
          <Image sx={css.gif} src={dicaprio} />
          <Image sx={css.gif} src={joker} />
          <Image sx={css.gif} src={pulpfiction} />
          <Image sx={css.gif} src={bullymaguire} />
        </div>
      </div>
      <div className={css.explore}>
        <div className={css.text}>
          <h2 className={css.title}>🔍 Start Exploring </h2>
          <p className={css.info}>
            Are you looking for specific GIF ? You easily find any GIF you want
            in our massive GIF archive, by using our incredible search engine
          </p>
          <Link className={css.link} to="/explore">
            <FiSearch />
            Start Exploring
          </Link>
        </div>
        <Image src={search} />
      </div>
    </AnimatedLayout>
  )
}

import { AnimatedLayout } from '../AnimatedLayout'
import css from './styles.module.css'
import { dicaprio, joker, pulpfiction, bullymaguire } from '../../assets'
import { Image } from '../../components'

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
        <h2 className={css.title}>🔥Now Trending</h2>
        <div className={css.gifs}>
          <Image sx={css.gif} src={dicaprio} alt="" />
          <Image sx={css.gif} src={joker} alt="" />
          <Image sx={css.gif} src={pulpfiction} alt="" />
          <Image sx={css.gif} src={bullymaguire} alt="" />
        </div>
      </div>
      <div className={css.opensource}>
        <h2>Open Source</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          laudantium velit rerum, suscipit, autem aut culpa commodi eos aliquid
          reiciendis labore tempore! Praesentium labore itaque minima delectus
          consequuntur. Earum eaque ea quos excepturi alias suscipit ex
          distinctio obcaecati saepe explicabo tempore nobis eos autem
          consequatur veniam illo perferendis minus tempora quas aspernatur
          accusamus, vel maiores quam. Non corrupti repudiandae aut reiciendis
          ex, veritatis placeat? Cumque architecto atque incidunt dolorum
          deleniti officiis qui excepturi, dicta molestias quidem nobis sit quae
          porro illo ipsa modi quibusdam quam eum rerum exercitationem placeat
          voluptatibus. Eaque ipsam at incidunt tempora, neque ut eveniet aut
          non.
        </p>
      </div>
    </AnimatedLayout>
  )
}

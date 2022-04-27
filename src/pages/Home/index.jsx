import { Link } from 'react-router-dom'
import { hero } from '../../assets'
import { AnimatedLayout } from '../AnimatedLayout'
import css from './styles.module.css'

export const Home = () => {
  return (
    <AnimatedLayout>
      <div className={css.header}>
        <h1 className={css.title}>Start Making Use of Awesome GIFs</h1>
      </div>
    </AnimatedLayout>
  )
}

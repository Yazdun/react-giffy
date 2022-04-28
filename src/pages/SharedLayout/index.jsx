import { Outlet } from 'react-router-dom'
import { Footer, Navigation } from '../../components'
import css from './styles.module.css'

export const SharedLayout = () => {
  return (
    <div className={css.shared}>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}

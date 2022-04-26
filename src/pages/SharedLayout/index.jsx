import { Outlet } from 'react-router-dom'
import { Navigation } from '../../components'

export const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

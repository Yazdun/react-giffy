import { Explore, Trending, Home, SharedLayout } from './'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ScrollToTop } from '../components'

export const AppRoutes = () => {
  const location = useLocation()
  return (
    <ScrollToTop>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="trending" element={<Trending />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </ScrollToTop>
  )
}

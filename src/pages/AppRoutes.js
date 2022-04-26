import { Explore, Home, Saved, SharedLayout } from './'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

export const AppRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="saved" element={<Saved />} />
          <Route path="explore" element={<Explore />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

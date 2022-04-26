import { CgMenuGridO } from 'react-icons/cg'
import css from './styles.module.css'
import { items } from './items'
import { VscChromeClose } from 'react-icons/vsc'
import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useOnClickOutside, useWindowDimensions } from '../../hooks'

export const Menu = () => {
  const [show, setShow] = useState(false)
  const { width } = useWindowDimensions()
  const ref = useRef()
  useOnClickOutside(ref, () => setShow(false))

  const isMobile = width < 650
  const isDesktop = width > 650

  return (
    <>
      <button className={css.cta} onClick={() => setShow(prev => !prev)}>
        <CgMenuGridO />
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            ref={ref}
            initial={{
              x: isMobile && '100%',
              y: isDesktop && '-100%',
              borderRadius: '100%',
            }}
            animate={{ x: 0, y: 0, borderRadius: 0 }}
            exit={{
              x: isMobile && '-100%',
              y: isDesktop && '-100%',
              borderRadius: '100%',
            }}
            transition={{ duration: 0.4 }}
            className={css.menu}
          >
            <button className={css.back} onClick={() => setShow(false)}>
              <VscChromeClose />
            </button>
            <ul className={css.list}>
              {items.map((item, index) => {
                const { title, url, icon } = item
                return (
                  <li key={index} onClick={() => setShow(false)}>
                    <Link to={url} className={css.link}>
                      {icon}
                      {title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

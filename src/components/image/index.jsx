import React, { useState } from 'react'
import css from './styles.module.css'
import cn from 'classnames'
import { motion } from 'framer-motion'

export const Image = ({ src, alt, sx }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className={cn(!loaded && css.loading)}
    >
      <img
        className={cn(css.img, sx && sx, !loaded && css.hidden)}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
      />
    </motion.div>
  )
}

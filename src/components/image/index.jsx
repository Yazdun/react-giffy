import React, { useState } from 'react'
import css from './styles.module.css'
import cn from 'classnames'

export const Image = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={cn(!loaded && css.loading)}>
      <img
        className={cn(!loaded && css.hidden)}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

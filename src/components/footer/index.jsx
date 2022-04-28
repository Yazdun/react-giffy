import css from './styles.module.css'
import cn from 'classnames'

export const Footer = ({ hideFooter }) => {
  const year = new Date().getFullYear()

  return (
    <footer className={cn(css.footer, hideFooter && css.hide)}>
      <p>{year} © all rights reserved</p>
    </footer>
  )
}

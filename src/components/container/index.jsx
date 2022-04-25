import css from './styles.module.css'
import cn from 'classnames'

export const Container = ({ children, sx }) => {
  return <div className={cn(css.container, sx)}>{children}</div>
}

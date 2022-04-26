import css from './styles.module.css'
import { Container } from '..'
import { Link } from 'react-router-dom'
import { Links } from './links'

export const Navigation = () => {
  return (
    <div className={css.nav}>
      <Container sx={css.items}>
        <Link to="/" className={css.logo}>
          Giffy
        </Link>
        <ul className={css.links}>
          {Links.map((link, index) => {
            const { title, icon, url } = link
            return (
              <li key={index}>
                <Link to={url} title={title}>
                  {icon}
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </div>
  )
}

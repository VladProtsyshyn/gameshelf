import { NavLink } from 'react-router-dom'
import './Header.css'

const navigationItems = [
  { label: 'Головна', to: '/' },
  { label: 'Ігри', to: '/games' },
  { label: 'Бібліотека', to: '/library' },
  { label: 'Студії', to: '/studios' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="site-brand-badge" to="/">
          <span className="site-logo">GameShelf</span>
          <span className="site-brand__tag">Відкривай ігри з характером</span>
        </NavLink>

        <nav className="site-nav" aria-label="Основна навігація">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header

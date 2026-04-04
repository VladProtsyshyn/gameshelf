import { NavLink } from 'react-router-dom'

const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'Games', to: '/games' },
  { label: 'Library', to: '/library' },
  { label: 'Studios', to: '/studios' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="site-logo" to="/">
          GameShelf
        </NavLink>

        <nav className="site-nav" aria-label="Primary navigation">
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

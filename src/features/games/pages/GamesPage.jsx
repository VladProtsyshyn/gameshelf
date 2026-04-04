import { Link } from 'react-router-dom'

const mockGames = [
  {
    title: 'Elden Ring',
    meta: ['Action RPG', 'Open World', '94 rating'],
    path: '/games/elden-ring',
  },
  {
    title: 'Red Dead Redemption 2',
    meta: ['Adventure', 'Story Rich', '96 rating'],
    path: '/games/red-dead-redemption-2',
  },
  {
    title: 'Lies of P',
    meta: ['Soulslike', 'Dark Fantasy', '80 rating'],
    path: '/games/lies-of-p',
  },
]

function GamesPage() {
  return (
    <section className="page">
      <div className="page__intro">
        <span className="page__eyebrow">Games</span>
        <h1>Search, filter, and explore the catalog.</h1>
        <p>
          This page will become the main working area of the product: search input, advanced
          filters, sorting, result count, cards, loading states, and pagination.
        </p>
      </div>

      <div className="page-grid page-grid--two">
        <div className="content-card">
          <h2>Search panel</h2>
          <div className="section-stack">
            <span className="meta-pill">Search by title</span>
            <span className="meta-pill">Filter by genre</span>
            <span className="meta-pill">Filter by platform</span>
            <span className="meta-pill">Sort by rating / date / popularity</span>
          </div>
        </div>

        <div className="content-card">
          <h2>Catalog behavior</h2>
          <ul className="list-clean">
            <li>Result count and active filter summary.</li>
            <li>Load More or pagination after the first API integration.</li>
            <li>Empty, loading, and error states in the same visual language.</li>
          </ul>
        </div>
      </div>

      <div className="page-grid page-grid--three">
        {mockGames.map((game) => (
          <article key={game.title} className="content-card">
            <h3>{game.title}</h3>
            <div className="chip-row">
              {game.meta.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
            <Link className="mini-link" to={game.path}>
              Open details
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default GamesPage

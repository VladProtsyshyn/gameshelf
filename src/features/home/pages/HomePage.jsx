import { Link } from 'react-router-dom'

const trendingPreview = [
  { title: 'Elden Ring', meta: 'Action RPG • PC / PS5', note: 'Epic worldbuilding and premium presentation.' },
  { title: 'Cyberpunk 2077', meta: 'Open World • PC / Xbox', note: 'Perfect candidate for large visual cards and details.' },
  { title: 'Hades II', meta: 'Roguelike • PC', note: 'A good example for spotlight and wishlist behavior.' },
]

function HomePage() {
  return (
    <section className="page page--hero">
      <div className="hero-layout">
        <div className="hero-panel hero-copy">
          <span className="hero-kicker">GameShelf Home</span>
          <h1>Discover games with a cleaner, richer, more curated feel.</h1>
          <p>
            This homepage will become the strongest visual entry point of the project:
            discovery, trending picks, studios, genres, and a personal library flow in one
            polished landing experience.
          </p>

          <div className="page__actions">
            <Link className="button-link" to="/games">
              Browse games
            </Link>
            <Link className="button-link button-link--ghost" to="/library">
              Open library
            </Link>
          </div>

          <div className="chip-row">
            <span className="chip">React + Vite</span>
            <span className="chip">Redux Toolkit</span>
            <span className="chip">RAWG API</span>
            <span className="chip">Game discovery flow</span>
          </div>
        </div>

        <div className="hero-aside">
          <div className="stat-card">
            <strong>6 pages</strong>
            <span>Core product structure already wired with routing.</span>
          </div>
          <div className="stat-card">
            <strong>Next focus</strong>
            <span>Turn this page into a full cinematic homepage with real sections.</span>
          </div>
          <div className="stat-card">
            <strong>Style shift</strong>
            <span>Moving away from purple tech-demo UI toward a darker editorial game vibe.</span>
          </div>
        </div>
      </div>

      <div className="page-grid page-grid--three">
        {trendingPreview.map((game) => (
          <article key={game.title} className="content-card content-card--accent">
            <h3>{game.title}</h3>
            <p>{game.note}</p>
            <div className="content-card__meta">
              <span className="meta-pill">{game.meta}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HomePage

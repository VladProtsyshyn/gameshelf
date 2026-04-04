import { Link, useParams } from 'react-router-dom'

function GameDetailsPage() {
  const { slug } = useParams()
  const title = slug?.replaceAll('-', ' ') ?? 'game'

  return (
    <section className="page">
      <div className="page__intro">
        <span className="page__eyebrow">Game Details</span>
        <h1>{title}</h1>
        <p>
          This route already works dynamically by slug. Later we will replace this preview
          with real RAWG details, screenshots, platform data, description, stores, and save
          actions.
        </p>
      </div>

      <div className="page-grid page-grid--two">
        <article className="content-card content-card--accent">
          <h2>Planned metadata block</h2>
          <div className="chip-row">
            <span className="chip">Release date</span>
            <span className="chip">Genres</span>
            <span className="chip">Platforms</span>
            <span className="chip">Developers</span>
            <span className="chip">Publishers</span>
          </div>
        </article>

        <article className="content-card">
          <h2>Planned actions</h2>
          <ul className="list-clean">
            <li>Add to Favorites</li>
            <li>Add to Wishlist</li>
            <li>Open stores block later</li>
            <li>Related games after the base flow is stable</li>
          </ul>
          <Link className="mini-link" to="/games">
            Back to catalog
          </Link>
        </article>
      </div>
    </section>
  )
}

export default GameDetailsPage

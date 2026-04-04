import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="page">
      <div className="page__intro">
        <span className="page__eyebrow">404</span>
        <h1>This route does not exist.</h1>
        <p>
          The path is broken or not created yet. Use one of the main routes below and keep
          exploring the project.
        </p>
        <div className="page__actions">
          <Link className="button-link" to="/">
            Back home
          </Link>
          <Link className="button-link button-link--ghost" to="/games">
            Open games
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage

import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="page">
      <div className="page__intro">
        <span className="page__eyebrow">404</span>
        <h1>Такого маршруту не існує.</h1>
        <p>
          Цей шлях зламаний або ще не створений. Скористайся одним з основних
          маршрутів нижче і продовжуй досліджувати проєкт.
        </p>
        <div className="page__actions">
          <Link className="button-link" to="/">
            На головну
          </Link>
          <Link className="button-link button-link--ghost" to="/games">
            Відкрити ігри
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage

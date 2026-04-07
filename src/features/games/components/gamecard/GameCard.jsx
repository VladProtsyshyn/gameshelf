/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import './GameCard.css'

function GameCard({ game }) {
  return (
    <article className="content-card game-card">
      {game.background_image && (
        <div className="game-card__media">
          <img className="game-card__image" src={game.background_image} alt={game.name} />
        </div>
      )}

      <div className="game-card__body">
        <div className="game-card__copy">
          <h3 className="game-card__title">{game.name}</h3>
          <p className="game-card__meta">
            {game.released ? `Реліз: ${game.released}` : 'Дата релізу невідома'}
          </p>
        </div>

        <div className="chip-row game-card__chips">
          {game.genres?.slice(0, 2).map((genre) => (
            <span key={genre.id} className="chip">
              {genre.name}
            </span>
          ))}
        </div>

        <Link className="mini-link game-card__link" to={`/games/${game.slug}`}>
          Відкрити деталі
        </Link>
      </div>
    </article>
  )
}

export default GameCard

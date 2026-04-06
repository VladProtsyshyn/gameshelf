/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import './GameCard.css'

function GameCard({ game }) {
  return (
    <article className="content-card game-card">
      {game.background_image && (
        <img className="game-card__image" src={game.background_image} alt={game.name} />
      )}

      <h3>{game.name}</h3>
      <p>{game.released ? `Реліз: ${game.released}` : 'Дата релізу невідома'}</p>

      <div className="chip-row">
        {game.genres?.slice(0, 2).map((genre) => (
          <span key={genre.id} className="chip">
            {genre.name}
          </span>
        ))}
      </div>

      <Link className="mini-link" to={`/games/${game.slug}`}>
        Відкрити деталі
      </Link>
    </article>
  )
}

export default GameCard

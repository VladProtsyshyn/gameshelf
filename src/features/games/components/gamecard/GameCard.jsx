/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import useSavedGames from '../../hooks/useSavedGames';
import './GameCard.css';

function GameCard({ game }) {
  const { isSaved, toggleSavedGame } = useSavedGames()
  const saved = isSaved(game.id)

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

        <div className="game-card__actions">
          <Link
            className="button-link button-link--ghost game-card__details"
            to={`/games/${game.slug}`}
          >
            Деталі гри
          </Link>

          <button
            type="button"
            className={`game-card__save${saved ? ' game-card__save--active' : ''}`}
            onClick={() => toggleSavedGame(game)}
            aria-label={saved ? 'Видалити з бібліотеки' : 'Додати в бібліотеку'}
            aria-pressed={saved}
          >
            {saved ? '♥' : '♡'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default GameCard

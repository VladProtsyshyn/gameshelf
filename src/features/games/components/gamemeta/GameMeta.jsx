/* eslint-disable react/prop-types */

import './GameMeta.css'

function GameMeta({ game }) {
  return (
    <div className="page-grid page-grid--two game-meta">
      <article className="content-card">
        <h2>Інформація про гру</h2>
        <p>Реліз: {game.released || 'Невідомо'}</p>
        <p>Рейтинг: {game.rating || 'Н/Д'}</p>
      </article>

      <article className="content-card">
        <h2>Жанри</h2>
        <div className="chip-row">
          {game.genres?.map((genre) => (
            <span key={genre.id} className="chip">
              {genre.name}
            </span>
          ))}
        </div>
      </article>
    </div>
  )
}

export default GameMeta

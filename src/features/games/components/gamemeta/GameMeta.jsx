/* eslint-disable react/prop-types */

import './GameMeta.css'

function GameMeta({ game }) {
  return (
    <div className="page-grid page-grid--two game-meta">
      <article className="content-card">
        <h2>Game Info</h2>
        <p>Released: {game.released || 'Unknown'}</p>
        <p>Rating: {game.rating || 'N/A'}</p>
      </article>

      <article className="content-card">
        <h2>Genres</h2>
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

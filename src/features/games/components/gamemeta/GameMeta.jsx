/* eslint-disable react/prop-types */

import './GameMeta.css'

function GameMeta({ game }) {
  const platforms = game.platforms?.map(({ platform }) => platform.name) || []
  const studios =
    game.developers?.map((developer) => developer.name) ||
    game.publishers?.map((publisher) => publisher.name) ||
    []

  return (
    <div className="page-grid page-grid--two game-meta">
      <article className="content-card game-meta__card">
        <h2>Основна інформація</h2>
        <ul className="list-clean game-meta__list">
          <li className="game-meta__item">
            <span>Реліз</span>
            <strong>{game.released || 'Невідомо'}</strong>
          </li>
          <li className="game-meta__item">
            <span>Рейтинг</span>
            <strong>{game.rating ? game.rating.toFixed(1) : 'Н/Д'}</strong>
          </li>
          <li className="game-meta__item">
            <span>Metacritic</span>
            <strong>{game.metacritic || 'Н/Д'}</strong>
          </li>
          <li className="game-meta__item">
            <span>Час у грі</span>
            <strong>{game.playtime ? `${game.playtime} год` : 'Н/Д'}</strong>
          </li>
        </ul>
      </article>

      <article className="content-card game-meta__card">
        <h2>Жанри</h2>
        <div className="chip-row game-meta__chips">
          {game.genres?.map((genre) => (
            <span key={genre.id} className="chip">
              {genre.name}
            </span>
          ))}
        </div>
      </article>

      <article className="content-card game-meta__card">
        <h2>Платформи</h2>
        <div className="chip-row game-meta__chips">
          {platforms.length > 0 ? (
            platforms.map((platformName) => (
              <span key={platformName} className="chip">
                {platformName}
              </span>
            ))
          ) : (
            <p>Платформи поки недоступні.</p>
          )}
        </div>
      </article>

      <article className="content-card game-meta__card">
        <h2>Студії</h2>
        <div className="chip-row game-meta__chips">
          {studios.length > 0 ? (
            studios.map((studio) => (
              <span key={studio} className="chip">
                {studio}
              </span>
            ))
          ) : (
            <p>Інформація про студії поки недоступна.</p>
          )}
        </div>
      </article>
    </div>
  )
}

export default GameMeta

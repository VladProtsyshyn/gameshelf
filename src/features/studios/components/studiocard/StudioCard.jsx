/* eslint-disable react/prop-types */

import './StudioCard.css'

function formatGamesCount(value) {
  return new Intl.NumberFormat('uk-UA').format(value ?? 0)
}

function getTopGames(studio) {
  return studio.games?.slice(0, 3).map((game) => game.name).filter(Boolean) ?? []
}

function getStudioDescription(studio, topGames) {
  if (topGames.length >= 2) {
    return `Студія, відома за ${topGames[0]} та ${topGames[1]}, залишається помітною силою в каталозі RAWG.`
  }

  if (topGames.length === 1) {
    return `Студія, пов'язана з ${topGames[0]}, входить до помітних команд у добірці RAWG.`
  }

  return `У каталозі RAWG для цієї студії знайдено ${formatGamesCount(studio.games_count)} ігор.`
}

function StudioCard({ studio }) {
  const topGames = getTopGames(studio)
  const description = getStudioDescription(studio, topGames)

  return (
    <article className="content-card content-card--accent studio-card">
      <div className="studio-card__copy">
        <span className="studio-card__eyebrow">Студія</span>
        <h3>{studio.name}</h3>
        <p>{description}</p>
      </div>

      {topGames.length > 0 && (
        <div className="studio-card__highlights">
          <span className="studio-card__label">Помітні ігри</span>

          <div className="studio-card__games">
            {topGames.map((gameName) => (
              <span key={gameName} className="studio-card__game-pill">
                {gameName}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="studio-card__footer">
        <span className="meta-pill">{formatGamesCount(studio.games_count)} ігор</span>
        <span className="studio-card__source">RAWG / Developers</span>
      </div>
    </article>
  )
}

export default StudioCard

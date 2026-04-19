import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import GameMeta from '../components/gamemeta/GameMeta'
import { fetchFromRawg } from '../../../services/api/rawgClient'
import LoadingIndicator from '../../../components/ui/loadingindicator/LoadingIndicator'
import ErrorState from '../../../components/ui/errorstate/ErrorState'
import './GameDetailsPage.css'

function GameDetailsPage() {
  const { slug } = useParams()
  const [game, setGame] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadGameDetails() {
      try {
        setIsLoading(true)
        setError('')

        const data = await fetchFromRawg(`/games/${slug}`)
        setGame(data)
      } catch {
        setError('Не вдалося завантажити деталі гри.')
      } finally {
        setIsLoading(false)
      }
    }

    loadGameDetails()
  }, [slug])

  return (
    <section className="page game-details-page">
      {isLoading && <LoadingIndicator />}

      {error && <ErrorState />}

      {!isLoading && !error && game && (
        <>
          <div className="game-details-page__hero">
            {game.background_image && (
              <div className="game-details-page__media">
                <img
                  className="game-details-page__image"
                  src={game.background_image}
                  alt={game.name}
                  loading="eager"
                  decoding="async"
                />
              </div>
            )}

            <div className="game-details-page__hero-copy">
              <span className="page__eyebrow">Деталі гри</span>
              <h1>{game.name}</h1>

              <div className="chip-row game-details-page__facts">
                <span className="meta-pill">
                  Реліз: {game.released || 'Невідомо'}
                </span>
                <span className="meta-pill">
                  Рейтинг: {game.rating ? game.rating.toFixed(1) : 'Н/Д'}
                </span>
                {game.metacritic && (
                  <span className="meta-pill">Metacritic: {game.metacritic}</span>
                )}
              </div>
            </div>
          </div>

          <div className="page-grid page-grid--two game-details-page__lead">
            <article className="content-card content-card--accent game-details-page__description">
              <h2>Про гру</h2>
              <p>{game.description_raw || 'Опис поки недоступний.'}</p>
            </article>

            <article className="content-card game-details-page__actions-card">
              <h2>Швидкі дії</h2>
              <p>
                Переглянь додаткову інформацію про гру або повернись до каталогу,
                щоб продовжити пошук.
              </p>

              <div className="page__actions game-details-page__actions">
                <Link className="button-link button-link--ghost" to="/games">
                  Назад до ігор
                </Link>

                {game.website && (
                  <a
                    className="button-link"
                    href={game.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Офіційний сайт
                  </a>
                )}
              </div>
            </article>
          </div>

          <GameMeta game={game} />
        </>
      )}
    </section>
  )
}

export default GameDetailsPage

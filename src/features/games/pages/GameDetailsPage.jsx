import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import GameMeta from '../components/gamemeta/GameMeta'
import { fetchFromRawg } from '../../../services/api/rawgClient'

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
    <section className="page">
      {isLoading && <p>Завантаження деталей гри...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && game && (
        <>
          <div className="page__intro">
            <span className="page__eyebrow">Деталі гри</span>
            <h1>{game.name}</h1>
            <p>{game.description_raw || 'Опис поки недоступний.'}</p>
          </div>

          {game.background_image && (
            <img
              src={game.background_image}
              alt={game.name}
              style={{
                width: '100%',
                maxHeight: '420px',
                objectFit: 'cover',
                borderRadius: '20px',
                margin: '2rem 0',
              }}
            />
          )}

          <GameMeta game={game} />

          <div className="page__actions">
            <Link className="button-link button-link--ghost" to="/games">
              Назад до ігор
            </Link>
          </div>
        </>
      )}
    </section>
  )
}

export default GameDetailsPage

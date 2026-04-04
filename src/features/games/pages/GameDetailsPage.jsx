import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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
        setError('Failed to load game details.')
      } finally {
        setIsLoading(false)
      }
    }

    loadGameDetails()
  }, [slug])

  return (
    <section className="page">
      {isLoading && <p>Loading game details...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && game && (
        <>
          <div className="page__intro">
            <span className="page__eyebrow">Game Details</span>
            <h1>{game.name}</h1>
            <p>{game.description_raw || 'No description available.'}</p>
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

          <div className="page-grid page-grid--two">
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

          <div className="page__actions">
            <Link className="button-link button-link--ghost" to="/games">
              Back to games
            </Link>
          </div>
        </>
      )}
    </section>
  )
}

export default GameDetailsPage

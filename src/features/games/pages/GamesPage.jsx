import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchFromRawg } from '../../../services/api/rawgClient'

function GamesPage() {
  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function loadGames() {
      try {
        setIsLoading(true)
        setError('')

        const data = await fetchFromRawg('/games', {
          page_size: 9,
          ...(search ? { search } : {}),
        })

        setGames(data.results || [])
      } catch {
        setError('Failed to load games.')
      } finally {
        setIsLoading(false)
      }
    }

    loadGames()
  }, [search])

  return (
    <section className="page">
      <div className="page__intro">
        <span className="page__eyebrow">Games</span>
        <h1>Search, filter, and explore the catalog.</h1>
        <p>
          This page is now connected to RAWG. Next we will improve the UI and add
          search, filters, sorting, and better loading states.
        </p>
      </div>

      <div style={{ margin: '2rem 0' }}>
        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '420px',
            padding: '0.9rem 1rem',
            borderRadius: '14px',
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(255,255,255,0.04)',
            color: '#fff',
          }}
        />
      </div>

      {isLoading && <p>Loading games...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <div className="page-grid page-grid--three">
          {games.map((game) => (
            <article key={game.id} className="content-card">
              {game.background_image && (
                <img
                  src={game.background_image}
                  alt={game.name}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    marginBottom: '1rem',
                  }}
                />
              )}
              <h3>{game.name}</h3>
              <p>
                {game.released ? `Released: ${game.released}` : 'Release date unknown'}
              </p>

              <div className="chip-row">
                {game.genres?.slice(0, 2).map((genre) => (
                  <span key={genre.id} className="chip">
                    {genre.name}
                  </span>
                ))}
              </div>

              <Link className="mini-link" to={`/games/${game.slug}`}>
                Open details
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default GamesPage

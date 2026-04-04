import { useEffect, useState } from 'react'
import GameCard from '../components/gamecard/GameCard'
import GamesToolbar from '../components/gamestoolbar/GamesToolbar'
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

      <GamesToolbar search={search} setSearch={setSearch} />

      {isLoading && <p>Loading games...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <div className="page-grid page-grid--three">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </section>
  )
}

export default GamesPage

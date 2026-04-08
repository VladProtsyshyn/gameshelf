import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchFromRawg } from '../../../../services/api/rawgClient'
import LoadingIndicator from '../../../../components/ui/loadingindicator/LoadingIndicator'
import ErrorState from '../../../../components/ui/errorstate/ErrorState'
import './HomeStudios.css'

function formatGamesCount(value) {
  return new Intl.NumberFormat('uk-UA').format(value ?? 0)
}

function formatStudioDescription(studio) {
  const topGames = studio.games?.slice(0, 2).map((game) => game.name).filter(Boolean) ?? []

  if (topGames.length === 2) {
    return `Відомі за ${topGames[0]} та ${topGames[1]}. У базі RAWG пов’язано ${formatGamesCount(studio.games_count)} ігор.`
  }

  if (topGames.length === 1) {
    return `Відомі за ${topGames[0]}. У базі RAWG пов’язано ${formatGamesCount(studio.games_count)} ігор.`
  }

  return `Одна з помітних студій у каталозі RAWG з ${formatGamesCount(studio.games_count)} іграми в базі.`
}

function HomeStudios() {
  const [studios, setStudios] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadStudios() {
      try {
        setIsLoading(true)
        setError('')

        const data = await fetchFromRawg('/developers', {
          page_size: 6,
        })

        setStudios(data.results || [])
      } catch {
        setError('Не вдалося завантажити список студій.')
      } finally {
        setIsLoading(false)
      }
    }

    loadStudios()
  }, [])

  return (
    <div className="home-section">
      <div className="home-section__heading">
        <h2>Студії, за якими варто стежити</h2>
      </div>

      {isLoading && <LoadingIndicator />}
      {error && <ErrorState />}

      {!isLoading && !error && (
        <div className="page-grid page-grid--three">
          {studios.map((studio) => (
            <Link
              key={studio.id}
              to="/studios"
              className="content-card home-studio-card home-studio-card--link"
            >
              <div>
                <h3>{studio.name}</h3>
                <p>{formatStudioDescription(studio)}</p>
              </div>

              <div className="home-studio-card__meta">
                <span className="meta-pill">{formatGamesCount(studio.games_count)} ігор</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default HomeStudios

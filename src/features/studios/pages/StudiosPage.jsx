import { useEffect, useState } from 'react'
import { fetchFromRawg } from '../../../services/api/rawgClient'

function formatGamesCount(value) {
  return new Intl.NumberFormat('uk-UA').format(value ?? 0)
}

function formatStudioDescription(studio) {
  const topGames = studio.games?.slice(0, 3).map((game) => game.name).filter(Boolean) ?? []

  if (topGames.length > 0) {
    return `Серед пов’язаних ігор: ${topGames.join(', ')}.`
  }

  return `У каталозі RAWG для цієї студії знайдено ${formatGamesCount(studio.games_count)} ігор.`
}

function StudiosPage() {
  const [studios, setStudios] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadStudios() {
      try {
        setIsLoading(true)
        setError('')

        const data = await fetchFromRawg('/developers', {
          page_size: 12,
        })

        setStudios(data.results || [])
      } catch {
        setError('Не вдалося завантажити студії.')
      } finally {
        setIsLoading(false)
      }
    }

    loadStudios()
  }, [])

  return (
    <section className="page">
      <div className="page__intro">
        <span className="page__eyebrow">Студії</span>
        <h1>Студії, що формують сучасні ігри.</h1>
        <p>
          Тут зібрані популярні команди розробників із RAWG. Переглядай студії,
          їхню активність у каталозі та ігри, з якими вони найчастіше пов’язані.
        </p>
      </div>

      {isLoading && <p>Завантаження студій...</p>}
      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <div className="page-grid page-grid--three">
          {studios.map((studio) => (
            <article key={studio.id} className="content-card content-card--accent">
              <h3>{studio.name}</h3>
              <p>{formatStudioDescription(studio)}</p>
              <div className="chip-row">
                <span className="meta-pill">{formatGamesCount(studio.games_count)} ігор</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default StudiosPage

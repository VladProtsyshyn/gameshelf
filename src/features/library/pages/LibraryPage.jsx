import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { genreOptions } from '../../../data/genreOptions'
import GameCard from '../../games/components/gamecard/GameCard'
import { fetchFromRawg } from '../../../services/api/rawgClient'
import useSavedGames from '../../games/hooks/useSavedGames'
import LoadingIndicator from '../../../components/ui/loadingindicator/LoadingIndicator'
import ErrorState from '../../../components/ui/errorstate/ErrorState'
import './LibraryPage.css'

function LibraryPage() {
  const { savedGames } = useSavedGames()
  const [searchParams] = useSearchParams()
  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeView, setActiveView] = useState('saved')

  const genreFromQuery = searchParams.get('genre')
  const activeGenre =
    genreOptions.find((genre) => genre.slug === genreFromQuery) ?? genreOptions[0]

  useEffect(() => {
    if (activeView !== 'genres') {
      return
    }

    async function loadGenreGames() {
      try {
        setIsLoading(true)
        setError('')

        const data = await fetchFromRawg('/games', {
          page_size: 12,
          genres: activeGenre.slug,
        })

        setGames(data.results || [])
      } catch {
        setError('Не вдалося завантажити ігри для цього жанру.')
      } finally {
        setIsLoading(false)
      }
    }

    loadGenreGames()
  }, [activeGenre.slug, activeView])

  return (
    <section className="page library-page">
      <div className="page__intro">
        <span className="page__eyebrow">Бібліотека жанрів</span>
        <h1>{activeGenre.label}</h1>
        <p>
          Перемикайся між популярними жанрами і відкривай добірку ігор в одному
          місці. Кожна кнопка зверху швидко перебудовує бібліотеку під інший
          жанровий настрій.
        </p>
      </div>

      <div className="library-switcher">
        <button
          type="button"
          className={`library-switcher__button${activeView === 'saved' ? ' library-switcher__button--active' : ''}`}
          onClick={() => setActiveView('saved')}
        >
          Збережені
        </button>

        <button
          type="button"
          className={`library-switcher__button${activeView === 'genres' ? ' library-switcher__button--active' : ''}`}
          onClick={() => setActiveView('genres')}
        >
          Жанри
        </button>
      </div>

      {activeView === 'saved' && (
        <section className="library-saved">
          <div className="library-saved__header">
            <h2>Моя бібліотека</h2>
          </div>

          {savedGames.length > 0 ? (
            <div className="page-grid page-grid--three">
              {savedGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <article className="content-card library-saved__empty">
              <h3>Поки що порожньо</h3>
              <p>
                Додавай ігри через сердечко в каталозі, і вони з’являться тут.
              </p>
            </article>
          )}
        </section>
      )}

      {activeView === 'genres' && (
        <>
          <div className="library-genres">
            {genreOptions.map((genre) => {
              const isActive = genre.slug === activeGenre.slug

              return (
                <Link
                  key={genre.slug}
                  className={`library-genres__item${isActive ? ' library-genres__item--active' : ''}`}
                  to={`/library?genre=${genre.slug}`}
                >
                  {genre.label}
                </Link>
              )
            })}
          </div>

          {isLoading && <LoadingIndicator />}
          {error && <ErrorState />}

          {!isLoading && !error && (
            <>
              {games.length > 0 ? (
                <div className="page-grid page-grid--three">
                  {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </div>
              ) : (
                <article className="content-card library-saved__empty">
                  <h3>Поки що порожньо</h3>
                  <p>Для цього жанру зараз немає ігор у вибраній добірці.</p>
                </article>
              )}
            </>
          )}
        </>
      )}
    </section>
  )
}

export default LibraryPage

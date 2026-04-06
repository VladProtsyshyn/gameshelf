import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { genreOptions } from '../../../data/genreOptions'
import GameCard from '../../games/components/gamecard/GameCard'
import { fetchFromRawg } from '../../../services/api/rawgClient'
import './LibraryPage.css'

function LibraryPage() {
  const [searchParams] = useSearchParams()
  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const genreFromQuery = searchParams.get('genre')
  const activeGenre =
    genreOptions.find((genre) => genre.slug === genreFromQuery) ?? genreOptions[0]

  useEffect(() => {
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
  }, [activeGenre.slug])

  return (
    <section className="page">
      <div className="page__intro">
        <span className="page__eyebrow">Бібліотека жанрів</span>
        <h1>{activeGenre.label}</h1>
        <p>
          Перемикайся між популярними жанрами і відкривай добірку ігор в одному
          місці. Кожна кнопка зверху швидко перебудовує бібліотеку під інший
          жанровий настрій.
        </p>
      </div>

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

      {isLoading && <p>Завантаження жанру...</p>}
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

export default LibraryPage

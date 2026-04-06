import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchFromRawg } from '../../../../services/api/rawgClient'
import './HomeShowcase.css'

const VISIBLE_SLIDES = 5
const PAGE_SIZE = 20

function HomeShowcase() {
    const [games, setGames] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        async function loadShowcaseGames() {
            try {
                setIsLoading(true)
                setError('')

                const data = await fetchFromRawg('/games', {
                    page_size: PAGE_SIZE,
                })

                const nextGames = (data.results || []).filter((game) => game.background_image)
                setGames(nextGames)
            } catch {
                setError('Не вдалося завантажити ігри для добірки.')
            } finally {
                setIsLoading(false)
            }
        }

        loadShowcaseGames()
    }, [])

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1))
    }

    const nextSlide = () => {
        const maxIndex = Math.max(games.length - VISIBLE_SLIDES, 0)
        setCurrentIndex((prev) => (prev >= maxIndex ? maxIndex : prev + 1))
    }

    return (
        <section className="home-showcase">
            {isLoading && <p>Завантаження добірки...</p>}
            {error && <p>{error}</p>}

            {!isLoading && !error && games.length > 0 && (
                <div className="showcase-slider">
                    <button
                        type="button"
                        className="showcase-slider__arrow showcase-slider__arrow--left"
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                    >
                        ←
                    </button>

                    <div className="showcase-slider__viewport">
                        <div
                            className="showcase-slider__track"
                            style={{
                                transform: `translateX(calc(-${currentIndex} * ((100% - 4rem) / 5 + 1rem)))`,
                            }}
                            >
                            {games.map((game) => (
                                <article key={game.id} className="showcase-slide">
                                    <Link to={`/games/${game.slug}`} className="showcase-slide__link">
                                        <img
                                            src={game.background_image}
                                            alt={game.name}
                                            className="showcase-slide__image"
                                        />
                                            <div className="showcase-slide__overlay">
                                            <h3 className="showcase-slide__title">{game.name}</h3>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>

                    <button
                        type="button"
                        className="showcase-slider__arrow showcase-slider__arrow--right"
                        onClick={nextSlide}
                        disabled={currentIndex >= Math.max(games.length - VISIBLE_SLIDES, 0)}
                    >
                        →
                    </button>
                </div>
            )}
        </section>
    )
}

export default HomeShowcase

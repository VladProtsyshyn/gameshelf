import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchFromRawg } from '../../../../services/api/rawgClient'
import LoadingIndicator from '../../../../components/ui/loadingindicator/LoadingIndicator'
import ErrorState from '../../../../components/ui/errorstate/ErrorState'
import './HomeShowcase.css'

const DEFAULT_VISIBLE_SLIDES = 5

function getVisibleSlides() {
    if (typeof window === 'undefined') return DEFAULT_VISIBLE_SLIDES

    if (window.matchMedia('(max-width: 640px)').matches) return 1
    if (window.matchMedia('(max-width: 820px)').matches) return 2
    if (window.matchMedia('(max-width: 1100px)').matches) return 3

    return DEFAULT_VISIBLE_SLIDES
}

const PAGE_SIZE = 20

function HomeShowcase() {
    const [games, setGames] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleSlides, setVisibleSlides] = useState(DEFAULT_VISIBLE_SLIDES)
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

    useEffect(() => {
        const updateVisibleSlides = () => {
            setVisibleSlides(getVisibleSlides())
        }

        updateVisibleSlides()
        window.addEventListener('resize', updateVisibleSlides)

        return () => window.removeEventListener('resize', updateVisibleSlides)
    }, [])

    useEffect(() => {
        const maxIndex = Math.max(games.length - visibleSlides, 0)

        setCurrentIndex((prev) => Math.min(prev, maxIndex))
    }, [games.length, visibleSlides])

    const prevSlide = () => {
        const maxIndex = Math.max(games.length - visibleSlides, 0)

        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
    }

    const nextSlide = () => {
        const maxIndex = Math.max(games.length - visibleSlides, 0)

        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }

    return (
        <section className="home-showcase">
            {isLoading && <LoadingIndicator />}
            {error && <ErrorState />}

            {!isLoading && !error && games.length > 0 && (
                <div className="showcase-slider">
                    <button
                        type="button"
                        className="showcase-slider__arrow showcase-slider__arrow--left"
                        onClick={prevSlide}
                    >
                        <svg
                            className="showcase-slider__icon"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M14 5L7 12L14 19" />
                            <path d="M8 12H18" />
                        </svg>
                    </button>

                    <div className="showcase-slider__viewport">
                        <div
                            className="showcase-slider__track"
                            style={{
                                '--current-index': currentIndex,
                                transform:
                                    'translateX(calc(-1 * var(--current-index) * ((100% - (var(--visible-slides) - 1) * var(--slide-gap)) / var(--visible-slides) + var(--slide-gap))))',
                            }}
                        >
                            {games.map((game, index) => (
                                <article key={game.id} className="showcase-slide">
                                    <Link to={`/games/${game.slug}`} className="showcase-slide__link">
                                        <img
                                            src={game.background_image}
                                            alt={game.name}
                                            className="showcase-slide__image"
                                            loading={index < visibleSlides ? 'eager' : 'lazy'}
                                            decoding="async"
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
                    >
                        <svg
                            className="showcase-slider__icon"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M10 5L17 12L10 19" />
                            <path d="M6 12H16" />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    )
}

export default HomeShowcase

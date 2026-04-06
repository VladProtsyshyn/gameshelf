import { Link } from 'react-router-dom'
import './HomeHero.css'

function HomeHero() {
    return (
        <section className="home-hero">
            <div className="hero-panel hero-copy">
                <h1>Знайди свою гру</h1>

                <p>
                    GameShelf поєднує каталог, бібліотеку, добірки та сторінки студій в одному
                    просторі, щоб ти міг швидко знаходити нові релізи, повертатися до улюблених
                    тайтлів і відкривати для себе жанри, платформи та розробників через візуально
                    сильну й зручну сторінку пошуку.
                </p>

                <div className="page__actions">
                    <Link className="button-link" to="/games">
                        Переглянути ігри
                    </Link>

                    <Link className="button-link button-link--ghost" to="/library">
                        Відкрити бібліотеку
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HomeHero

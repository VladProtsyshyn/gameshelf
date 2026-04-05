import { Link } from 'react-router-dom'
import './HomeHero.css'

function HomeHero() {
    return (
        <div className="home-hero hero-layout">
            <div className="hero-panel hero-copy">
                <span className="hero-kicker">Головна GameShelf</span>
                <h1>Відкривай ігри через яскраву кураторську arcade-естетику.</h1>
                <p>
                    Ми відходимо від типового магазино-подібного інтерфейсу і перетворюємо
                    GameShelf на більш виразну платформу для пошуку ігор із власним характером.
                </p>

                <div className="page__actions">
                    <Link className="button-link" to="/games">
                        Переглянути ігри
                    </Link>
                    <Link className="button-link button-link--ghost" to="/library">
                        Відкрити бібліотеку
                    </Link>
                </div>

                <div className="chip-row">
                    <span className="chip">React + Vite</span>
                    <span className="chip">Redux Toolkit</span>
                    <span className="chip">RAWG API</span>
                    <span className="chip">Сценарій пошуку ігор</span>
                </div>
            </div>

            <div className="hero-aside">
                <div className="stat-card">
                    <strong>6 сторінок</strong>
                    <span>Базова структура вже зібрана з роутингом і готовим API-flow.</span>
                </div>
                <div className="stat-card">
                    <strong>Етап редизайну</strong>
                    <span>Ми перебудовуємо візуальний стиль секція за секцією.</span>
                </div>
                <div className="stat-card">
                    <strong>Наступний етап</strong>
                    <span>Перетворити Home на справді сильну фірмову сторінку, а не просто вступ до каталогу.</span>
                </div>
            </div>
        </div>
    )
}

export default HomeHero

import { Link } from 'react-router-dom'
import './HomeHero.css'

function HomeHero() {
    return (
        <div className="home-hero hero-layout">
            <div className="hero-panel hero-copy">
                <span className="hero-kicker">GameShelf Home</span>
                <h1>Discover games through a bold, curated arcade-luxe lens.</h1>
                <p>
                    We are moving away from the usual store-style gaming interface and shaping
                    GameShelf into a more expressive discovery platform with stronger identity.
                </p>

                <div className="page__actions">
                    <Link className="button-link" to="/games">
                        Browse games
                    </Link>
                    <Link className="button-link button-link--ghost" to="/library">
                        Open library
                    </Link>
                </div>

                <div className="chip-row">
                    <span className="chip">React + Vite</span>
                    <span className="chip">Redux Toolkit</span>
                    <span className="chip">RAWG API</span>
                    <span className="chip">Game discovery flow</span>
                </div>
            </div>

            <div className="hero-aside">
                <div className="stat-card">
                    <strong>6 pages</strong>
                    <span>Core structure is already wired with routing and API-ready flow.</span>
                </div>
                <div className="stat-card">
                    <strong>Now rebranding</strong>
                    <span>We are rebuilding the visual identity section by section.</span>
                </div>
                <div className="stat-card">
                    <strong>Next milestone</strong>
                    <span>Turn Home into a real signature page instead of a generic catalog intro.</span>
                </div>
            </div>
        </div>
    )
}

export default HomeHero

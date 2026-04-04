import './HomeStudios.css'

const studios = ['FromSoftware', 'Larian Studios', 'CD Projekt Red']

function HomeStudios() {
    return (
        <div className="home-section">
        <div className="home-section__heading">
            <span className="page__eyebrow">Studios</span>
            <h2>Studios worth following</h2>
        </div>

        <div className="page-grid page-grid--three">
            {studios.map((studio) => (
            <article key={studio} className="content-card home-studio-card">
                <h3>{studio}</h3>
                <p>
                    This block will later connect directly to the studios feature and related
                    games.
                </p>
            </article>
            ))}
        </div>
        </div>
    )
}

export default HomeStudios

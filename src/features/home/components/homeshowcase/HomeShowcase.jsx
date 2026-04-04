import './HomeShowcase.css'

const trendingPreview = [
    {
        title: 'Elden Ring',
        meta: 'Action RPG / PC / PS5',
        note: 'Epic worldbuilding and premium presentation.',
    },
    {
        title: 'Cyberpunk 2077',
        meta: 'Open World / PC / Xbox',
        note: 'A perfect candidate for dramatic featured cards and rich details.',
    },
    {
        title: 'Hades II',
        meta: 'Roguelike / PC',
        note: 'A sharp example for spotlight, wishlist, and editorial discovery sections.',
    },
]

function HomeShowcase() {
    return (
        <div className="home-section">
            <div className="home-section__heading">
                <span className="page__eyebrow">Showcase</span>
                <h2>Early spotlight cards</h2>
            </div>

            <div className="page-grid page-grid--three">
                {trendingPreview.map((game) => (
                <article key={game.title} className="content-card content-card--accent">
                    <h3>{game.title}</h3>
                    <p>{game.note}</p>
                    <div className="content-card__meta">
                        <span className="meta-pill">{game.meta}</span>
                    </div>
                </article>
                ))}
            </div>
        </div>
    )
}

export default HomeShowcase

import './HomeShowcase.css'

const trendingPreview = [
    {
        title: 'Elden Ring',
        meta: 'Action RPG / PC / PS5',
        note: 'Епічний світ і сильна візуальна подача.',
    },
    {
        title: 'Cyberpunk 2077',
        meta: 'Open World / PC / Xbox',
        note: 'Ідеальний кандидат для виразних featured-карток і насичених деталей.',
    },
    {
        title: 'Hades II',
        meta: 'Roguelike / PC',
        note: 'Вдалий приклад для spotlight-секції, wishlist і редакційної подачі.',
    },
]

function HomeShowcase() {
    return (
        <div className="home-section">
            <div className="home-section__heading">
                <span className="page__eyebrow">Добірка</span>
                <h2>Перші акцентні картки</h2>
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

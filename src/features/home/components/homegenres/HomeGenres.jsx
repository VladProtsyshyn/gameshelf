import './HomeGenres.css'

const genres = ['Action RPG', 'Soulslike', 'Open World', 'Strategy', 'Sci-Fi', 'Indie']

function HomeGenres() {
    return (
        <div className="home-section">
            <div className="home-section__heading">
                <span className="page__eyebrow">Genres</span>
                <h2>Browse the mood, not just the title</h2>
            </div>

            <div className="home-genres">
                {genres.map((genre) => (
                    <span key={genre} className="home-genres__item">
                        {genre}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default HomeGenres

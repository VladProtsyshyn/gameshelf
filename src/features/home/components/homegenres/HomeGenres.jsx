import { Link } from 'react-router-dom'
import { genreOptions } from '../../../../data/genreOptions'
import './HomeGenres.css'

function HomeGenres() {
  return (
    <div className="home-section">
      <div className="home-section__heading">
        <h2>Обери жанр для старту</h2>
      </div>

      <div className="home-genres">
        {genreOptions.map((genre) => (
          <Link
            key={genre.slug}
            className="home-genres__item"
            to={`/library?genre=${genre.slug}`}
          >
            {genre.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomeGenres

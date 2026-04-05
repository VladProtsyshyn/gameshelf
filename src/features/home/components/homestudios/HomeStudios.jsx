import './HomeStudios.css'

const studios = ['FromSoftware', 'Larian Studios', 'CD Projekt Red']

function HomeStudios() {
    return (
        <div className="home-section">
        <div className="home-section__heading">
            <span className="page__eyebrow">Студії</span>
            <h2>Студії, за якими варто стежити</h2>
        </div>

        <div className="page-grid page-grid--three">
            {studios.map((studio) => (
            <article key={studio} className="content-card home-studio-card">
                <h3>{studio}</h3>
                <p>
                    Пізніше цей блок буде напряму пов'язаний зі сторінкою студій та
                    пов'язаними іграми.
                </p>
            </article>
            ))}
        </div>
        </div>
    )
}

export default HomeStudios

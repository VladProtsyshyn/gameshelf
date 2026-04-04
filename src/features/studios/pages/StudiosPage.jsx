const studioPreview = [
  { name: 'FromSoftware', focus: 'Action RPGs, dark fantasy, authored combat systems' },
  { name: 'CD Projekt Red', focus: 'Narrative RPGs, open worlds, premium worldbuilding' },
  { name: 'Larian Studios', focus: 'Party RPG design, systems-driven storytelling' },
]

function StudiosPage() {
  return (
    <section className="page">
      <div className="page__intro">
        <span className="page__eyebrow">Studios</span>
        <h1>Explore the developers behind the games.</h1>
        <p>
          This page gives the project more depth: not only games, but also the studios,
          publishers, related titles, and later a news or article layer if we connect one.
        </p>
      </div>

      <div className="page-grid page-grid--three">
        {studioPreview.map((studio) => (
          <article key={studio.name} className="content-card content-card--accent">
            <h3>{studio.name}</h3>
            <p>{studio.focus}</p>
          </article>
        ))}
      </div>

      <div className="page-grid page-grid--two">
        <article className="content-card">
          <h2>RAWG-backed data</h2>
          <ul className="list-clean">
            <li>Developers and publishers list.</li>
            <li>Studio-related games.</li>
            <li>Search flow for studio names.</li>
          </ul>
        </article>

        <article className="content-card">
          <h2>Possible later extension</h2>
          <ul className="list-clean">
            <li>Article cards or news feed.</li>
            <li>Featured studios block on Home.</li>
            <li>Links back to filtered games catalog.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default StudiosPage

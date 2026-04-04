const savedGroups = [
  {
    title: 'Favorites',
    description: 'The games you want to keep close and revisit often.',
  },
  {
    title: 'Wishlist',
    description: 'The backlog and upcoming titles you want to track.',
  },
]

function LibraryPage() {
  return (
    <section className="page">
      <div className="page__intro">
        <span className="page__eyebrow">Library</span>
        <h1>Your saved game space in one route.</h1>
        <p>
          Instead of splitting favorites and wishlist into separate pages, we keep both lists
          together here and make switching between them faster and cleaner.
        </p>
      </div>

      <div className="page-grid page-grid--two">
        {savedGroups.map((group) => (
          <article key={group.title} className="content-card">
            <h2>{group.title}</h2>
            <p>{group.description}</p>
            <div className="content-card__meta">
              <span className="meta-pill">LocalStorage</span>
              <span className="meta-pill">Empty state</span>
              <span className="meta-pill">Remove action</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LibraryPage

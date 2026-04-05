const savedGroups = [
  {
    title: 'Улюблені',
    description: 'Ігри, які хочеться тримати поруч і повертатися до них знову.',
  },
  {
    title: 'Список бажаного',
    description: 'Беклог і майбутні релізи, за якими ти хочеш стежити.',
  },
]

function LibraryPage() {
  return (
    <section className="page">
      <div className="page__intro">
        <span className="page__eyebrow">Бібліотека</span>
        <h1>Твій простір зі збереженими іграми в одному місці.</h1>
        <p>
          Замість того, щоб розділяти улюблені і wishlist на окремі сторінки, ми
          тримаємо обидва списки тут і робимо перемикання між ними швидшим та чистішим.
        </p>
      </div>

      <div className="page-grid page-grid--two">
        {savedGroups.map((group) => (
          <article key={group.title} className="content-card">
            <h2>{group.title}</h2>
            <p>{group.description}</p>
            <div className="content-card__meta">
              <span className="meta-pill">LocalStorage</span>
              <span className="meta-pill">Порожній стан</span>
              <span className="meta-pill">Видалення</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LibraryPage

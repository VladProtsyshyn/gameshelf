const studioPreview = [
  { name: 'FromSoftware', focus: 'Action RPG, dark fantasy та авторські бойові системи' },
  { name: 'CD Projekt Red', focus: 'Сюжетні RPG, відкриті світи та сильний worldbuilding' },
  { name: 'Larian Studios', focus: 'Партійні RPG та системний підхід до сторітелінгу' },
]

function StudiosPage() {
  return (
    <section className="page">
      <div className="page__intro">
        <span className="page__eyebrow">Студії</span>
        <h1>Досліджуй розробників, які стоять за іграми.</h1>
        <p>
          Ця сторінка додає проєкту глибини: тут є не тільки ігри, а й студії,
          видавці, пов’язані тайтли, а згодом можуть з’явитися ще новини або статті.
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
          <h2>Дані з RAWG</h2>
          <ul className="list-clean">
            <li>Список розробників і видавців.</li>
            <li>Ігри, пов’язані зі студіями.</li>
            <li>Пошук за назвами студій.</li>
          </ul>
        </article>

        <article className="content-card">
          <h2>Можливе розширення пізніше</h2>
          <ul className="list-clean">
            <li>Картки статей або стрічка новин.</li>
            <li>Блок featured-студій на Home.</li>
            <li>Посилання назад у відфільтрований каталог ігор.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default StudiosPage

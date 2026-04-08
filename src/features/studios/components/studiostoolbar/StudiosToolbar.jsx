/* eslint-disable react/prop-types */

import './StudiosToolbar.css'

const sortOptions = [
  { value: 'popular', label: 'Популярні' },
  { value: 'name-asc', label: 'Назва A-Z' },
  { value: 'name-desc', label: 'Назва Z-A' },
]

function StudiosToolbar({ search, setSearch, sort, setSort, onResetFilters }) {
  return (
    <section className="studios-toolbar">
      <div className="studios-toolbar__search">
        <label className="studios-toolbar__label" htmlFor="studios-search">
          Пошук студій
        </label>

        <input
          id="studios-search"
          className="studios-toolbar__input"
          type="text"
          placeholder="Шукати студію..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="studios-toolbar__controls">
        <div className="studios-toolbar__sorts">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`studios-toolbar__sort-button${sort === option.value ? ' studios-toolbar__sort-button--active' : ''}`}
              onClick={() => setSort(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="studios-toolbar__reset"
          onClick={onResetFilters}
        >
          Очистити
        </button>
      </div>
    </section>
  )
}

export default StudiosToolbar

/* eslint-disable react/prop-types */

import { useEffect, useId, useRef, useState } from 'react'
import { genreOptions } from '../../../../data/genreOptions'
import './GamesToolbar.css'

const platformOptions = [
  { label: 'Усі платформи', value: '' },
  { label: 'PC', value: '4' },
  { label: 'PlayStation 5', value: '187' },
  { label: 'PlayStation 4', value: '18' },
  { label: 'Xbox One', value: '1' },
  { label: 'Xbox Series S/X', value: '186' },
  { label: 'Nintendo Switch', value: '7' },
]

const sortOptions = [
  { label: 'Популярні', value: '-added' },
  { label: 'Найновіші', value: '-released' },
  { label: 'Найвищий рейтинг', value: '-rating' },
  { label: 'Назва A-Z', value: 'name' },
]

function ToolbarSelect({ label, value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false)
  const selectId = useId()
  const wrapperRef = useRef(null)

  useEffect(() => {
    function handlePointerDown(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const selectedOption = options.find((option) => option.value === value) ?? options[0]

  return (
    <div className="games-toolbar__field games-toolbar__field--dropdown" ref={wrapperRef}>
      <label className="games-toolbar__label" htmlFor={selectId}>
        {label}
      </label>

      <button
        id={selectId}
        type="button"
        className={`games-toolbar__trigger${isOpen ? ' games-toolbar__trigger--open' : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{selectedOption.label}</span>
        <span className="games-toolbar__chevron" aria-hidden="true">
          <svg viewBox="0 0 20 20">
            <path d="M5 7l5 6 5-6" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="games-toolbar__menu" role="listbox">
          {options.map((option) => (
            <button
              key={option.value || 'all'}
              type="button"
              className={`games-toolbar__option${
                option.value === value ? ' games-toolbar__option--active' : ''
              }`}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function GamesToolbar({
  search,
  setSearch,
  genre,
  setGenre,
  platform,
  setPlatform,
  sort,
  setSort,
  onResetFilters,
}) {
  const genreSelectOptions = [
    { label: 'Усі жанри', value: '' },
    ...genreOptions.map((genreOption) => ({
      label: genreOption.label,
      value: genreOption.slug,
    })),
  ]

  return (
    <section className="games-toolbar">
      <div className="games-toolbar__search">
        <label className="games-toolbar__label" htmlFor="games-search">
          Пошук
        </label>

        <input
          id="games-search"
          className="games-toolbar__input"
          type="text"
          placeholder="Шукати ігри..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="games-toolbar__filters">
        <ToolbarSelect
          label="Жанр"
          value={genre}
          onChange={setGenre}
          options={genreSelectOptions}
        />

        <ToolbarSelect
          label="Платформа"
          value={platform}
          onChange={setPlatform}
          options={platformOptions}
        />

        <ToolbarSelect
          label="Сортування"
          value={sort}
          onChange={setSort}
          options={sortOptions}
        />

        <button
          type="button"
          className="games-toolbar__reset"
          onClick={onResetFilters}
        >
          Очистити
        </button>
      </div>
    </section>
  )
}

export default GamesToolbar

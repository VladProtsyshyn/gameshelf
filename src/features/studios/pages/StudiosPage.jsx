import { useEffect, useState } from 'react'
import ErrorState from '../../../components/ui/errorstate/ErrorState'
import LoadingIndicator from '../../../components/ui/loadingindicator/LoadingIndicator'
import StudiosGrid from '../components/studiosgrid/StudiosGrid'
import StudiosToolbar from '../components/studiostoolbar/StudiosToolbar'
import useStudiosCatalog from '../hooks/useStudiosCatalog'
import './StudiosPage.css'

function StudiosPage() {
  const {
    studios,
    isLoading,
    isLoadingMore,
    error,
    search,
    sort,
    hasMore,
    setSearch,
    setSort,
    loadMore,
    resetFilters,
  } = useStudiosCatalog()

  return (
    <section className="page studios-page">
      <div className="page__intro studios-page__intro">
        <h1>Студії ігор</h1>
        <p>
          Тут зібрані популярні команди розробників із RAWG. Переглядай студії,
          їхню активність у каталозі та ігри, з якими вони найчастіше пов&apos;язані.
        </p>
      </div>

      <StudiosToolbar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        onResetFilters={resetFilters}
      />

      {isLoading && <LoadingIndicator />}
      {error && <ErrorState />}

      {!isLoading && !error && (
        <>
          <StudiosGrid studios={studios} />

          {hasMore && (
            <div className="studios-page__more">
              <button
                type="button"
                className="button-link"
                onClick={loadMore}
                disabled={isLoadingMore}
              >
                {isLoadingMore ? 'Завантаження...' : 'Показати ще'}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  )
}

export default StudiosPage

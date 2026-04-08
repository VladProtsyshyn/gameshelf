import GameCard from '../components/gamecard/GameCard'
import GamesToolbar from '../components/gamestoolbar/GamesToolbar'
import useGamesCatalog from '../hooks/useGamesCatalog'
import LoadingIndicator from '../../../components/ui/loadingindicator/LoadingIndicator'
import ErrorState from '../../../components/ui/errorstate/ErrorState'
import './GamesPage.css'

function GamesPage() {
  const {
    games,
    isLoading,
    isLoadingMore,
    error,
    search,
    genre,
    platform,
    sort,
    hasMore,
    setSearch,
    setGenre,
    setPlatform,
    setSort,
    loadMore,
    resetFilters,
  } = useGamesCatalog()

  return (
    <section className="page games-page">
      <div className="page__intro games-page__intro">
        <h1>Досліди каталог</h1>
      </div>

      <GamesToolbar
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
        platform={platform}
        setPlatform={setPlatform}
        sort={sort}
        setSort={setSort}
        onResetFilters={resetFilters}
      />

      {isLoading && <LoadingIndicator />}
      {error && <ErrorState />}

      {!isLoading && !error && (
        <>
          {games.length > 0 ? (
            <>
              <div className="page-grid page-grid--three">
                {games.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>

              {hasMore && (
                <div className="games-page__more">
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
          ) : (
            <article className="content-card games-page__empty">
              <h3>Нічого не знайдено</h3>
              <p>Спробуй змінити пошук або скинути фільтри, щоб побачити інші ігри.</p>
            </article>
          )}
        </>
      )}
    </section>
  )
}

export default GamesPage

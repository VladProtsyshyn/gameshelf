import GameCard from '../components/gamecard/GameCard'
import GamesToolbar from '../components/gamestoolbar/GamesToolbar'
import useGamesCatalog from '../hooks/useGamesCatalog'
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

      {isLoading && <p>Завантаження ігор...</p>}
      {error && <p>{error}</p>}

      {!isLoading && !error && (
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
      )}
    </section>
  )
}

export default GamesPage

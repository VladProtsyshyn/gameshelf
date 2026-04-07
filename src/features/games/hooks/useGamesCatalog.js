import { useEffect, useState } from 'react'
import { fetchFromRawg } from '../../../services/api/rawgClient'

function useGamesCatalog() {
    const [games, setGames] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [search, setSearchState] = useState('')
    const [genre, setGenreState] = useState('')
    const [platform, setPlatformState] = useState('')
    const [sort, setSortState] = useState('-added')
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [isLoadingMore, setIsLoadingMore] = useState(false)

    useEffect(() => {
        async function loadGames() {
            try {
                if (page === 1) {
                    setIsLoading(true)
                } else {
                    setIsLoadingMore(true)
                }

                setError('')

                const data = await fetchFromRawg('/games', {
                    page_size: 9,
                    page,
                    ...(search ? { search } : {}),
                    ...(genre ? { genres: genre } : {}),
                    ...(platform ? { platforms: platform } : {}),
                    ...(sort ? { ordering: sort } : {}),
                })

                const nextGames = data.results || []

                setGames((prevGames) => (page === 1 ? nextGames : [...prevGames, ...nextGames]))
                setHasMore(Boolean(data.next))
            } catch {
                setError('Не вдалося завантажити ігри.')
            } finally {
                setIsLoading(false)
                setIsLoadingMore(false)
            }
        }

        loadGames()
    }, [search, genre, platform, sort, page])

    const setSearch = (value) => {
        setSearchState(value)
        setPage(1)
    }

    const setGenre = (value) => {
        setGenreState(value)
        setPage(1)
    }

    const setPlatform = (value) => {
        setPlatformState(value)
        setPage(1)
    }

    const setSort = (value) => {
        setSortState(value)
        setPage(1)
    }

    const loadMore = () => {
        setPage((prev) => prev + 1)
    }

    const resetFilters = () => {
        setSearchState('')
        setGenreState('')
        setPlatformState('')
        setSortState('-added')
        setPage(1)
    }

    return {
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
    }
}

export default useGamesCatalog

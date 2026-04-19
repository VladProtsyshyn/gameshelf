import { useEffect, useReducer, useState } from 'react'
import { fetchFromRawg } from '../../../services/api/rawgClient'
import useDebounce from '../../../hooks/useDebounce'

const initialFilters = {
    search: '',
    genre: '',
    platform: '',
    sort: '-added',
    page: 1,
}

function catalogReducer(state, action) {
    switch (action.type) {
        case 'SET_SEARCH':
            return { ...state, search: action.payload, page: 1 }

        case 'SET_GENRE':
            return { ...state, genre: action.payload, page: 1 }

        case 'SET_PLATFORM':
            return { ...state, platform: action.payload, page: 1 }

        case 'SET_SORT':
            return { ...state, sort: action.payload, page: 1 }

        case 'LOAD_MORE':
            return { ...state, page: state.page + 1 }

        case 'RESET_FILTERS':
            return initialFilters

        default:
            return state
    }
}

function useGamesCatalog() {
    const [games, setGames] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [{ search, genre, platform, sort, page }, dispatch] = useReducer(catalogReducer, initialFilters)
    const [hasMore, setHasMore] = useState(true)
    const [isLoadingMore, setIsLoadingMore] = useState(false)

    const debouncedSearch = useDebounce(search, 450)

    useEffect(() => {
        const controller = new AbortController()

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
                    ...(debouncedSearch ? { search: debouncedSearch } : {}),
                    ...(genre ? { genres: genre } : {}),
                    ...(platform ? { platforms: platform } : {}),
                    ...(sort ? { ordering: sort } : {}),
                }, { signal: controller.signal })

                if (controller.signal.aborted) return

                const nextGames = data.results || []

                setGames((prevGames) => (page === 1 ? nextGames : [...prevGames, ...nextGames]))
                setHasMore(Boolean(data.next))
            } catch (error) {
                if (error.name === 'AbortError') return
                setError('Не вдалося завантажити ігри.')
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false)
                    setIsLoadingMore(false)
                }
            }
        }
        loadGames()

        return () => controller.abort()
    }, [debouncedSearch, genre, platform, sort, page])

    const setSearch = (value) => {
        dispatch({ type: 'SET_SEARCH', payload: value })
    }

    const setGenre = (value) => {
        dispatch({ type: 'SET_GENRE', payload: value })
    }

    const setPlatform = (value) => {
        dispatch({ type: 'SET_PLATFORM', payload: value })
    }

    const setSort = (value) => {
        dispatch({ type: 'SET_SORT', payload: value })
    }

    const loadMore = () => {
        dispatch({ type: 'LOAD_MORE' })
    }

    const resetFilters = () => {
        dispatch({ type: 'RESET_FILTERS' })
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

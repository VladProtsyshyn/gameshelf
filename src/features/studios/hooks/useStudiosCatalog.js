import { useEffect, useMemo, useReducer, useState } from 'react'
import { fetchFromRawg } from '../../../services/api/rawgClient'
import useDebounce from '../../../hooks/useDebounce'

const PAGE_SIZE = 9

const initialFilters = {
  search: '',
  sort: 'popular',
  page: 1,
}

function studiosReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, search: action.payload, page: 1 }

    case 'SET_SORT':
      return { ...state, sort: action.payload }

    case 'LOAD_MORE':
      return { ...state, page: state.page + 1 }

    case 'RESET_FILTERS':
      return initialFilters

    default:
      return state
  }
}

function sortStudios(studios, sort) {
  const nextStudios = [...studios]

  switch (sort) {
    case 'name-asc':
      return nextStudios.sort((a, b) => a.name.localeCompare(b.name, 'uk'))
    case 'name-desc':
      return nextStudios.sort((a, b) => b.name.localeCompare(a.name, 'uk'))
    case 'popular':
    default:
      return nextStudios.sort((a, b) => (b.games_count ?? 0) - (a.games_count ?? 0))
  }
}

function useStudiosCatalog() {
  const [rawStudios, setRawStudios] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [error, setError] = useState('')
  const [{ search, sort, page }, dispatch] = useReducer(studiosReducer, initialFilters)
  const [hasMore, setHasMore] = useState(true)

  const debouncedSearch = useDebounce(search, 450)

  useEffect(() => {
    const controller = new AbortController()

    async function loadStudios() {
      try {
        if (page === 1) {
          setIsLoading(true)
        } else {
          setIsLoadingMore(true)
        }

        setError('')

        const data = await fetchFromRawg('/developers', {
          page_size: PAGE_SIZE,
          page,
          ...(debouncedSearch ? { search: debouncedSearch } : {}),
        }, { signal: controller.signal })

        if (controller.signal.aborted) return

        const nextStudios = data.results || []

        setRawStudios((prevStudios) => {
          if (page === 1) {
            return nextStudios
          }

          const existingIds = new Set(prevStudios.map((studio) => studio.id))
          const uniqueStudios = nextStudios.filter((studio) => !existingIds.has(studio.id))
          return [...prevStudios, ...uniqueStudios]
        })
        setHasMore(Boolean(data.next))
      } catch (error) {
        if (error.name === 'AbortError') return
        setError('Не вдалося завантажити студії.')
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
          setIsLoadingMore(false)
        }
      }
    }
    loadStudios()

    return () => controller.abort()
  }, [page, debouncedSearch])

  const studios = useMemo(() => sortStudios(rawStudios, sort), [rawStudios, sort])

  const setSearch = (value) => {
    dispatch({ type: 'SET_SEARCH', payload: value })
  }

  const setSort = (value) => {
    dispatch({ type: 'SET_SORT', payload: value })
  }

  const loadMore = () => {
    if (isLoadingMore || !hasMore) return
    dispatch({ type: 'LOAD_MORE' })
  }

  const resetFilters = () => {
    dispatch({ type: 'RESET_FILTERS' })
  }

  return {
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
  }
}

export default useStudiosCatalog

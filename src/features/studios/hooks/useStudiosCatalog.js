import { useEffect, useMemo, useState } from 'react'
import { fetchFromRawg } from '../../../services/api/rawgClient'

const PAGE_SIZE = 9

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
  const [search, setSearchState] = useState('')
  const [sort, setSortState] = useState('popular')
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
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
          ...(search ? { search } : {}),
        })

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
      } catch {
        setError('Не вдалося завантажити студії.')
      } finally {
        setIsLoading(false)
        setIsLoadingMore(false)
      }
    }

    loadStudios()
  }, [page, search])

  const studios = useMemo(() => sortStudios(rawStudios, sort), [rawStudios, sort])

  const setSearch = (value) => {
    setSearchState(value)
    setPage(1)
  }

  const setSort = (value) => {
    setSortState(value)
  }

  const loadMore = () => {
    if (isLoadingMore || !hasMore) return
    setPage((prevPage) => prevPage + 1)
  }

  const resetFilters = () => {
    setSearchState('')
    setSortState('popular')
    setPage(1)
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

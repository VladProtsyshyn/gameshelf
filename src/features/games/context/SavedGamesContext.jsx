/* eslint-disable react/prop-types */

import { useCallback, useEffect, useMemo, useState } from 'react'
import { SavedGamesContext } from './savedGamesStore'

const STORAGE_KEY = 'gameshelf:saved-games'

function getInitialSavedGames() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function SavedGamesProvider({ children }) {
  const [savedGames, setSavedGames] = useState(getInitialSavedGames)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedGames))
  }, [savedGames])

  const savedIds = useMemo(
    () => new Set(savedGames.map((game) => game.id)),
    [savedGames]
  )

  const isSaved = useCallback((gameId) => savedIds.has(gameId), [savedIds])

  const toggleSavedGame = useCallback((game) => {
    setSavedGames((prevGames) => {
      const exists = prevGames.some((savedGame) => savedGame.id === game.id)

      if (exists) {
        return prevGames.filter((savedGame) => savedGame.id !== game.id)
      }

      return [
        {
          id: game.id,
          slug: game.slug,
          name: game.name,
          background_image: game.background_image,
          released: game.released,
          genres: game.genres || [],
        },
        ...prevGames,
      ]
    })
  }, [])

  const value = useMemo(
    () => ({
      savedGames,
      isSaved,
      toggleSavedGame,
    }),
    [savedGames, isSaved, toggleSavedGame]
  )

  return (
    <SavedGamesContext.Provider value={value}>
      {children}
    </SavedGamesContext.Provider>
  )
}

export default SavedGamesProvider

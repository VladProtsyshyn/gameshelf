import { useContext } from 'react'
import { SavedGamesContext } from '../context/savedGamesStore'

function useSavedGames() {
    const context = useContext(SavedGamesContext)

    if (!context) {
        throw new Error('useSavedGames must be used within SavedGamesProvider')
    }

    return context
}

export default useSavedGames

import HomePage from '../../features/home/pages/HomePage'
import GamesPage from '../../features/games/pages/GamesPage'
import GameDetailsPage from '../../features/games/pages/GameDetailsPage'
import LibraryPage from '../../features/library/pages/LibraryPage'
import StudiosPage from '../../features/studios/pages/StudiosPage'

export const appRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/games',
    element: <GamesPage />,
  },
  {
    path: '/games/:slug',
    element: <GameDetailsPage />,
  },
  {
    path: '/library',
    element: <LibraryPage />,
  },
  {
    path: '/studios',
    element: <StudiosPage />,
  },
]

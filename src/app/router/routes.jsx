import { lazy } from 'react'

const HomePage = lazy(() => import('../../features/home/pages/HomePage'))
const GamesPage = lazy(() => import('../../features/games/pages/GamesPage'))
const GameDetailsPage = lazy(() => import('../../features/games/pages/GameDetailsPage'))
const LibraryPage = lazy(() => import('../../features/library/pages/LibraryPage'))
const StudiosPage = lazy(() => import('../../features/studios/pages/StudiosPage'))

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

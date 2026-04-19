import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import AppLayout from '../components/layout/applayout/AppLayout'
import { appRoutes } from './router/routes'
import NotFoundPage from '../pages/NotFoundPage'
import LoadingIndicator from '../components/ui/loadingindicator/LoadingIndicator'

function AppRouter() {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Routes>
        <Route element={<AppLayout />}>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRouter

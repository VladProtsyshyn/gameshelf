import { Route, Routes } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import { appRoutes } from './router/routes'
import NotFoundPage from '../pages/NotFoundPage'

function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter

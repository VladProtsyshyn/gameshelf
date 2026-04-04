import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function AppLayout() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-shell">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout

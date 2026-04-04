import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'

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

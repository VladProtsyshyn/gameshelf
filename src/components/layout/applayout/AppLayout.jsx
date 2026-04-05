import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'

function AppLayout() {
  return (
    <div className="app-shell">
      <div className="aurora-bg" aria-hidden="true">
        <span className="aurora-bg__layer aurora-bg__layer--one" />
        <span className="aurora-bg__layer aurora-bg__layer--two" />
        <span className="aurora-bg__layer aurora-bg__layer--three" />
      </div>

      <Header />
      <main className="page-shell">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout

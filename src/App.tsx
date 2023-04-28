import Header from './shared/Header'
import Footer from './shared/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <main className="container-fluid box">
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App

// Imports
import Header from './shared/Header'
import Footer from './shared/Footer'
import { Outlet } from 'react-router-dom'
import GlobalStyle from './styles/global'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/usePersistedState'

// Themes
import light from './styles/themes/light'
import dark from './styles/themes/dark'

// App - Component
function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    
      <main className="container-fluid m-0 p-0">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme}/>
          <Outlet />
          <Footer />
        </ThemeProvider>
      </main>
      
  )
}

export default App

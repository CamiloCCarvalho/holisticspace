// Imports
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'

// Style
import {ContainerHeader, Nav, Ul} from './style'

interface Props {
  toggleTheme(): void
}

// Header - Component
const Header:React.FC<Props> = ({toggleTheme}) => {

    const {colors, title} = useContext(ThemeContext)

  return (
    <>
    <ContainerHeader>
        <Nav className="navbar navbar-expand-lg ">
            <Ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contat</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
            </Ul>
            <Switch 
              className="#"
              onChange={toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={12}
              width={36}
              handleDiameter={16}
              onColor={colors.secundary}
              offColor={'#a1a1a1'}
              onHandleColor={'#f5f5f5'}
            />
        </Nav>
    </ContainerHeader>
    </>
  )
}

export default Header
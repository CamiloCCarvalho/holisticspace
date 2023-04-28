const Header:React.FC = () => {
  
  return (
    <>
    <header>
        <nav className="navbar header">
            <button className="btn-nav-item">
              <a href="/">
                Espaço Holistico
              </a>
            </button>
            <button className="btn-nav-item">
              Inicio
            </button>
            <button className="btn-nav-item">
              <a href="/sobre">
                Sobre
              </a>
            </button>
            <button className="btn-nav-item">
              Contato
            </button>
        </nav>
    </header>
    </>
  )
}

export default Header
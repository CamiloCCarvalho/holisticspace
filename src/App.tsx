import './app.css'

function App() {
  
  return (
    <main className="container-fluid box">
      <nav className="navbar header">
          <a className="navbar-brand" href="#">
            Espaço Holistico
          </a>
          <a className="navbar-brand" href="#">
            Inicio
          </a>
          <a className="navbar-brand" href="#">
            Sobre
          </a>
          <a className="navbar-brand" href="#">
            Contato
          </a>
      </nav>

      <div className="normalCard">
        <h2 className="container-fluid m-5">Massagem</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt nulla similique, natus placeat nobis harum cum, quisquam cumque quaerat asperiores voluptate nisi mollitia odio. Cumque dolorem itaque illo vero.</p>
      </div>
      <div className="hightlightCard">
        <h2 className="container-fluid m-5">Nossos Serviços</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt nulla similique, natus placeat nobis harum cum, quisquam cumque quaerat asperiores voluptate nisi mollitia odio. Cumque dolorem itaque illo vero.</p>
      </div>

      <div className="normalCard">
        <h2 className="container-fluid m-5">Mais Sobre</h2>
        <img className="images"src="/massageImage.webp" alt="Imagem" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt nulla similique, natus placeat nobis harum cum, quisquam cumque quaerat asperiores voluptate nisi mollitia odio. Cumque dolorem itaque illo vero.</p>
      </div>
      <div className="hightlightCard img">
        <h2 className="container-fluid m-5">Ilustração</h2>
        <img className="images"src="/massageImage.webp" alt="Imagem" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt nulla similique, natus placeat nobis harum cum, quisquam cumque quaerat asperiores voluptate nisi mollitia odio. Cumque dolorem itaque illo vero.</p>
      </div>
      <div className="hightlightCard img color">
        <h2 className="container-fluid m-5">Ilustração</h2>
        <img className="images"src="/massageImage.webp" alt="Imagem" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt nulla similique, natus placeat nobis harum cum, quisquam cumque quaerat asperiores voluptate nisi mollitia odio. Cumque dolorem itaque illo vero.</p>
      </div>
      <footer className="footer">
        <h2 >Rodapé</h2>
      </footer>
    </main>
  )
}

export default App

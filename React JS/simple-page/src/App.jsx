import './App.css';

function App() {
  return (
    <nav class="menu">

        <a className="menu__item">Home</a>
        <a className="menu__item">Cadastrar</a>
        <a className="menu__item">Quem Somos?</a>
        <a className="menu__item menu__item--button-default">Contato</a>
        <a className="menu__item menu__item--button-success">Entrar</a>

        <div className="card-perfil">
        <img className="card-perfil__image" src="./public/foto-perfil.png" alt="foto de perfil do usuário" />
        </div>

    </nav>
    )};
export default App;
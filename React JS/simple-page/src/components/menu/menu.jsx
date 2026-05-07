import './menu.css';
import CardPerfil from '../card-perfil/card-perfil';

function Menu() {
  return (
    <nav class="menu">

        <a className="menu__item">Home</a>
        <a className="menu__item">Cadastrar</a>
        <a className="menu__item">Quem Somos?</a>
        <a className="menu__item menu__item--button-default">Contato</a>
        <a className="menu__item menu__item--button-success">Entrar</a>

        <CardPerfil />

    </nav>
    )};
export default Menu;
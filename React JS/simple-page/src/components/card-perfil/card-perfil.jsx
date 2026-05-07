import './card-perfil.css';
import nomeImagem from '../../assets/foto-perfil.png';

function CardPerfil() {
  return (
        <div className="card-perfil">
        <img className="card-perfil__image" src={nomeImagem} alt="foto de perfil do usuário" />
        </div>
    )};
export default CardPerfil;
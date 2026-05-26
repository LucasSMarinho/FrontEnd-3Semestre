import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg"
import Botao from "../botao/Botao";
import ImagemSol from "../../assets/img/Sun.svg"
import ImagemLua from "../../assets/img/Moon.svg"


const Header = (props) => {


    return (
        <header>
            <div className="layout_grid cabecalho">
                {/* Ao clicar no link, redireciona para a tela login */}
                <Link to="/">
                    <img src={Logo} alt="Logo do Filmoteca" />
                </Link>

                <nav className="nav_header">
                    <Link className="link_header" to="/Filmes">Filme</Link>
                    <Link className="link_header" to="/Generos">Gênero</Link>
                    <button type="button" onClick={props.funcTema}> {(props.imagemTema) == "Sol" ? (<img src={ImagemSol}></img>) : (<img src={ImagemLua}></img>)} </button>
                </nav>      
            </div>
        </header>
    )
}

export default Header;
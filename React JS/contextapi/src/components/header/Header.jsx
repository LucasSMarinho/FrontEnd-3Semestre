import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

export default function Header() {
  const {usuario} = useContext(UsuarioContext)
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/produtos">Produtos</Link>
      </nav>
      <h2>Bem Vindo, {usuario}</h2>
    </header>
  );
}
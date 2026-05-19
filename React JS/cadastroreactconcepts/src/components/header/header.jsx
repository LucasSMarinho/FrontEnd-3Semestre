import "./header.css"
import { Link } from "react-router-dom"
import React from "react"
import { useContext } from "react"

export function Header(){
  return (
    <header className="header">
      <nav>
      <Link className="nav-link" to="/">Home</Link> {" | | "}
      <Link className="nav-link" to="/quemsomos">Quem Somos</Link> {" | | "}
      <Link className="nav-link" to="/cadfrutas">Cadastro de Frutas</Link> {" | | "}
      <Link className="nav-link" to="/produtos">Produtos</Link> {" | | "}
      <Link className="nav-link" to="/atualizarprodutos">Atualizar Produtos</Link>
      </nav>

      <section className="secao-produtos">
      </section>
    </header>
  )
}
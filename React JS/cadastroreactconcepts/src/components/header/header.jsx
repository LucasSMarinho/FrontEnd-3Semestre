import "./header.css"
import { Link } from "react-router-dom"
import React from "react"
import { useContext } from "react"

export function Header(){
  return (
    <header className="header">
        <nav>
      <Link to="/">Home</Link> {" | | "}
      <Link to="/quemsomos">Quem Somos</Link> {" | | "}
      <Link to="/cadfrutas">Cadastro de Frutas</Link>
      </nav>
    </header>
  )
}
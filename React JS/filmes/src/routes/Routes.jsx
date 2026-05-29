//instalar pacote das react-router-dom

import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Login from "../pages/login/login"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"


export const Rotas = (props) => {
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Login tema={props.tema} funcTrocarTema={props.funcTrocarTema} valorImg={props.valorImg}/>} path="/"/>
            <Route element={<CadastroFilme tema={props.tema} funcTrocarTema={props.funcTrocarTema} valorImg={props.valorImg}/>} path="/filmes"/>
            <Route element={<CadastroGenero tema={props.tema} funcTrocarTema={props.funcTrocarTema} valorImg={props.valorImg}/>} path="/generos"/>
        </Routes>
        </BrowserRouter>
    )
}
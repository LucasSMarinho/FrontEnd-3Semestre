//instalar pacote das react-router-dom

import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Login from "../pages/login/login"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"
import PrivateRoute from "./PrivateRoute"


export const Rotas = (props) => {

    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Login tema={props.tema} funcTrocarTema={props.funcTrocarTema} valorImg={props.valorImg}/>} path="/"/>

            <Route element={<PrivateRoute isAuthenticated={props.isAuthenticated}><CadastroFilme tema={props.tema} funcTrocarTema={props.funcTrocarTema} valorImg={props.valorImg}/></PrivateRoute>} path="/filmes"/>

            <Route element={<PrivateRoute isAuthenticated={props.isAuthenticated}><CadastroGenero tema={props.tema} funcTrocarTema={props.funcTrocarTema} valorImg={props.valorImg}/></PrivateRoute>} path="/generos"/>
        </Routes>
        </BrowserRouter>
    )
}
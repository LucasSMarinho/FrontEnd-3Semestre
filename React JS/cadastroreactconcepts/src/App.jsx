import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route,  Routes} from 'react-router-dom'
import { Contador } from './components/contador/contador'
import { CadFruta } from './components/cadfruta/cadfruta'
import { Header } from './components/header/header'
import HomePage from './pages/home/home'
import QuemSomosPage from './pages/quemsomos/quemsomos'
import CadastroFrutasPage from './pages/cadastrofrutas/cadastrofrutas'
import ProdutosPage from './pages/produtos/produtos'
import AtualizarProdutosPage from './pages/atualizarprodutos/atualizarprodutos'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route element={<HomePage />} path="/"/>
      <Route element={<QuemSomosPage />} path="/quemsomos"/>
      <Route element={<CadastroFrutasPage />} path="/cadfrutas"/>
      <Route element={<ProdutosPage />} path="/produtos"/>
      <Route element={<AtualizarProdutosPage />} path="/atualizarprodutos"/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

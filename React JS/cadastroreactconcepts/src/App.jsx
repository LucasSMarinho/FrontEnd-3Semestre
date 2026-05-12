import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route,  Routes} from 'react-router-dom'
import HomePage from './pages/home/home'
import CadFruta from './components/cadfruta/cadfruta'
import QuemSomosPage from './pages/quemsomos/quemsomos'
import CadastroFrutasPage from './pages/cadastrofrutas/cadastrofrutas'
import Header from './components/header/header'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route element={<HomePage />} path="/"/>
      <Route element={<QuemSomosPage />} path="/quemsomos"/>
      <Route element={<CadastroFrutasPage />} path="/cadfrutas"/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

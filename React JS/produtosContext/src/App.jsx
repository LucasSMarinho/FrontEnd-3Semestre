import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CadastroProduto from './components/cadastroProduto/CadatroProduto'
import ListaProduto from './components/listaProduto/ListaProduto'

function App() {

  return (
    <>
      <CadastroProduto />
      <ListaProduto />
    </>
  )
}

export default App

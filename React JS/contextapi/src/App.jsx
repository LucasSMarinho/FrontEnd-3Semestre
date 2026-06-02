import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Perfil from './components/perfil/Perfil'
import Home from './components/home/Home'
import Produtos from './components/produto/Produto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/produtos' element={<Produtos />} /> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

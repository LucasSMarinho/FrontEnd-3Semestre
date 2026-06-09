import { useState } from 'react'
import './App.css'
import Login from './pages/login/login'
import CadastroFilme from './pages/cadastroFilme/CadastroFilme'
import CadastroGenero from './pages/cadastroGenero/CadastroGenero'
import { Rotas } from './routes/Routes'
import Header from './components/header/Header'
import { useContext } from 'react'
import { TemaContext } from './context/TemaContext'
import { UsuarioContext } from './context/UsuarioContext'

function App() {  
  
  const {tema, trocarTema, valorImg} = useContext(TemaContext)
  const {token, setToken, usuario, setUsuario} = useContext(UsuarioContext)

  return (
    <main className={tema}>
      <Rotas isAuthenticated={!!token} tema={tema} funcTrocarTema={trocarTema} valorImg={valorImg}/>
    </main>
  )
}

export default App

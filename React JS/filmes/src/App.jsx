import { useState } from 'react'
import './App.css'
import Login from './pages/login/login'
import CadastroFilme from './pages/cadastroFilme/CadastroFilme'
import CadastroGenero from './pages/cadastroGenero/CadastroGenero'
import { Rotas } from './routes/Routes'
import Header from './components/header/Header'

function App() {
  
  const [tema, setTema] = useState("Light")
  const [valorImg, setValorImg] = useState("Sol")

  //função de trocar o tema
  const trocarTema = () => {
    if (tema === "Light") {
      setValorImg("Lua")
      setTema("Dark")
    }
    else {
      setValorImg("Sol")
      setTema("Light")
    }
  }

  return (
    <main className={tema}>
      <Rotas tema={tema} funcTrocarTema={trocarTema} valorImg={valorImg}/>
    </main>
  )
}

export default App

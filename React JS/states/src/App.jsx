import { use, useState } from 'react'
import Contador from './components/contador/contador'
import './App.css'
import CadFruta from './components/cadFruta/cadFruta'
import CicloDeVida from './components/ciclodevida/ciclodevida'

function App() {
  const [nome, setNome] = useState("Google")


  function trocarNome() {
    setNome("Microsoft")
  }

  function fuiAbandonado() {
    setNome("Você saiu do input")
  }

  const [monstro, setMonstro] = useState(true) //controla se o componente será exibido ou não

  return (
    // <>
    // <h1>{nome}</h1>
    // <button onClick={trocarNome}>Mudar texto</button>
    // <button onClick={() => {return setNome("Google")}}>Resetar texto</button>


    // <br />
    // {/* evento - evento disparado: change */}
    // {/* target - quem disparou o evento */}
    // {/* value - valor do input que disparou o evento */}
    // <input type="text" onBlur={fuiAbandonado} onChange={(event) => setNome(event.target.value)} />


    // <Contador />
    // <br />

    // <p>Lorem, ipsum <strong>{nome}</strong> Incidunt dignissimos dicta, blanditiis quisquam</p>

    // <br />
    // <CadFruta />
    <>
    <button onClick={() => setMonstro(!monstro)}> On / Off </button>
    {monstro && <CicloDeVida />}
    </>


  )
}

export default App
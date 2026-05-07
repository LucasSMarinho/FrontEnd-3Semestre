import { useState } from 'react'
import './App.css'
import Contador from './components/contador/contador'

function App() {
  const [nome, setNome] = useState("Google")

  function trocarNome() {
    setNome("Microsoft")
  }

  function fuiAbandonado() {
    setNome("Você saiu do input")
  }

  return (
    <>
    <h1>{nome}</h1>
    <button onClick={trocarNome}>Mudar texto</button>
    <button onClick={() => {return setNome("Google")}}>Resetar texto</button>


    <br />
    {/* evento - evento disparado: change */}
    {/* target - quem disparou o evento */}
    {/* value - valor do input que disparou o evento */}
    <input type="text" onBlur={fuiAbandonado} onChange={(event) => setNome(event.target.value)} />


    <Contador />
    </>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Paragrafo from './components/paragrafo/paragrafo'
import Titulo from './components/titulo/titulo'



function App() {  
  return (
    <div>
      <Titulo title="Bem Vindo!!" nome="Lucas" sobrenome="Souza" /> 
      <Paragrafo paragrafo="Este é um parágrafo de exemplo." />
      <br></br>
    </div>
  )
}

export default App
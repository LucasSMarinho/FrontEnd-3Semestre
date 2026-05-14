import './contador.css'
import { useState } from 'react'



export function Contador() {
 const [valor, setValor] = useState(0)
 
  function checarContador(valor) {
    if (valor > -1 && valor < 11) {
      setValor(valor)
    }
    else
    {
      setValor(0)
    }
  }
  return (
    <>
      <h1>Contador</h1>
    <div className="contador">
      <button onClick={() => {return setValor(valor+1), checarContador(valor+1)}}>+</button>
      <p>{valor}</p>
      <button onClick={() => {return setValor(valor-1), checarContador(valor-1)}}>-</button>
    </div>
    </>
  )
}

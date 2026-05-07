import './contador.css'
import { useState } from 'react'


function Contador() {
 const [contador, setContador] = useState(0)
  return (
    <div className="contador">
      <h1>Contador</h1>
      <p>{contador}</p>
      <button onClick={() => {return setContador(contador+1)}}>+</button>
      <button onClick={() => {return setContador(contador-1)}}>-</button>
    </div>
  )
}

export default Contador
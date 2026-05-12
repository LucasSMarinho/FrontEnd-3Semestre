import { useEffect, useState } from "react";
import "./ciclodevida.css"



export function CicloDeVida() {
    const [contador, setContador] = useState(0)

    useEffect(() => {
      //quando o componente é montado
      console.log("Componente MONTADO")

      return () => {
        console.log("Componente DESMONTADO")
      }
    }, [])

    useEffect(() => {
      //quando o componente é atualizado
      return () => {
        console.log("Componente ATUALIZADO")
        console.log("Contador: ", contador)
      }
    }, [contador])

        return (
            <>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Contar</button>
            </>
        )
}
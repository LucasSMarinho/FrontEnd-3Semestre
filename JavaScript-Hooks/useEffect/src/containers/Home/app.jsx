import { useState, useEffect } from 'react'

// Side effect - Normalmente acontece com uma mudança de estado

export default function App() {
    const [Contagem, setContagem] = useState(0)

    useEffect(() => {
        if (Contagem === 10) {
            alert('Contagem chegou a 10!')
        }

    }, [Contagem]) 

    /*Oque está dentro do colchetes será monitorado, 
    ou seja, toda vez que o valor de Contagem mudar, a função dentro do useEffect será executada*/

    return (
        <>
            <div>
                <button class="button" onClick={() => setContagem(Contagem + 1)}>Contar</button>
                <p>conte até 10</p>
            </div>
            <h1>{Contagem}</h1>
        </>
    )
}
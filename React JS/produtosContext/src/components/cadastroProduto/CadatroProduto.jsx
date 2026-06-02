import { useState } from 'react'
import { useContext } from "react";
import { ProdutosContext } from "../../context/ProdutosContext";

function CadastroProduto() {
  
    const { produto, setProduto } = useContext(ProdutosContext)
    const [ preco, setPreco ] = useState(0)

    const funcGet = async() => {
        try {
            const response = await fetch("http://localhost:3000/produtos")
            const data = await response.json()
            setListaProduto(data)

        }
        catch (error) {
            console.log(error)
        }
    }

    function funcPost() {

        const objetoP = {
            nome: produto,
            preco: preco
        }

        fetch("http://localhost:3000/produtos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objetoP)
        })
        
        funcGet()

    }

  return (
    <>
            <h1>Cadastro de Produto</h1>
            <label htmlFor="nome">Nome do Produto</label>
            <input id="nome" type="text" onChange={(e) => setProduto(e.target.value)} />
            <label htmlFor="preco">Preço</label>
            <input id="preco" type="text" onChange={(e) => setPreco(parseFloat(e.target.value))} />


            <button onClick={funcPost}>Cadastrar</button>
    </>
  )
}

export default CadastroProduto

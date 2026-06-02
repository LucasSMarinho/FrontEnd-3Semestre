import { useContext, useEffect } from "react";
import { ProdutosContext } from "../../context/ProdutosContext";

const ListaProduto = () => {

    const { produto, setProduto, listaProduto, setListaProduto} = useContext(ProdutosContext)

    useEffect(() => {
        funcGet()
    }, [listaProduto])

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

    return (
        <>
            {listaProduto.map((item) => (
                <>
                <p>produto: {item.nome}</p>
                <p>produto: {item.preco.toFixed(2)}</p>
                <br />
                </>
            ))}
        </>
    )
}

export default ListaProduto
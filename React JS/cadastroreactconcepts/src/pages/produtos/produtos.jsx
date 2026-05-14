import "./produtos.css"
import { useEffect, useState } from "react"

export default function ProdutosPage() {


    const [produto, setProduto] = useState("")
    const [descricao, setDescricao] = useState("")
    const [imagem, setImagem] = useState("")
    const [preco, setPreco] = useState(0)
    const [arrayProduto, setArrayProduto] = useState([])


    async function getDados() {
        try {
            const retornoAPI = await fetch("http://localhost:3000/produtos")
            const dados = await retornoAPI.json()

            setArrayProduto(dados)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDados()
    }, [])

    const Cadastrar = async (e) => {

        e.preventDefault()

        if (descricao === "" || produto === "" || preco < 0 || isNaN(preco) || imagem === "") {
            alert("Preencha todos os campos corretamente")
            return
        }

        const ObjetoProduto = {
            descricao: descricao,
            produto: produto,
            preco: preco,
            imagem: imagem
        }

        const retornoAPI = await fetch("http://localhost:3000/produtos", {
            method: "POST",
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            body: JSON.stringify(ObjetoProduto)
        })

        const produtoCadastrado = await retornoAPI.json()
        setArrayProduto([...arrayProduto, produtoCadastrado])
        limparCampos()



        return false;
    }


    const Deletar = async (e) => {

        try {
            const retornoAPI = await fetch(`http://localhost:3000/produtos/${e}`, {
                method: "Delete",
            })
        }
        catch (erro) {
            console.log(erro)
        }

        getDados()
    }

    function limparCampos() {
        setProduto("")
    }

    return (
        <>
            <h1>Cadastro</h1>

            <form action="" method="post" onSubmit={Cadastrar} className="secao-cadastro">
                <fieldset className="cadastro">
                    <div>
                        <label htmlFor="produto">Nome:</label>
                        <input

                            type="text"
                            id="produto"
                            className="cadastro__entrada"
                            onChange={(e) => setProduto(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="descricao">Descricao:</label>
                        <input
                            type="text"
                            id="descricao"
                            className="cadastro__entrada"
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="preco">Preco:</label>
                        <input
                            type="text"
                            id="preco"
                            className="cadastro__entrada"
                            onChange={(e) => setPreco(parseFloat(e.target.value))}
                        />
                    </div>

                    <div>
                        <label htmlFor="imagem">Imagem:</label>
                        <input
                            type="text"
                            id="imagem"
                            className="cadastro__entrada"
                            onChange={(e) => setImagem(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="cadastro__btn-cadastrar">Cadastrar</button>
                </fieldset>

                <section className="secao-produtos">
                    {arrayProduto.map((p) => {
                        return (
                            <figure key={p.id} className="card-produto">
                                <img
                                    src={`/public/imagens/${p.imagem}.jpg`}
                                    alt={p.nome}
                                    width="150"
                                />
                                <p><strong>{p.nome}</strong></p>
                                <p>Preço:{parseFloat(p.preco).toFixed(2)}</p>
                                <p>Descrição:</p>
                                <p>{p.descricao}</p>

                                <button onClick={() => { Deletar(p.id) }} type="button" className="cadastro__btn-cadastrar">Deletar</button>
                            </figure>
                        )
                    })}
                </section>


            </form>
        </>

    )
}
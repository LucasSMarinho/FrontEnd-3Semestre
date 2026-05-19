import "./produtos.css"
import api from "../../Services/services"
import { useEffect, useState } from "react"

export default function ProdutosPage() {


    const [produto, setProduto] = useState("")
    const [descricao, setDescricao] = useState("")
    const [imagem, setImagem] = useState("")
    const [preco, setPreco] = useState(0)
    const [arrayProduto, setArrayProduto] = useState([])


    async function getDados() {
        try {
            const retornoAPI = await api.get("/produtos")
            const dados = await retornoAPI.data

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

        const objetoProduto ={
            descricao: descricao,
            produto: produto,
            preco: preco,
            imagem: imagem
        }

        const retornoAPI = await api.post("/produtos", objetoProduto)

        const produtoCadastrado = await retornoAPI.data
        setArrayProduto([...arrayProduto, produtoCadastrado])
        limparCampos()



        return false;
    }


    const Deletar = async (e) => {

        if( !confirm("Você realmente quer apagar o produto?"))
            return false

        try {
            const retornoAPI = await api.delete(`/produtos/${e}`)
            alert("produto deletado com sucesso")
        }
        catch (erro) {
            console.log(erro)
        }

        getDados()
    }

    function limparCampos() {
        setProduto("")
        setDescricao("")
        setImagem("")
        setPreco(0)
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
                            value={produto}
                            className="cadastro__entrada"
                            onChange={(e) => setProduto(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="descricao">Descricao:</label>
                        <input
                            type="text"
                            id="descricao"
                            value={descricao}
                            className="cadastro__entrada"
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="preco">Preco:</label>
                        <input
                            type="text"
                            id="preco"
                            value={isNaN(preco) ? 0 : preco}
                            className="cadastro__entrada"
                            onChange={(e) => setPreco(parseFloat(e.target.value))}
                        />
                    </div>

                    <div>
                        <label htmlFor="imagem">Imagem:</label>
                        <input
                            type="text"
                            id="imagem"
                            value={imagem}
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
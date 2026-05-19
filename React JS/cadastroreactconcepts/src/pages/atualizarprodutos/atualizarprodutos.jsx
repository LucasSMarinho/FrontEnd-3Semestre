import "./atualizarprodutos.css"
import api from "../../Services/services"
import { useEffect, useState } from "react"

export default function AtualizarProdutosPage() {


    const [idProduto, setIdProduto] = useState("")
    const [produto, setProduto] = useState("")
    const [descricao, setDescricao] = useState("")
    const [imagem, setImagem] = useState("")
    const [preco, setPreco] = useState(0)
    const [arrayProduto, setArrayProduto] = useState([])


    async function getProdutoPorId(id) {
        try {
            const retornoAPI = await api.get(`/produtos/${idProduto}`)
            const dados = await retornoAPI.data

            // garantir que `arrayProduto` seja um array para uso com .map()
            if (Array.isArray(dados)) {
                setArrayProduto(dados)
            } else if (dados) {
                setArrayProduto([dados])
            } else {
                setArrayProduto([])
            }

            setDescricao(dados?.descricao || "")
            setPreco(dados?.preco || 0)
            setProduto(dados?.produto || "")
            setImagem(dados?.imagem || "")
        }
        catch (error) {
            console.log(error)
        }
    }

    const Atualizar = async(id) => {
        
        const retornoAPI = await api.get(`/produtos/${id}`)
        
        const dados = await retornoAPI.data

        console.log(imagem)
        console.log(dados)

        const ObjetoProduto = {
                    
                }
        
        
            try {
            
            const retornoAPI = await api.put(`/produtos/${id}`,
                {
                    descricao: (descricao == "") ? await dados.descricao : descricao,
                    produto: (produto == "") ? await dados.produto : produto,
                    preco: (isNaN(preco)) ? await dados.preco : preco,
                    imagem: (imagem == "") ? await dados.imagem : imagem
                }
            )
            const dados = await retornoAPI.data

            // garantir que `arrayProduto` seja um array para uso com .map()
            if (Array.isArray(dados)) {
                setArrayProduto(dados)
            } else if (dados) {
                setArrayProduto([dados])
            } else {
                setArrayProduto([])
            }

            setDescricao(dados?.descricao || "")
            setPreco(dados?.preco || 0)
            setProduto(dados?.produto || "")
            setImagem(dados?.imagem || "")
        }
        catch (error) {
            console.log(error)
        }
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

            <form action="" method="get" onSubmit={(e) => { e.preventDefault(); getProdutoPorId(idProduto) }} className="secao-procura">
                <fieldset className="procura">

                    <label htmlFor="identifier">Id:</label>
                    <input

                        type="text"
                        id="identifier"
                        className="procura__entrada"
                        value={idProduto}
                        onChange={(e) => setIdProduto(e.target.value)}
                    />
                    <p>{idProduto}</p>
                    <button type="submit" className="cadastro__btn-procurar">Procurar Produto</button>
                </fieldset>
            </form>
            
            <form action=""  className="secao-atualizar">
                <fieldset className="atualizar">
                    <section>
                    <div>
                        <label htmlFor="produto">Nome:</label>
                        <input

                            type="text"
                            id="produto"
                            value={produto}
                            className="atualizar__entrada"
                            onChange={(e) => setProduto(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="descricao">Descricao:</label>
                        <input
                            type="text"
                            id="descricao"
                            value={descricao}
                            className="atualizar__entrada"
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="preco">Preco:</label>
                        <input
                            type="text"
                            id="preco"
                            value={isNaN(preco) ? 0 : preco}
                            className="atualizar__entrada"
                            onChange={(e) => setPreco(parseFloat(e.target.value))}
                        />
                    </div>

                    <div>
                        <label htmlFor="imagem">Imagem:</label>
                        <input
                            type="text"
                            id="imagem"
                            className="atualizar__entrada"
                            onChange={(e) => setImagem(e.target.value)}
                        />
                    </div>

                    <button type="button" onClick={()=>{Atualizar(idProduto)}} className="cadastro__btn-procurar">Atualizar Produto</button>
                    </section>

                   <section className="secao-produtos">
                    {arrayProduto.map((p) => {
                        return (
                            
                                <img
                                    src={`/public/imagens/${p.imagem}.jpg`}
                                    alt={p.nome}
                                    width="150"
                                ></img>
                
                        )
                    })}
                </section>
                
                </fieldset>


            </form>
        </>

    )
}
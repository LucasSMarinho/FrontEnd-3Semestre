import { useState } from 'react'
import './cadfruta.css'
import imagemFruta from '../../assets/Group.svg'



export function CadFruta() {

    const [fruta, setFruta] = useState("")
    const [quantidade, setQuantidade] = useState(0)
    const [arrayFruta, setArrayFruta] = useState([
        {id: 1, nome: "Maçã", quantidade: 5}, {id: 2, nome: "Melancia", quantidade: 2}
    ])
    
    // arrayFruta = await fetch('http://localhost:3000/frutas')

    function Cadastrar(e) {
        
        e.preventDefault()

            if(fruta === "" || isNaN(quantidade) || quantidade < 0) {
                alert("Preencha todos os campos")
                return
            }
            setArrayFruta([...arrayFruta, {id: Date.now(),nome: fruta, quantidade: quantidade}])
            limparCampos()
            return false;
        }

    function limparCampos() {
        setFruta("")
        setQuantidade(0)
    }
        

    return (
    <>
    <fieldset className="secao-cadastro">
        <img src={imagemFruta} alt="Fruta" className="ImagemFr"/>
        <h1>Cadastro</h1>
        <form method='post' onSubmit={Cadastrar}> 
        <div>
        <label htmlFor="fruta">Digite o nome da fruta:</label>
        <input type="text" id="fruta" 
        className="cadastro__entrada" 
        onChange={(e) => {setFruta(e.target.value)}}
        />
        </div>
        <div>
        <label htmlFor="estoque">Quantidade da fruta no estoque:</label>
        <input type="text" id="estoque" 
        className="cadastro__entrada" 
        onChange={(e) => {setQuantidade(parseInt(e.target.value))}}
        />
        </div>
        <button type="submit" className='cadastro__btn-cadastrar'>Cadastrar</button>
        <br />
        <label>{fruta}</label>
    </form>
    <ul className="listagem">
        {arrayFruta.map((f) => {
            return <li key={f.id}>
                Fruta: {f.nome} | Quantidade: {f.quantidade}
            </li>
        })}
    </ul>
    </fieldset>
    </>
    )
}

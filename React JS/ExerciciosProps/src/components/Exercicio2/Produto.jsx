import './Produto.css';


const Produto = ({ nome, preco, descricao }) => 
{
    return (
        <div className="produto">
            <h3>{nome}</h3>
            <p>Preço: R$ {preco.toFixed(2)}</p>
            <p>Descrição: {descricao}</p>
        </div>
    );
}


export default Produto;
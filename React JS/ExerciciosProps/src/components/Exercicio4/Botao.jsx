import './Botao.css';


const Botao = ({ texto, cor }) => 
{
    return (
        <button className={cor} onClick={setBotaoCor(1)}>
            {texto}
        </button>
    );
}


export default Botao
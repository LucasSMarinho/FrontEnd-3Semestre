import "./Botao.css"

const Botao = (props) => {
    return(

        <button className="botao" type={props.tipoBotao} onClick={ () => props.funcBotao()}> {props.nomeDoBotao} </button>

    )
}

export default Botao;
import "./Login.css"
import Logo from "../../assets/img/logo.svg"
import Botao from "../../components/botao/Botao"
import ImagemSol from "../../assets/img/Sun.svg"
import ImagemLua from "../../assets/img/Moon.svg"

const Login = (props) => {
    return(
        <main className= "main_login">
          <div className={`banner banner--${props.tema}`}></div>
          <section className={`section_login section_login--${props.tema}`}>
            <img src={Logo} alt="Logo do Filmoteca"/>
        <button type="button" onClick={props.funcTrocarTema}> {(props.valorImg) == "Sol" ? (<img src={ImagemSol}></img>) : (<img src={ImagemLua}></img>)} </button>
            <form action="" className="form_login">
                <h1>Login</h1>
                <div className="campos_login">
                    <div className="campo_input">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" placeholder="Digite seu e-mail"/>
                    </div>
                    <div className="campo_input">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="senha" placeholder="Digite sua senha"/>
                    </div>
                </div>
                <Botao nomeDoBotao="Entrar"/>
                
            </form>
          </section>
        </main>
    )
}

export default Login
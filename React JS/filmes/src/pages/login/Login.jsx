import "./Login.css"
import Logo from "../../assets/img/logo.svg"
import Botao from "../../components/botao/Botao"
import ImagemSol from "../../assets/img/Sun.svg"
import ImagemLua from "../../assets/img/Moon.svg"

const Login = (props) => {
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("")
 
    const funcEntrar = async () => {
        console.log("Email:", email);
        console.log("Senha:", senha);

        try
        {   
            objLogin = {
                email: email,
                senha: senha
            }

            const response = await api.post('/Auth/login', objLogin);
        } 
        catch (error) 
        {
            console.error("Erro ao fazer login:", error);
        }
    }

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
                        <input type="email" name="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="campo_input">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="senha" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}                     />
                    </div>
                </div>
                <Botao nomeDoBotao="Cadastrar" funcBotao={props.funcCadastrarUsuario}/>
                <Botao nomeDoBotao="Entrar" funcBotao={props.funcEntrar}/>
                
            </form>
          </section>
        </main>
    )
}

export default Login
import "./Login.css"
import Logo from "../../assets/img/logo.svg"
import Botao from "../../components/botao/Botao"
import ImagemSol from "../../assets/img/Sun.svg"
import ImagemLua from "../../assets/img/Moon.svg"
import api from "../../services/services"
import { useContext } from "react"
import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { UsuarioContext } from "../../context/UsuarioContext"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"  

const Login = (props) => {
    const navigate = useNavigate()
    const [senha, setSenha] = useState()
    const [email, setEmail] = useState()
    const {token,setToken} = useContext(UsuarioContext)
    
const checarToken = (tokenRecebido) => {
     if (!tokenRecebido) {
        return
    }

    console.log(jwtDecode(tokenRecebido));
    console.log(jwtDecode(tokenRecebido).email);
    const decodedToken = jwtDecode(tokenRecebido)

    navigate("/filmes")
    }

    const funcCadastrarUsuario = async () => {
        console.log("Email:", email);
        console.log("Senha:", senha);

        try
        {   
            const objLogin = {
                email: email,
                senha: senha
            }

            const response = await api.post('/Usuario', objLogin);
        } 
        catch (error) 
        {
            console.error("Erro ao fazer login: Tente novamente");
        }
    }


    const funcEntrar = async () => {
        console.log("Email:", email);
        console.log("Senha:", senha);

        try
        {   
            const objLogin = {
                email: email,
                senha: senha
            }

            const response = await api.post('/Login', objLogin);
            const tokenRecebido = response.data.token;
            
            console.log("Token recebido:", tokenRecebido);
            setToken(tokenRecebido);
            localStorage.setItem("token", tokenRecebido);

            checarToken(tokenRecebido)

        } 
        catch (error) 
        {
            console.error("Erro ao fazer login:", error);
        }
    }

    return(
        <main className= "main_login" onLoad={() => checarToken(token)}>
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
                <Botao tipoBotao="button" nomeDoBotao="Cadastrar" funcBotao={() => {funcCadastrarUsuario()}}/>
                <Botao tipoBotao="button" nomeDoBotao="Entrar" funcBotao={() => {funcEntrar()}}/>
                
            </form>
          </section>
        </main>
    )
}

export default Login
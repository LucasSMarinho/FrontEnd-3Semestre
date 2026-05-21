import './CadastroGenero.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Cadastro from '../../components/cadastro/Cadastro'
import { useEffect, useState } from 'react'
import api from '../../services/services'
import Lista from '../../components/lista/Lista'

function CadastroGenero(props) {

  const [valor, setValor] = useState("")
  const [editar, setEditar] = useState(false);
  const [listaGeneros, setListaGeneros] = useState([])

  //Mudar Editar para true ou false

  const funcEditarFalse = (item) => {
      setEditar(false)
    }
  
  const funcEditarTrue = (item) => {
      setEditar(true)
    }


  //GET - UseEffect
  
  useEffect(() => {
    FuncGet()
    
  }, [listaGeneros])

  //GET
  const FuncGet = async () => 
  {
    try{
    const retornoAPI = await api.get('/Genero')
    const dados = await retornoAPI.data
    setListaGeneros(dados)
    }
    catch(error)
    {
      console.log(error);
    }
  }

  // POST
  const funcCadastro = async () => 
  {
    if (valor.trim().length == 0) {
      alert("Gênero deve ser preenchido antes de cadastrar!")
      return false
    }

    const objCadastro = {
      nome: valor
    }

    try {
      const retornoAPI = await api.post("/Genero", objCadastro)
      const dados = await retornoAPI.data

      if (retornoAPI.status == 201) {
        setListaGeneros([...listaGeneros, dados])


        alert("Gênero cadastrado com sucesso!")
        limparFormulario()
      }
      else {
        alert("Houve algum problema ao cadastrar!")
      }

      //chamar o get!
    }
    catch (error) {
      alert("Erro na chamada da API")
      console.log(error)
    }
  }

  //PUT
  const funcEditar = async(item) =>
  {
console.log(item)

    if (valor.trim().length == 0) {
      alert("Gênero deve ser preenchido antes de editar!")
      return false
    }

    try{
    const objCadastro = {
      nome: valor
    }

    const retornoAPI = await api.put(`/Genero/${item.idGenero}`, objCadastro)
    alert("Gênero editado com Sucesso!")
  }
  catch(error)  {
    alert("Falha ao editar item")
    console.log(error)
  }         
  
}


  //DELETE
  const funcExcluir = async(item) =>
  {
    try
    {
    if (!confirm("Deseja realmente deseja excluir esse gênero?")) {
      return;
    }

    const retornoAPI = await api.delete(`/Genero/${item.idGenero}`)
    alert("Genero Apagado com Sucesso!")
    }
    catch(error)
    {
      alert("Falha ao excluir item")
      console.log(error)
    }
  }

  const limparFormulario = () => {
    setValor("")
  }


  return (
    <>
      <Header />
      <Cadastro
        tituloCadastro="Cadastro de Gêneros"
        visibilidade="none"
        temadatela={props.tema}
        placeholder="Genero"
        valor={valor}
        funcCadastro={funcCadastro}
        funcTema={props.funcTrocarTema}
        // função que muda o state
        setValor={setValor}
        editar={editar}
        funcEditar={funcEditar}
        funcCancelarEdicao={funcEditarFalse}
        cancelarVisibilidade={editar ? "block" : "none"}

      />
      <Lista
        temadatela={props.tema}
        tituloLista="Lista de Gêneros"
        visibilidade="none"

        //Chama o método para validar:
        lista={listaGeneros}
        //Identifica o tipo de lista:
        tipoLista="genero"

        funcSetEditar={funcEditarTrue}
        funcExcluir={funcExcluir}
        funcEditar={funcEditar}
      />
      <Footer />
    </>
  )
}

export default CadastroGenero

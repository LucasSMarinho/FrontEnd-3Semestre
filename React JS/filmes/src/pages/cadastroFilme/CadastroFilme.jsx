import './CadastroFilme.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Cadastro from '../../components/cadastro/Cadastro'
import { useEffect, useState } from 'react'
import api from '../../services/services'
import Lista from '../../components/lista/Lista'

function CadastroFilme(props) {

  const [valor, setValor] = useState("")
  const [editar, setEditar] = useState(false);
  const [itemEditar, setItemEditar] = useState("")
  const [generoSelecionado, setGeneroSelecionado] = useState("")
  const [listaFilme, setListaFilme] = useState([])
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
    FuncGetGenero()    
  }, [])

  //GET
  const FuncGet = async () => 
  {
    try{
    const retornoAPI = await api.get('/Filme')
    const dados = await retornoAPI.data
    console.log(dados)
    setListaFilme(dados)
    }
    catch(error)
    {
      console.log(error);
    }
  }

  const FuncGetGenero = async () => 
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
      alert("Filme deve ser preenchido antes de cadastrar!")
      return false
    }

    const objCadastro = {
      titulo: valor,  
      imagem: "semImagem",
      idGenero: generoSelecionado
    }

    try {
      const retornoAPI = await api.post("/Filme", objCadastro)
      const dados = await retornoAPI.data

      if (retornoAPI.status == 201) {
        setListaFilme([...listaFilme, dados])


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

  const preEditar = (item) => {

    console.log(item.titulo)

    setItemEditar(item)
    setValor(item.titulo)
    setEditar(true)
  }


  const funcEditar = async() =>
  {

    if (valor.trim().length == 0) {
      alert("Gênero deve ser preenchido antes de editar!")
      return false
    }

    try{
    const objCadastro = {
      titulo: valor,  
      imagem: "semImagem",
      idGenero: generoSelecionado
    }

    const retornoAPI = await api.put(`/Filme/${itemEditar.idFilme}`, objCadastro)
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

    const retornoAPI = await api.delete(`/Filme/${item.idFilme}`)
    alert("Filme Apagado com Sucesso!")
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
       <Header 
      funcTema={props.funcTrocarTema}
      imagemTema={props.valorImg}
      />
      <Cadastro
        tituloCadastro="Cadastro de Filmes"
        temadatela={props.tema}
        
        lista={listaGeneros}

        placeholder="Filme"
        valor={valor}
        funcCadastro={funcCadastro}
        
        // função que muda o state
        setValor={setValor}
        editar={editar}
        funcEditar={funcEditar}
        funcCancelarEdicao={funcEditarFalse}
        cancelarVisibilidade={editar ? "block" : "none"}

        setGeneroSelecionado = {setGeneroSelecionado}
        generoSelecionado = {generoSelecionado}

      />
      <Lista
        temadatela={props.tema}
        tituloLista="Lista de Gêneros"

        //Chama o método para validar:
        lista={listaFilme}
        //Identifica o tipo de lista:
        tipoLista="filme"

        funcSetEditar={funcEditarTrue}
        funcExcluir={funcExcluir}
        funcEditar={preEditar}
      />
      <Footer />
    </>
  )
}

export default CadastroFilme

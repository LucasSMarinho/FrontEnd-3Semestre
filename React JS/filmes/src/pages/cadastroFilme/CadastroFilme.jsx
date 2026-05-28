import './CadastroFilme.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Cadastro from '../../components/cadastro/Cadastro'
import { useEffect, useState } from 'react'
import api from '../../services/services'
import Lista from '../../components/lista/Lista'

function CadastroFilme(props) {

  const [valor, setValor] = useState("")
  const [imagem, setImagem] = useState("")
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
    

    try {
          
    const formData = new FormData()

    formData.append("Nome", valor)
    formData.append("idGenero", generoSelecionado)
    formData.append("Imagem", imagem)
      

      console.log(generoSelecionado)

      const retornoAPI = await api.post("/Filme", formData,
      {
        headers: {"Content-Type": "multipart/form-data"}
      })
      const dados = await retornoAPI.data


      if (retornoAPI.status == 201) {
        setListaFilme([...listaFilme, dados])


        alert("Gênero cadastrado com sucesso!")
        limparFormulario()
      }
      else {
        alert("Houve algum problema ao cadastrar!")
      }

      FuncGet()
    }
    catch (error) {
      alert("Erro na chamada da API")
      console.log(error)
    }
  }

  //PUT

  const preEditar = (item) => {

    console.log(item.titulo)
    console.log(`https://localhost:7134/imagens/${item.imagem}`)

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

    const formData = new FormData()

    formData.append("Nome", valor)
    formData.append("idGenero", generoSelecionado)
    formData.append("Imagem", imagem)

    const retornoAPI = await api.put(`/Filme/${itemEditar.idFilme}`, formData,
      {
        headers: {"Content-Type": "multipart/form-data"}
      })

    console.log(retornoAPI)


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

    FuncGet()
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
        setImagem = {setImagem}

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

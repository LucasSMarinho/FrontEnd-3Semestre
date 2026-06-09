import './CadastroGenero.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Cadastro from '../../components/cadastro/Cadastro'
import { useEffect, useState } from 'react'
import api from '../../services/services'
import Lista from '../../components/lista/Lista'
import { Alerta } from '../../components/alerta/Alerta'

function CadastroGenero(props) {

  const [valor, setValor] = useState("")
  const [editar, setEditar] = useState(false);
  const [itemEditar, setItemEditar] = useState("")
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
  const funcCadastro = async () => {
    
    if (valor.trim().length == 0) {
      Alerta({
        title: "Preencha os valores corretamente",
        text: "Gênero deve ser preenchido antes de cadastrar!",
        icon: "warning",
        tema: props.tema
      })
      
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


        Alerta({
        title: "Genero cadastrado com sucesso",
        text: `O genero ${objCadastro.nome} foi cadastrado com sucesso`,
        confirmButtonColor:  props.tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(200, 0, 0)",
        
        icon: "success"
      })
        limparFormulario()
        getListaGeneros()
      }
      else
      {
        Alerta({
        title: "Problema ao cadastrar o genero",
        text: `O genero ${objCadastro.nome} não foi cadastrado`,
        confirmButtonColor:  props.tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(200, 0, 0)",
        
        icon: "error"
      })
       getListaGeneros()
      }

      //chamar o get!
    }
    catch (error) {
      Alerta({
        title: "Erro na chamada na API",
        text: `O genero ${objCadastro.nome} não foi cadastrado`,
        confirmButtonColor:  props.tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(200, 0, 0)",
        
        icon: "error"
      })
      console.log(error)
    }
  }

  //PUT

  const preEditar = (item) => {

    console.log(item.nome)

    setItemEditar(item)
    setValor(item.nome)
    setEditar(true)
  }


  const funcEditar = async() =>
  {

    if (valor.trim().length == 0) {
      Alerta({
        title: "Preencha os valores corretamente",
        text: "Gênero deve ser preenchido antes de atualizar!",
        confirmButtonColor:  props.tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(200, 0, 0)",
        
        icon: "warning"
        
      })
      return false
    }

    try{
    const objCadastro = {
      nome: valor
    }

    const retornoAPI = await api.put(`/Genero/${itemEditar.idGenero}`, objCadastro)
   Alerta({
        title: "Genero atualizado com sucesso",
        text: `O genero ${objCadastro.nome} foi atualizado com sucesso`,
        confirmButtonColor:  props.tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(200, 0, 0)",
        
      })
       getListaGeneros()
  }
  catch(error)  {
    Alerta({
        title: "Erro na chamada na API",
        text: `O genero ${objCadastro.nome} não foi atualizado`,
        confirmButtonColor:  props.tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(200, 0, 0)",
      })
    console.log(error)
  }         
  
}


  //DELETE
  const funcExcluir = async(item) =>
  {

    const result = await Alerta({
      title: "Excluir Gênero?",
      text: `Deseja realmente excluir ${item.nome}`,
      icon: "warning",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#d33",
      showCancelButton: true,
      confirmButtonText: "Confirmar Exclusão",
      cancelButtonText: "Cancelar",
    })

    console.log(result)

    if(!result)
    {
      return false
    }

    try
    {
    const retornoAPI = await api.delete(`/Genero/${item.idGenero}`)
     Alerta({
        title: "Genero deletado com sucesso",
        confirmButtonColor:  props.tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(200, 0, 0)",
        
      })
       getListaGeneros()
    }
    catch(error)
    {
      Alerta({
        title: "Erro na chamada na API",
        text: `O genero ${item.nome} não foi excluido`,
        confirmButtonColor:  props.tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(200, 0, 0)",
        
      })
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
        tituloCadastro="Cadastro de Gêneros"
        visibilidade="none"
        temadatela={props.tema}
        
        placeholder="Genero"
        valor={valor}
        funcCadastro={funcCadastro}
        
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
        funcEditar={preEditar}
      />
      <Footer />
    </>
  )
}

export default CadastroGenero

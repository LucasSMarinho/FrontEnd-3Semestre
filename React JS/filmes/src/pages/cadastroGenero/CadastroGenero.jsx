import './CadastroGenero.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Cadastro from '../../components/cadastro/Cadastro'
import { useEffect, useState } from 'react'
import api from '../../services/services'
import Lista from '../../components/lista/Lista'
import Swal from 'sweetalert2'
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


        Swal.fire({
        title: "Genero cadastrado com sucesso",
        text: `O genero ${objCadastro.nome} foi cadastrado com sucesso`,
        confirmButtonColor:  props.tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(200, 0, 0)",
        background: props.tema == "Dark" ? "black" :  "white",
        icon: "success"
      })
        limparFormulario()
      }
      else
      {
        Swal.fire({
        title: "Problema ao cadastrar o genero",
        text: `O genero ${objCadastro.nome} não foi cadastrado`,
        confirmButtonColor:  props.tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(200, 0, 0)",
        background: props.tema == "Dark" ? "black" :  "white",
        icon: "error"
      })
      }

      //chamar o get!
    }
    catch (error) {
      Swal.fire({
        title: "Erro na chamada na API",
        text: `O genero ${objCadastro.nome} não foi cadastrado`,
        confirmButtonColor:  props.tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(200, 0, 0)",
        background: props.tema == "Dark" ? "black" :  "white",
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
      Swal.fire({
        title: "Preencha os valores corretamente",
        text: "Gênero deve ser preenchido antes de atualizar!",
        confirmButtonColor:  props.tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(200, 0, 0)",
        background: props.tema == "Dark" ? "black" :  "white",
        icon: "warning"
        
      })
      return false
    }

    try{
    const objCadastro = {
      nome: valor
    }

    const retornoAPI = await api.put(`/Genero/${itemEditar.idGenero}`, objCadastro)
   Swal.fire({
        title: "Genero atualizado com sucesso",
        text: `O genero ${objCadastro.nome} foi atualizado com sucesso`,
        confirmButtonColor:  props.tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(200, 0, 0)",
        background: props.tema == "Dark" ? "black" :  "white",
      })
  }
  catch(error)  {
    Swal.fire({
        title: "Erro na chamada na API",
        text: `O genero ${objCadastro.nome} não foi atualizado`,
        confirmButtonColor:  props.tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(200, 0, 0)",
        background: props.tema == "Dark" ? "black" :  "white",
      })
    console.log(error)
  }         
  
}


  //DELETE
  const funcExcluir = async(item) =>
  {

    const result = await Swal.fire({
      title: "Excluir Gênero?",
      text: `Deseja realmente excluir ${item.nome}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar Exclusão",
      cancelButtonText: "Cancelar",
      background: props.tema == "Dark" ? "black" :  "white",
    })

    if(!result.isConfirmed)
    {
      return false
    }

    try
    {
    const retornoAPI = await api.delete(`/Genero/${item.idGenero}`)
     Swal.fire({
        title: "Genero deletado com sucesso",
        confirmButtonColor:  props.tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(200, 0, 0)",
        background: props.tema == "Dark" ? "black" :  "white",
      })
    }
    catch(error)
    {
      Swal.fire({
        title: "Erro na chamada na API",
        text: `O genero ${item.nome} não foi excluido`,
        confirmButtonColor:  props.tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(200, 0, 0)",
        background: props.tema == "Dark" ? "black" :  "white",
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

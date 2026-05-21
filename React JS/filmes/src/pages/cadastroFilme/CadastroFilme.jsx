import './CadastroFilme.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'

function CadastroFilme() {

  const [tema, setTema] = useState("Light")

  const trocarTema = () => {
    if (tema === "Light") {
      console.log(tema)
      setTema("Dark")
    }
    else {
      console.log(tema)
      setTema("Light")
    }
  }

  return (
    <>
      <Header />
      <main className={`section-flex section-${tema}`}>
        <h1>Cadastro - Filme</h1> <button className="section__button" onClick={trocarTema}>Trocar tema</button>
      </main>
      <Footer />
    </>
  )
}

export default CadastroFilme

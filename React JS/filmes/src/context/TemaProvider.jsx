import { useState } from "react";
import { TemaContext } from "./TemaContext";

export const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState(localStorage.getItem('theme'))
  const [valorImg, setValorImg] = useState(localStorage.getItem('theme') === "Light" ? "Sol" : "Lua")

  const trocarTema = () => {
    
     const currentTheme = localStorage.getItem('theme'); 

      if (currentTheme === "Light") {
        setValorImg("Lua")
        localStorage.setItem('theme', 'Dark');
        setTema("Dark")
      }
      else {
        setValorImg("Sol")
        localStorage.setItem('theme', 'Light');
        setTema("Light")
      }
    }
  
  return (
    <TemaContext.Provider value={ {tema, setTema, valorImg, setValorImg, trocarTema} }>
      {children}
    </TemaContext.Provider>
  )
}
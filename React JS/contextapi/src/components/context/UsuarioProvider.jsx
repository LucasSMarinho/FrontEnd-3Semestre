
import { useState } from "react";
import { UsuarioContext } from "./UsuarioContext";

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState("Lucas")
  
  return (
    <UsuarioContext.Provider value={ {usuario, setUsuario} }>
      {children}
    </UsuarioContext.Provider>
  )
}
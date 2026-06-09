
import { useState } from "react";
import { UsuarioContext } from "./UsuarioContext";
import { jwtDecode } from "jwt-decode";

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(localStorage.getItem("token") == null || localStorage.getItem("token") === "undefined" ? null : localStorage.getItem("token"))
  
  const [token, setToken] = useState(localStorage.getItem("token") == null || localStorage.getItem("token") === "undefined" ? null : localStorage.getItem("token"))


  return (
    <UsuarioContext.Provider value={ {usuario, setUsuario, token, setToken} }>
      {children}
    </UsuarioContext.Provider>
  )
}
import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"
import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"


const PrivateRoute = ({children}) => {

  const {token, setToken, usuario, setUsuario} = useContext(UsuarioContext)


  useEffect(() => {
    const timer = setTimeout(() => {
        setToken(localStorage.setItem("token", null));
    }, 120000);

    return () => clearTimeout(timer);
  }, [usuario]);

  return token != null ? children : <Navigate to="/" replace />;

}

export default PrivateRoute
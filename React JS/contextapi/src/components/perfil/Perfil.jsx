import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";


export default function Perfil() {
  const {usuario} = useContext(UsuarioContext)
  const {setUsuario} = useContext(UsuarioContext)
  
  return (
    <>
      <h1>Perfil: {usuario}</h1>
      <input type="text" placeholder="digite o novo nome" onChange={(e) => setUsuario(e.target.value)} />
      <button onClick={() => setUsuario("Gogeta")}></button>
    </>
  );
}
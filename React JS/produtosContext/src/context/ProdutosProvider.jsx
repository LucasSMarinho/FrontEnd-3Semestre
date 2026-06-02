
import { useState } from "react";
import { ProdutosContext } from "./ProdutosContext";

export const ProdutosProvider = ({ children }) => {
  const [produto, setProduto] = useState("")
  const [listaProduto, setListaProduto] = useState([])
  
  return (
    <ProdutosContext.Provider value={ {produto, setProduto, listaProduto, setListaProduto} }>
      {children}
    </ProdutosContext.Provider>
  )
}
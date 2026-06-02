import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProdutosProvider } from './context/ProdutosProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProdutosProvider>
    <App />
    </ProdutosProvider>
  </StrictMode>,
)

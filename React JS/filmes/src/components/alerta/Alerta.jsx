import Swal from "sweetalert2"
import './Alerta.css'

export const Alerta = ({ title, text, icon, tema, showCancelButton, confirmButtonText, cancelButtonText}) => {
    return Swal.fire({
        title,
        text,
        icon,
        confirmButtonColor:  tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(17, 0, 0)",
        background: tema == "Dark" ? "black" :  "white",
        showCancelButton,
        confirmButtonText,
        cancelButtonText
    })
}
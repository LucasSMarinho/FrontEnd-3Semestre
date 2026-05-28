import Swal from "sweetalert2"
import './Alerta.css'

export const Alerta = ({ title, text, icon, tema}) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonColor:  tema == "Dark" ? "rgb(200, 0, 0)" : "rgb(17, 0, 0)",
        background: tema == "Dark" ? "black" :  "white",
    })
}
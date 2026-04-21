import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export const CasillaDia = ({ fecha, esMesActual, esHoy, esFuturo }) => {
    const navigate = useNavigate()

    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    const handleClick = () => {
        if (esHoy)
            navigate("/registro-emocion")
        else if (esFuturo) {
            setMostrarMensaje(true)
            setTimeout(() => setMostrarMensaje(false), 2000)
            return
        }
        else
            navigate(`/dia/${fecha.toISOString().split("T")[0]}`)
    }

    return (
        <article
            className={`casilla-dia 
        ${!esMesActual ? "fuera-mes" : ""} 
        ${esHoy ? "hoy" : ""}`}
            onClick={handleClick}>

            {mostrarMensaje && (
                <div className="mensaje-futuro">¡No viajes al futuro!</div>
            )}

            <div className="numero-dia">{format(fecha, "d")}</div>

            <div className="mini-emociones"></div>
        </article>

    )

}

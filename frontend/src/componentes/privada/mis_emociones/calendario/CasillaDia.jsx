import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export const CasillaDia = ({ fecha, esMesActual, esHoy }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        if (esHoy)
            navigate("/registraremocion")
        else
            navigate(`/dia/${fecha.toISOString().split("T")[0]}`)
    }

    return (
        <article
            className={`casilla-dia 
        ${!esMesActual ? "fuera-mes" : ""} 
        ${esHoy ? "hoy" : ""}`}
            onClick={handleClick}>

            <div className="numero-dia">{format(fecha, "d")}</div>

            <div className="mini-emociones"></div>
        </article>
    )

}

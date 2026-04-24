import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "./CasillaDia.css";
import { useEmotionalAssets } from "../../../../../hooks/useEmotionalAssets";

export const CasillaDia = ({ fecha, esMesActual, esHoy, esFuturo, emociones, actividades }) => {
    const navigate = useNavigate();
    const { getEmocionColor, getActivityIcon } = useEmotionalAssets();

    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    const handleClick = () => {
        if (esHoy)
            navigate("/mis-emociones/registro-emocion")
        else if (esFuturo) {
            setMostrarMensaje(true)
            setTimeout(() => setMostrarMensaje(false), 2000)
            return
        }
        else
            navigate(`/mis-emociones/resumen-diario-cronologico/${format(fecha, "yyyy-MM-dd")}`)
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

            <div className="mini-emociones">
                <div className="emociones">
                    {emociones.map((emocion, index) => (
                        <div
                            key={index}
                            className="mini-emocion"
                            style={{ backgroundColor: getEmocionColor(emocion.nombre) }}
                            title={emocion.nombre}
                        />
                    ))}
                </div>
                <div className="actividades">
                    {actividades.map((actividad, index) => (
                        <img
                            key={index}
                            src={getActivityIcon(actividad.nombre)}
                            className="mini-actividad"
                            alt={actividad.nombre}
                            title={actividad.nombre}
                        />
                    ))}
                </div>
            </div>
        </article>

    )

}

import { useState } from "react";
import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    addMonths,
    subMonths,
    format,
    isSameMonth,
    isToday
} from "date-fns";
import { es } from "date-fns/locale";
import { CasillaDia } from "./CasillaDia";
import "./calendario.css";
import GrupoBotones from "../../../generales/grupo-botones/GrupoBotones";
import Boton from "../../../generales/botons/Boton";

export const Calendario = () => {
    const [mesActual, setMesActual] = useState(new Date())

    const inicioMes = startOfMonth(mesActual)
    const finMes = endOfMonth(mesActual)

    const inicioCuadricula = startOfWeek(inicioMes, { weekStartsOn: 1 })
    const finCuadricula = endOfWeek(finMes, { weekStartsOn: 1 })

    const dias = eachDayOfInterval({
        start: inicioCuadricula,
        end: finCuadricula
    })

    return (
        <div className="calendario-container">
            <div className="calendario-header">
                <button className="izquierda" onClick={() => setMesActual(subMonths(mesActual, 1))}>
                    ←
                </button>

                <h2>{format(mesActual, "MMMM yyyy", { locale: es })}</h2>

                <button className="derecha" onClick={() => setMesActual(addMonths(mesActual, 1))}>
                    →
                </button>
            </div>

            <div className="grid-calendario nombres-dias">
                {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((d) => (
                    <div key={d} className="nombre-dia">{d}</div>
                ))}
            </div>

            <div className="grid-calendario">
                {dias.map((dia) => (
                    <CasillaDia
                        key={dia.toISOString()}
                        fecha={dia}
                        esMesActual={isSameMonth(dia, mesActual)}
                        esHoy={isToday(dia)}
                    />
                ))}
            </div>
            <GrupoBotones>
                <Boton texto='Ver estadísticas' to='#' />
                <Boton texto='Registro diario' to='#' />
            </GrupoBotones>
        </div>
    );
};

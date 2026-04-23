import { useState, useEffect } from "react";
import axios from "axios";
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
    isToday,
    isAfter
} from "date-fns";
import { es } from "date-fns/locale";
import { CasillaDia } from "./CasillaDia";
import "./calendario.css";
import { GrupoBotones, Boton } from "../../../generales";

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

    const [datosMes, setDatosMes] = useState({})

    useEffect(() => {
        const cargarResumen = async () => {
            const mesStr = format(mesActual, "yyyy-MM");
            const token = localStorage.getItem("access");
            try {
                const res = await axios.get(`http://localhost:8000/api/calendario/resumen/?mes=${mesStr}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const mapaDatos = {};
                res.data.forEach(dia => {
                    mapaDatos[dia.fecha] = dia;
                });
                setDatosMes(mapaDatos);
            } catch (err) {
                console.error("Error al cargar calendario", err);
            }
        };

        cargarResumen();
    }, [mesActual]);



    return (
        <section className="calendario-container">
            <header className="calendario-header">
                <button className="izquierda" onClick={() => setMesActual(subMonths(mesActual, 1))}>
                    ←
                </button>

                <h2>{format(mesActual, "MMMM yyyy", { locale: es })}</h2>

                <button className="derecha" onClick={() => setMesActual(addMonths(mesActual, 1))}>
                    →
                </button>
            </header>

            <ul className="grid-calendario nombres-dias">
                {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((d) => (
                    <li key={d} className="nombre-dia">{d}</li>
                ))}
            </ul>

            <div className="grid-calendario">
                {dias.map((dia) => {
                    const fechaStr = format(dia, "yyyy-MM-dd");
                    const dataDia = datosMes[fechaStr];
                    return (
                        <CasillaDia
                            key={dia.toISOString()}
                            fecha={dia}
                            esMesActual={isSameMonth(dia, mesActual)}
                            esHoy={isToday(dia)}
                            esFuturo={isAfter(dia, new Date())}
                            emociones={dataDia?.emociones_primarias || []}
                            actividades={dataDia?.actividades_preview || []}
                        />
                    )
                })}
            </div>
            <GrupoBotones>
                <Boton texto='Ver estadísticas' to='#' />
                <Boton texto='Registro diario' to='/registro-emocion' />
            </GrupoBotones>
        </section>

    );
};

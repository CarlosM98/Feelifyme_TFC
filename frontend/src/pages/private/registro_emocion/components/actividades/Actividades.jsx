import { useState, useEffect } from "react";
import axios from "axios";

import { useEmotionalAssets } from "../../../../../hooks/useEmotionalAssets";
import './actividades.css'
import { Title } from "../../../../../componentes/generales";

export const Actividades = ({ seleccionadasActuales, onSelectActividades }) => {
    const { getActivityIcon } = useEmotionalAssets();
    const [actividades, setActividades] = useState([]);

    const toggle = (id) => {
        const updated = seleccionadasActuales.includes(id)
            ? seleccionadasActuales.filter(x => x !== id)
            : [...seleccionadasActuales, id]

        // Usamos la BOCA
        onSelectActividades(updated)
    };
    useEffect(() => {
        const fetchActividades = async () => {
            try {
                const token = localStorage.getItem("access");
                const response = await axios.get("http://localhost:8000/api/actividades/", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setActividades(response.data);
            } catch (err) {
                console.error("Error al cargar actividades:", err);
            }
        };

        fetchActividades();
    }, []);


    return (
        <section className="contenedor-actividades">
            <Title nivel={2} className="titulo-actividades">Actividades</Title>
            <ul className="actividades-lista">
                {actividades.map(act => (
                    // Usamos los OJOS
                    <li key={act.id} className={`actividad-item ${seleccionadasActuales.includes(act.id) ? 'seleccionada' : ''}`} onClick={() => toggle(act.id)} >
                        <img src={getActivityIcon(act.nombre)} alt={act.nombre} className="actividad-item-img" />
                        <span className="titulo-texto">{act.nombre}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

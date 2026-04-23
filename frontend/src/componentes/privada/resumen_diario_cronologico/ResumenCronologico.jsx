import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

import "./ResumenCronologico.css";
import { COLORES_EMOCIONES, ICONOS_ACTIVIDADES } from "../../../utils/constants";

export const ResumenCronologico = () => {
    const { fecha } = useParams();
    const navigate = useNavigate();
    const [datos, setDatos] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const fetchResumen = async () => {
            try {
                const token = localStorage.getItem("access");
                const response = await axios.get(`http://localhost:8000/api/resumen-dia/?fecha=${fecha}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setDatos(response.data);
            } catch (err) {
                console.error("Error:", err);
            } finally {
                setCargando(false);
            }
        };
        if (fecha) fetchResumen();
    }, [fecha]);

    if (cargando) return <div className="resumen-feedback">Cargando...</div>;
    if (!datos || datos.registros.length === 0) return <div className="resumen-feedback">No hay registros para este día.</div>;

    const fechaTxt = format(parseISO(fecha), "EEEE, d 'de' MMMM", { locale: es });

    return (
        <section className="resumen-cronologico-container">
            <header className="resumen-header">
                <button onClick={() => navigate("/calendario")} className="btn-back"> ← Volver </button>
                <h1>{fechaTxt.charAt(0).toUpperCase() + fechaTxt.slice(1)}</h1>
            </header>

            <div className="lista-registros">
                {datos.registros.map(reg => (
                    <article key={reg.id} className="tarjeta-registro">
                        <div className="hora-badge">{reg.hora.substring(0, 5)}</div>

                        <div className="contenido-registro">
                            <div className="grupo">
                                <strong>Emociones:</strong>
                                <div className="chips">
                                    {reg.emociones.map(e => (
                                        <span key={e.id} className="chip" style={{ border: `2px solid ${COLORES_EMOCIONES[e.nombre]}` }}>
                                            {e.nombre}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="grupo">
                                <strong>Actividades:</strong>
                                <div className="iconos">
                                    {reg.actividades.map(a => (
                                        <img key={a.id} src={ICONOS_ACTIVIDADES[a.nombre]} alt={a.nombre} className="img-actividad" />
                                    ))}
                                </div>
                            </div>

                            {reg.notas && <p className="nota">"{reg.notas}"</p>}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
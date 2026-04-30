import { useActividades } from "../../../../../hooks/useActividades";
import { useEmotionalAssets } from "../../../../../hooks/useEmotionalAssets";
import { Title } from "../../../../../componentes/generales";
import './actividades.css'

export const Actividades = ({ seleccionadasActuales, onSelectActividades }) => {
    const { actividades, loading, error } = useActividades();
    const { getActivityIcon } = useEmotionalAssets();

    const toggle = (id) => {
        const updated = seleccionadasActuales.includes(id)
            ? seleccionadasActuales.filter(x => x !== id)
            : [...seleccionadasActuales, id]

        onSelectActividades(updated)
    };

    if (loading) return <div className="cargando">Cargando actividades...</div>;
    if (error) return <div className="error">No se pudieron cargar las actividades.</div>;

    return (
        <section className="contenedor-actividades">
            <Title nivel={2} className="titulo-actividades">Actividades</Title>
            <ul className="actividades-lista">
                {actividades.map(act => (
                    <li 
                        key={act.id} 
                        className={`actividad-item ${seleccionadasActuales.includes(act.id) ? 'seleccionada' : ''}`} 
                        onClick={() => toggle(act.id)} 
                    >
                        <img 
                            src={getActivityIcon(act.nombre)} 
                            alt={act.nombre} 
                            className="actividad-item-img" 
                        />
                        <span className="titulo-texto">{act.nombre}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

import { Title } from "../../../../../componentes/generales"
import './notas_diarias.css'

export const NotasDiarias = ({ value, onChangeNota }) => {
    return <section className="notas-diarias">
        <Title nivel={2}>Notas Diarias</Title>
        <textarea
            value={value}
            onChange={(e) => onChangeNota(e.target.value)}
            placeholder="Escribe aquí tu reflexión..."
        />
    </section>
}
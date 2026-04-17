import { Titulo } from "../../../generales"
import './notas_diarias.css'

export const NotasDiarias = ({ value, onChangeNota }) => {
    return <section className="notas-diarias">
        <Titulo nivel={2}>Notas Diarias</Titulo>
        <textarea
            value={value}
            onChange={(e) => onChangeNota(e.target.value)}
            placeholder="Escribe aquí tu reflexión..."
        />
    </section>
}
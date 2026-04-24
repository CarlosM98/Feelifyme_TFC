import { useDocumentTitle } from "../../../hooks/useDocumentTitle"
import { Calendario } from "./components/calendario/Calendario"


export const MisEmociones = () => {
    useDocumentTitle('Calendario');
    return <section className="mis-emociones-page">
        <Calendario />
    </section>
}


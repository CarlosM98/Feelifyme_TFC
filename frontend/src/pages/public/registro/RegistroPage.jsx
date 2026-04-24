import { useDocumentTitle } from "../../../hooks/useDocumentTitle";
import { Registro } from "./components/Registro";

import { Title } from "../../../componentes/generales";

export const RegistroPage = () => {
    useDocumentTitle('Registro');
    return <section className="cont-main">
        <Title nivel={1}>Registrarme</Title>
        <section className="cont-form">
            <Registro />
        </section>
    </section>
}



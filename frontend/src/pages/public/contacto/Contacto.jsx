import { useDocumentTitle } from "../../../hooks/useDocumentTitle";
import FormularioContacto from './components/FormularioContacto'
import Mapa from "./components/mapa/Mapa";

import { Title } from "../../../componentes/generales";

export const Contacto = () => {
    useDocumentTitle('Contacto');
    return <div className="cont-main">
        <Title nivel={1}>Contacto</Title>

        <section className="cont-form">
            <FormularioContacto />
            <Mapa />
        </section>
    </div>
}

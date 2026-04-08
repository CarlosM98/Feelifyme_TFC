import { useEffect } from "react";
import FormularioContacto from '../../componentes/publica/contacto/FormularioContacto'
import Mapa from "../../componentes/publica/contacto/mapa/Mapa";

import { Titulo } from "../../componentes/generales/titulos/Titulo";

export const Contacto = () => {
    useEffect(() => {
        document.title = 'Contacto'
    })
    return <div className="cont-main">
        <Titulo nivel={1}>Contacto</Titulo>

        <section className="cont-form">
            <FormularioContacto />
            <Mapa />
        </section>
    </div>
}

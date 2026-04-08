import { useEffect } from "react";
import { Registro } from "../../componentes/auth";

import { Titulo } from "../../componentes/generales/titulos/Titulo";

export const RegistroPage = () => {
    useEffect(() => {
        document.title = 'Registro'
    })
    return <section className="cont-main">
        <Titulo nivel={1}>Registrarme</Titulo>
        <section className="cont-form">
            <Registro />
        </section>
    </section>
}



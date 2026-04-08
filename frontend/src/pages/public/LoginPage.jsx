import { useEffect } from "react";
import { Login } from "../../componentes/auth";

import { Titulo } from "../../componentes/generales/titulos/Titulo";

export const LoginPage = () => {
    useEffect(() => {
        document.title = 'Registro'
    })
    return <section className="cont-main-login">
        <Titulo nivel={1}>Iniciar sesión</Titulo>
        <section className="cont-form">
            <Login />
        </section>
    </section>
}



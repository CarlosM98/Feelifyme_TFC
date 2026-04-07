import { useEffect } from "react";
import Login from "../../componentes/auth/login/Login";

import { Titulo } from "../../componentes/generales/titulos/Titulo";

const LoginPage = () => {
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

export default LoginPage;

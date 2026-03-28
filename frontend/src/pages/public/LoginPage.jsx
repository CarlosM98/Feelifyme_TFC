import { useEffect } from "react";
import Login from "../../componentes/auth/login/Login";

const LoginPage = () => {
    useEffect(() => {
        document.title = 'Registro'
    })
    return <section className="cont-main-login">
        <h1>Iniciar sesión</h1>
        <section className="cont-form">
            <Login />
        </section>
    </section>
}

export default LoginPage;

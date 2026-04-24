import { useDocumentTitle } from "../../../hooks/useDocumentTitle";
import { Login } from "./components/Login";

import { Title } from "../../../componentes/generales";

export const LoginPage = () => {
    useDocumentTitle('Login');
    return <section className="cont-main-login">
        <Title nivel={1}>Iniciar sesión</Title>
        <section className="cont-form">
            <Login />
        </section>
    </section>
}



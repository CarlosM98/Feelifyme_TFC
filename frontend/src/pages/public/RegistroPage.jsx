import { useEffect } from "react";
import Registro from "../../componentes/registro/Registro";
const RegistroPage = () => {
    useEffect(() => {
        document.title = 'Registro'
    })
    return <section className="cont-main">
        <h1>Registrarme</h1>
        <section className="cont-form">
            <Registro />
        </section>
    </section>
}

export default RegistroPage;

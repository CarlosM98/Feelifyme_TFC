import { useEffect } from "react";
import FormularioContacto from '../../componentes/publica/contacto/FormularioContacto'
import Mapa from "../../componentes/publica/contacto/mapa/Mapa";

function Contacto() {
    useEffect(() => {
            document.title = 'Contacto'
        })
    return <div className="cont-main">
            <h1>Contacto</h1>

            <section className="cont-form">
                <FormularioContacto />
                <Mapa />
            </section>
        </div>
}

export default Contacto;
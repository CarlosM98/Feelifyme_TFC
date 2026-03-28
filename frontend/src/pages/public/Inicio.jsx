import { useEffect } from "react";

import Hero from "../../componentes/publica/inicio/hero/Hero";
import Descubre from "../../componentes/publica/inicio/descubre/Descubre";
import Beneficios from "../../componentes/publica/inicio/beneficios/Beneficios";


const Inicio = () => {
    useEffect(() => {
        document.title = 'Inicio'
    })
    return <>
        <Hero />
        <Descubre />
        <Beneficios />
    </>
}

export default Inicio;

import { useEffect } from "react";

import { Hero, Descubre, Beneficios } from "../../componentes/publica/inicio";


export const Inicio = () => {
    useEffect(() => {
        document.title = 'Inicio'
    })
    return <>
        <Hero />
        <Descubre />
        <Beneficios />
    </>
}



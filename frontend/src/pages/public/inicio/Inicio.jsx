import { useDocumentTitle } from "../../../hooks/useDocumentTitle";
import { Hero, Descubre, Beneficios } from "./components";


export const Inicio = () => {
    useDocumentTitle('Inicio');
    return <>
        <Hero />
        <Descubre />
        <Beneficios />
    </>
}



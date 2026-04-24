import { useDocumentTitle } from "../../../hooks/useDocumentTitle"
import { SeccionesComoFunciona, PreguntaInteractiva } from "./components";

export const ComoFunciona = () => {
    useDocumentTitle('Como funciona');
    return <>
        <SeccionesComoFunciona />
        <PreguntaInteractiva />

    </>
}


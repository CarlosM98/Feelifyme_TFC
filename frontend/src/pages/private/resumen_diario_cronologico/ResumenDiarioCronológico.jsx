import { useDocumentTitle } from "../../../hooks/useDocumentTitle"
import { ResumenCronologico } from "./components/ReSumenCronologico"


export const ResumenDiarioCronológico = () => {
    useDocumentTitle('Resumen Diario');
    return (
        <ResumenCronologico />
    )
}
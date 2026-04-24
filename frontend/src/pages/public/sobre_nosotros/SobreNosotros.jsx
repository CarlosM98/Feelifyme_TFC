import { useDocumentTitle } from "../../../hooks/useDocumentTitle"
import SeccionesSobreNosotros from "./components/SeccionesSobreNosotros"

export const SobreNosotros = () => {
    useDocumentTitle('Sobre nosotros');
    return <>
        <SeccionesSobreNosotros />
    </>
}

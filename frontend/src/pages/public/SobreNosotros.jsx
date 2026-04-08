import { useEffect } from "react"

import SeccionesSobreNosotros from "../../componentes/publica/sobre_nosotros/SeccionesSobreNosotros"

export const SobreNosotros = () => {
    useEffect(() => {
        document.title = 'Sobre nosotros'
    })
    return <>
        <SeccionesSobreNosotros />
    </>
}

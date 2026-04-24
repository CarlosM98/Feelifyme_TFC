import { imagenHeroPrincipal } from "../../../../../assets/images/public/inicio/hero"

import "./Hero.css"

import { ButtonGroup, Button, Title } from "../../../../../componentes/generales"

export const Hero = () => {

    return <section className="principal">
        <div className="contenido-texto">
            <Title nivel={1}>Aprende a gestionar tus emociones. Mejora día a día con <span className="marca">FeelifyMe</span>.</Title>
            <p className="parrafo-h1">Comparte cómo te sientes cada día. No estás solo: tanto en los momentos difíciles como en los buenos, estamos contigo. En <span className="marca">FeelifyMe</span> te ayudamos a comprender tus emociones y te ofrecemos consejos prácticos para aprender a gestionarlas con mayor claridad y equilibrio.</p>
        </div>
        <ButtonGroup>
            <Button texto='Iniciar sesion' to='#' />
            <Button texto='Crear cuenta' to='#' />
        </ButtonGroup>
        <figure className="contenedor-imagen-principal">
            <img src={imagenHeroPrincipal} alt="imagen hero" className="imagen-hero" />
        </figure>

    </section>
}
import { useState } from "react";
import "./PreguntaInteractiva.css"

import { Title, ButtonGroup, Button } from "../../../../../componentes/generales";

export const PreguntaInteractiva = () => {
    const [mensaje, setMensaje] = useState("");
    const [emocionSeleccionada, setEmocionSeleccionada] = useState(null)

    const mensajes = {
        bien: "Nos alegra que estés bien pero siempre puedes darle una oportunidad a FeelifyMe.",
        neutro: "FeelifyMe te puede ayudar a abrirte al mundo de las emociones.",
        mal: "Usa FeelifyMe para ver patrones en tus conductas, estamos contigo."
    }

    const emociones = ['bien', 'neutro', 'mal']

    const mostrarMensaje = (emocion) => {
        setEmocionSeleccionada(emocion)
        setMensaje(mensajes[emocion])
    }

    return (
        <div className="estado-emocional">
            <Title nivel={3}>¿Cómo te sientes hoy?</Title>
            <div className="botonesIteractivos">
                {emociones.map((emocion) => (
                    <button key={emocion} onClick={() => mostrarMensaje(emocion)} className={emocion === emocionSeleccionada ? `btn-${emocion}` : 'btn-base'}>
                        {emocion}
                    </button>
                ))}
            </div>
            {/* Renderizado condicional: solo muestra el mensaje si existe */}
            {mensaje && <p>{mensaje}</p>}
            <ButtonGroup>
                <Button texto='Registrarme' to='#' />
            </ButtonGroup>
        </div>
    )
}

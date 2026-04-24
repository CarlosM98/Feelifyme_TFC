import { Card, ButtonGroup, Button, Title } from "../../../../../componentes/generales"

import "./Descubre.css"
export const Descubre = () => {

    const tarjetas = [
        {
            title: 'Recomendación del día',
            description: 'Regálate una pausa de dos minutos para respirar con calma. Inhala profundo, exhala lento. A veces, ese pequeño espacio es suficiente para que el cuerpo y la mente vuelvan a alinearse.'
        },

        {
            title: '¿Sabías qué...?',
            description: 'El llanto emocional libera endorfinas, unas sustancias naturales que ayudan a aliviar el dolor y a generar una sensación de bienestar. Llorar no es un signo de debilidad: es una forma de liberar tensión y cuidar de ti.'
        }
    ]

    return <aside className="descubre">
        <Title nivel={2}>Descubre y aprende</Title>
        <div className="contenedor-general">
            {tarjetas.map((c, index) => {
                return <Card key={index} card={c} />
            })}
        </div>
        <ButtonGroup>
            <Button texto='Más curiosidades' to='#' />
        </ButtonGroup>
    </aside>

}
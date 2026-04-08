import { 
    iconoGrafico, 
    iconoCalendario, 
    iconoReflexion, 
    iconoLogro, 
    iconoPrivacidad, 
    iconoSugerencia 
} from "../../../../assets/images/public/inicio/beneficios"

import { Card, Titulo } from "../../../generales"
import "./Beneficios.css"

export const Beneficios = () => {
    const tarjetas = [
        {
            imagen: iconoCalendario,
            title: 'Calendario de emociones',
            description: 'Cada día registra tus emociones y observa tu evolución de forma sencilla y visual. Podrás identificar patrones y ver cómo cambian tus estados de ánimo a lo largo del tiempo.'
        },

        {
            imagen: iconoGrafico,
            title: 'Gráficos de progreso',
            description: 'Visualiza estadísticas semanales y mensuales para entender tus patrones emocionales. Gráficos claros te ayudarán a detectar tendencias y a reflexionar sobre tu bienestar.'
        },
        {
            imagen: iconoSugerencia,
            title: 'Recomendaciones',
            description: 'Recibe sugerencias y micro-tareas según cómo te hayas sentido cada día. Desde ejercicios de respiración hasta pequeños hábitos que fomenten tu equilibrio emocional.'
        },

        {
            imagen: iconoLogro,
            title: 'Rachas y logros',
            description: 'Celebra tu constancia y motívate con medallas y puntos de progreso. Cada registro cuenta y te anima a mantener hábitos saludables en tu rutina que te ayudarán.'
        },
        {
            imagen: iconoReflexion,
            title: 'Reflexión diaria',
            description: 'Espacios cortos para escribir notas, pensamientos o aprendizajes del día. Una manera de conectar contigo mismo y mejorar tu autoconciencia emocional.'
        },

        {
            imagen: iconoPrivacidad,
            title: 'Privacidad y control',
            description: 'Tus datos son solo tuyos. Podrás exportarlos, revisarlos o eliminarlos cuando quieras, garantizando que tu información esté siempre bajo tu control.'
        }
    ]

    return <section className="beneficios">
        <Titulo nivel={2}>Beneficios</Titulo>
        <div className="contenedor-general">
            {tarjetas.map((t, index) => {
                return <Card key={index} card={t} />
            })}
        </div>
    </section>

}

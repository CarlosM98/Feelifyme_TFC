import React from 'react';
import RuedaEmociones from '../../componentes/privada/mis_emociones/rueda/RuedaEmociones';

export const RegistroEmocion = () => {
    return (
        <div className="registro-emocion-page" style={{ padding: "0 15px" }}>
            <h2 style={{ textAlign: "center", marginTop: "40px" }}>¿Cómo te sientes hoy?</h2>
            <p style={{ textAlign: "center", color: "#666", marginBottom: "5px" }}>Selecciona una emoción de la rueda para tu registro diario.</p>
            <p style={{ textAlign: "center", color: "#3b82f6", fontSize: "0.9rem", marginBottom: "20px", fontWeight: "bold" }}>
                💡 Tip: Toca cualquier emoción para hacer zoom y verla en detalle. Pulsa en el centro para volver atrás.
            </p>
            <RuedaEmociones />
        </div>
    );
};

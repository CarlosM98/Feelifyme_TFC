import React from 'react';
import { RuedaEmociones } from '../../componentes/privada/registro_emocional/rueda/RuedaEmociones';
import { Actividades } from '../../componentes/privada/registro_emocional/actividades/Actividades';

export const RegistroEmocion = () => {
    return (
        <>
            <RuedaEmociones />
            <Actividades />
        </>
    );
};

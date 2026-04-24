import React from 'react';
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"
import { RegistroEmocionContainer } from './components/RegistroEmocionContainer';

export const RegistroEmocion = () => {
    useDocumentTitle('Registro Diario');
    return (
        <RegistroEmocionContainer />
    )
}

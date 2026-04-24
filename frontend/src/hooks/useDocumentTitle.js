import { useEffect } from 'react';

/**
 * Hook personalizado para cambiar el título de la pestaña del navegador.
 * @param {string} title - El título específico de la página.
 */
export const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | FeelifyMe`;
    }, [title]);
};

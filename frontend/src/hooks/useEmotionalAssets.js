import { ICONOS_ACTIVIDADES, COLORES_EMOCIONES } from '../utils/constants';

/**
 * Hook para centralizar el mapeo de datos del dominio (nombres) 
 * a recursos visuales (iconos y colores).
 */
export const useEmotionalAssets = () => {
    
    /**
     * Obtiene la ruta del icono de una actividad por su nombre.
     * @param {string} name - Nombre de la actividad.
     * @returns {string|null} - Ruta de la imagen o null si no existe.
     */
    const getActivityIcon = (name) => {
        if (!name) return null;
        return ICONOS_ACTIVIDADES[name.toLowerCase()] || null;
    };

    /**
     * Obtiene el color hexadecimal asociado a una emoción.
     * @param {string} name - Nombre de la emoción.
     * @returns {string} - Color hexadecimal o gris por defecto.
     */
    const getEmocionColor = (name) => {
        if (!name) return '#ccc';
        return COLORES_EMOCIONES[name.toLowerCase()] || '#ccc';
    };

    return { getActivityIcon, getEmocionColor };
};

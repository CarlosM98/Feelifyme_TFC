import { useState, useEffect } from 'react';
import { getEmocionesArbol } from '../services/diaryService';

export const useEmocionesArbol = () => {
    const [arbol, setArbol] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArbol = async () => {
            try {
                setLoading(true);
                const data = await getEmocionesArbol();
                setArbol(data);
            } catch (err) {
                console.error("Error al cargar árbol de emociones:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchArbol();
    }, []);

    return { arbol, loading, error };
};

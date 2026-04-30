import { useState, useEffect } from 'react';
import { getResumenDiario } from '../services/diaryService';

export const useResumenDiario = (fecha) => {
    const [resumen, setResumen] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!fecha) return;

        const fetchResumen = async () => {
            try {
                setLoading(true);
                const data = await getResumenDiario(fecha);
                setResumen(data);
                setError(null);
            } catch (err) {
                console.error("Error al cargar resumen diario:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchResumen();
    }, [fecha]);

    return { resumen, loading, error };
};

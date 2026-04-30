import { useState, useEffect } from 'react';
import { getActividades } from '../services/diaryService';

export const useActividades = () => {
    const [actividades, setActividades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchActividades = async () => {
            try {
                setLoading(true);
                const data = await getActividades();
                setActividades(data);
            } catch (err) {
                console.error("Error al cargar actividades:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchActividades();
    }, []);

    return { actividades, loading, error };
};

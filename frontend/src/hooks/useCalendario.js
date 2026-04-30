import { useState, useEffect } from 'react';
import { getCalendarioResumen } from '../services/diaryService';
import { format } from 'date-fns';

export const useCalendario = (fechaReferencia) => {
    const [datosCalendario, setDatosCalendario] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const mesQuery = format(fechaReferencia, "yyyy-MM");

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                setLoading(true);
                const data = await getCalendarioResumen(mesQuery);
                
                // Mapeamos el array que viene de la API a un objeto tipo: { "2024-04-21": {...data} }
                const mapaDatos = {};
                data.forEach(dia => {
                    mapaDatos[dia.fecha] = dia;
                });

                setDatosCalendario(mapaDatos);
                setError(null);
            } catch (err) {
                console.error("Error al cargar calendario:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        cargarDatos();
    }, [mesQuery]);

    return { datosCalendario, loading, error };
};

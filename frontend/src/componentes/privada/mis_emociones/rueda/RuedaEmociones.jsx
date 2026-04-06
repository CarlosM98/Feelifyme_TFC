import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';
import './RuedaEmociones.css';

const RuedaEmociones = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getBaseColor = (name) => {
        const lower = name.toLowerCase();
        // Usamos igualdad exacta para evitar que palabras como "Inspirado" sean capturadas por "ira"
        if (lower === 'ira') return '#f43f5e';
        if (lower === 'miedo') return '#d946ef';
        if (lower === 'disgusto') return '#f97316';
        if (lower === 'tristeza') return '#10b981';
        if (lower === 'felicidad') return '#eab308';
        if (lower === 'sorpresa') return '#0ea5e9';
        return null;
    };

    // Función recursiva para adaptar y limpiar los datos para ECharts
    const formatDataForEcharts = (nodes, parentColor = null) => {
        return nodes.map(node => {
            // Limpia paréntesis
            let nombreLimpio = node.name;
            if (nombreLimpio.includes('(')) {
                nombreLimpio = nombreLimpio.split('(')[0].trim();
            }

            // Asigna color base si es de nivel 1, si no, hereda y hace un pequeño fade (ECharts lo hace semi automático, pero lo forzamos visualmente si queremos)
            const color = getBaseColor(node.name) || parentColor;
            
            const newNode = {
                name: nombreLimpio,
                // Si es un nodo hoja (value), ECharts lo usa automáticamente para el tamaño de la cuña
                value: node.loc || 1, 
                itemStyle: {
                    color: color
                }
            };

            if (node.children && node.children.length > 0) {
                newNode.children = formatDataForEcharts(node.children, color);
                delete newNode.value; // Los nodos padre en echarts calculan su valor sumando a sus hijos
            }

            return newNode;
        });
    };

    useEffect(() => {
        const fetchArbol = async () => {
            try {
                const baseURL = 'http://localhost:8000';
                const response = await axios.get(`${baseURL}/api/emociones/arbol/`);
                // El endpoint de Django nos devuelve { name: "root", children: [...] }
                // Pasamos únicamente .children para que no haya hueco en el centro
                const echartsData = formatDataForEcharts(response.data.children);
                setData(echartsData);
                setLoading(false);
            } catch (err) {
                console.error("Error cargando la rueda de emociones", err);
                setError("No se pudo cargar la rueda de emociones");
                setLoading(false);
            }
        };

        fetchArbol();
    }, []);

    if (loading) return <div className="rueda-container">Cargando emociones...</div>;
    if (error) return <div className="rueda-container">{error}</div>;

    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}' // Muestra solo el nombre de la cuña en el tooltip
        },
        series: {
            type: 'sunburst',
            data: data,
            radius: [0, '95%'], // Empieza en 0 (sin hueco) y ocupa casi todo el tamaño
            sort: null, // Mantiene el orden exacto de los datos, sin ordenar por valor
            nodeClick: 'rootToNode', // [Crucial para móvil] Al hacer clic hace zoom en la rama
            emphasis: {
                focus: 'ancestor' // Al pasar el ratón, ilumina toda la rama desde el centro
            },
            itemStyle: {
                borderRadius: 2,
                borderWidth: 1.5,
                borderColor: 'white'
            },
            label: {
                rotate: 'radial', // ¡Esto hace que giren del centro hacia afuera perfectamente!
                color: '#ffffff',
                fontWeight: 'bold',
                minAngle: 0, // Lo forzamos a 0 para que no oculte nada por culpa del ángulo estrecho
                textBorderColor: 'rgba(0,0,0,0)', // Sin sombra extraña
                fontFamily: 'Inter, sans-serif'
            },
            levels: [
                {}, // Root configuration (vacío en nuestro caso)
                {
                    // Nivel 1 (Centro)
                    label: { rotate: 'tangential', fontSize: 13, color: '#fff'}
                },
                {
                    // Nivel 2
                    label: { align: 'center', fontSize: 11, minAngle: 0 }
                },
                {
                    // Nivel 3 (Anillo exterior)
                    label: { align: 'center', fontSize: 8.5, minAngle: 0 }
                }
            ]
        }
    };

    return (
        <div className="rueda-container">
            <ReactECharts
                option={option}
                style={{ height: '100%', width: '100%' }}
                opts={{ renderer: 'svg' }} // SVG renderer for sharp text
            />
        </div>
    );
};

export default RuedaEmociones;

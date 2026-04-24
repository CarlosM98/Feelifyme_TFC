import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';
import './RuedaEmociones.css';

import { Title } from "../../../../../componentes/generales";

export const RuedaEmociones = ({ seleccionadasActuales, onSelectEmociones }) => {
    const [rawArbol, setRawArbol] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleClick = (params) => {
        const emocionId = params.data?.id;
        if (!emocionId) return;

        const updated = seleccionadasActuales.includes(emocionId)
            ? seleccionadasActuales.filter(e => e !== emocionId)
            : [...seleccionadasActuales, emocionId];
        
        onSelectEmociones(updated);
    };

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
    const formatDataForEcharts = (nodes, parentColor = null, seleccionadasList = []) => {
        return nodes.map(node => {
            // Limpia paréntesis
            let nombreLimpio = node.name;
            if (nombreLimpio.includes('(')) {
                nombreLimpio = nombreLimpio.split('(')[0].trim();
            }

            // Asigna color base si es de nivel 1, si no, hereda
            const color = getBaseColor(node.name) || parentColor;

            // Lógica de feedback visual interactivo:
            const isSelected = seleccionadasList.includes(node.id);
            const hasSelection = seleccionadasList.length > 0;

            // Apagamos la seleccionada, dejamos el resto igual
            const opacity = hasSelection ? (isSelected ? 0.35 : 1) : 1;
            const borderColor = isSelected ? '#000000' : 'white';
            const borderWidth = isSelected ? 3 : 1.5;

            const newNode = {
                id: node.id,
                name: nombreLimpio,
                // Si es un nodo hoja (value), ECharts lo usa automáticamente para el tamaño de la cuña
                value: node.loc || 1,
                itemStyle: {
                    color: color,
                    opacity: opacity,
                    borderColor: borderColor,
                    borderWidth: borderWidth
                }
            };

            if (node.children && node.children.length > 0) {
                newNode.children = formatDataForEcharts(node.children, color, seleccionadasList);
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
                setRawArbol(response.data.children);
                setLoading(false);
            } catch (err) {
                console.error("Error cargando la rueda de emociones", err);
                setError("No se pudo cargar la rueda de emociones");
                setLoading(false);
            }
        };

        fetchArbol();

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Determinar tamaños de fuente según el ancho de pantalla
    const getFontSizes = () => {
        if (windowWidth < 480) {
            return { level1: 10, level2: 8.5, level3: 7 };
        } else if (windowWidth < 768) {
            return { level1: 11, level2: 9.5, level3: 8 };
        }
        return { level1: 13, level2: 11, level3: 8.5 };
    };

    const fonts = getFontSizes();


    if (loading) return <div className="rueda-container">Cargando emociones...</div>;
    if (error) return <div className="rueda-container">{error}</div>;

    const echartsData = rawArbol ? formatDataForEcharts(rawArbol, null, seleccionadasActuales) : null;

    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}' // Muestra solo el nombre de la cuña en el tooltip
        },
        series: {
            type: 'sunburst',
            data: echartsData,
            radius: [0, '95%'], // Empieza en 0 (sin hueco) y ocupa casi todo el tamaño
            sort: null, // Mantiene el orden exacto de los datos, sin ordenar por valor
            nodeClick: windowWidth < 768 ? 'rootToNode' : false, // [Crucial] Zoom solo en móvil
            emphasis: {
                focus: 'ancestor' // Al pasar el ratón, ilumina toda la rama desde el centro
            },
            itemStyle: {
                borderRadius: 2
            },
            label: {
                rotate: 'radial', // ¡Esto hace que giren del centro hacia afuera perfectamente!
                color: '#ffffff',
                fontWeight: 'bold',
                minAngle: 0, // Lo forzamos a 0 para que no oculte nada por culpa del ángulo estrecho
                textBorderColor: 'rgba(0,0,0,0)', // Sin sombra extraña
                fontFamily: 'emociones-font, sans-serif'
            },


            levels: [
                {}, // Root configuration (vacío en nuestro caso)
                {
                    // Nivel 1 (Centro)
                    label: { rotate: 'radial', fontSize: fonts.level1, color: '#fff', align: 'center' }
                },
                {
                    // Nivel 2
                    label: { align: 'center', fontSize: fonts.level2, minAngle: 0 }
                },
                {
                    // Nivel 3 (Anillo exterior)
                    label: { align: 'center', fontSize: fonts.level3, minAngle: 0 }
                }
            ]

        }
    };

    return (
        <section className="rueda-seccion-container">
            <Title className="rueda-titulo">¿Cómo te sientes hoy?</Title>
            <p className="rueda-descripcion">Selecciona una emoción de la rueda para tu registro diario.</p>
            <p className="rueda-tip">
                💡 Tip: Toca cualquier emoción para hacer zoom y verla en detalle. Pulsa en el centro para volver atrás.
            </p>
            <div className="rueda-container">
                <ReactECharts
                    option={option}
                    style={{ height: '100%', width: '100%' }}
                    opts={{ renderer: 'svg' }} // SVG renderer for sharp text
                    onEvents={{ click: handleClick }}
                />
            </div>
        </section>
    );
};


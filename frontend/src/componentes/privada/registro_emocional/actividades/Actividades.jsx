import { useState, useEffect } from "react";
import axios from "axios";

import { caminar, cocinar, correr, deporte, socializar, tocar_instrumento, leer, meditar } from "../../../../assets/images/private/registro_emocional";

import './actividades.css'

import { Titulo } from "../../../generales";

export const Actividades = () => {

    const iconosActividades = {
        "caminar": caminar,
        "cocinar": cocinar,
        "correr": correr,
        "deporte": deporte,
        "socializar": socializar,
        "tocar_instrumento": tocar_instrumento,
        "leer": leer,
        "meditar": meditar
    }

    const [actividades, setActividades] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/actividades/')
            .then(res => setActividades(res.data))
            .catch(err => console.error(err));
    }, [])


    return (
        <section className="contenedor-actividades">
            <Titulo nivel={2} className="titulo-actividades">Actividades</Titulo>
            <ul className="actividades-lista">
                {actividades.map(act => (
                    <li key={act.id} className="actividad-item">
                        <img src={iconosActividades[act.nombre]} alt={act.nombre} className="actividad-item-img" />
                        <span className="titulo-texto">{act.nombre}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
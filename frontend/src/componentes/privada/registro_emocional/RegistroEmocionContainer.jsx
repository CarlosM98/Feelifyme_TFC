import { useState } from "react";
import { RuedaEmociones, Actividades, NotasDiarias } from "./";
import { GrupoBotones } from "../../generales/grupo-botones/GrupoBotones";
import { Boton } from "../../generales/botons/Boton";
import axios from "axios";

export const RegistroEmocionContainer = () => {

    const [emociones, setEmociones] = useState([])
    const [actividades, setActividades] = useState([])
    const [nota, setNota] = useState("")

    const guardar = async () => {
        const payload = {
            fecha: new Date().toISOString().split("T")[0],
            notas: nota,
            emociones,
            actividades
        }

        let token = localStorage.getItem("access") || "";
        token = token.replace(/['"]+/g, '').trim(); // Elimina comillas o espacios accidentales

        try {
            await axios.post("http://localhost:8000/api/registro-diario/", payload, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            // alert("Registro guardado exitosamente!")
            setNota("");
            setEmociones([]);
            setActividades([]);
        } catch (error) {
            console.error(error)
            if (error.response) {
                alert("Error del servidor: " + JSON.stringify(error.response.data));
            } else {
                alert("Error de red: " + error.message);
            }
        }
    }

    return <>
        <RuedaEmociones
            seleccionadasActuales={emociones}   // Ojos: Toma tu array, léelo para pintarte
            onSelectEmociones={setEmociones}    // Boca: Toma la función para poder modificar el array
        />
        <Actividades
            seleccionadasActuales={actividades}
            onSelectActividades={setActividades}
        />
        <NotasDiarias value={nota} onChangeNota={setNota} />

        <GrupoBotones>
            <Boton texto="Guardar registro" onClick={guardar} />
        </GrupoBotones>
    </>
}
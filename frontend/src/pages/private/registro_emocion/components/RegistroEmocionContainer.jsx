import { useState } from "react";
import { RuedaEmociones, Actividades, NotasDiarias } from "./";
import { ButtonGroup, Button } from "../../../../componentes/generales";
import { postRegistroDiario } from "../../../../services/diaryService";

export const RegistroEmocionContainer = () => {

    const [emociones, setEmociones] = useState([])
    const [actividades, setActividades] = useState([])
    const [nota, setNota] = useState("")
    const [enviando, setEnviando] = useState(false)

    const guardar = async () => {
        if (emociones.length === 0) {
            alert("Por favor, selecciona al menos una emoción.");
            return;
        }

        const payload = {
            fecha: new Date().toISOString().split("T")[0],
            notas: nota,
            emociones,
            actividades
        }

        try {
            setEnviando(true);
            await postRegistroDiario(payload);
            
            // Si tiene éxito, limpiamos el formulario
            setNota("");
            setEmociones([]);
            setActividades([]);
            alert("¡Registro guardado exitosamente!");
        } catch (error) {
            console.error("Error al guardar registro:", error);
            alert("Hubo un error al guardar tu registro. Inténtalo de nuevo.");
        } finally {
            setEnviando(false);
        }
    }

    return <>
        <RuedaEmociones
            seleccionadasActuales={emociones}
            onSelectEmociones={setEmociones}
        />
        <Actividades
            seleccionadasActuales={actividades}
            onSelectActividades={setActividades}
        />
        <NotasDiarias value={nota} onChangeNota={setNota} />

        <ButtonGroup>
            <Button 
                texto={enviando ? "Guardando..." : "Guardar registro"} 
                onClick={guardar} 
                disabled={enviando}
            />
        </ButtonGroup>
    </>
}
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { registerRequest } from "../../../../services/authService"

export const Registro = () => {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        nombre: '',
        apellido1: '',
        apellido2: '',
        correo: '',
        contrasenha: '',
        confirmarContrasenha: ''
    })

    const [errores, setErrores] = useState({})
    const [mensajes, setMensajes] = useState(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const onChange = (e) => { 
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setErrores({})
        setMensajes(null)

        // Validaciones básicas
        if (!form.nombre || !form.apellido1 || !form.correo || !form.contrasenha || !form.confirmarContrasenha) {
            setMensajes("Todos los campos obligatorios deben estar completos")
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(form.correo)) {
            setErrores({ correo: "Correo inválido" })
            return
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
        if (!passwordRegex.test(form.contrasenha)) {
                setErrores({ contrasenha: "Debe tener 8 caracteres, mayúscula, minúscula, número y símbolo" })
            return
        }

        if (form.contrasenha !== form.confirmarContrasenha) {
            setMensajes("Las contraseñas no coinciden")
            return
        }

        try {
            setLoading(true)
            const data = await registerRequest(form);
            setMensajes(data.message)
            setSuccess(true)
        } catch (error) {
            if (error.response)
                setMensajes("Error: " + JSON.stringify(error.response.data))
            else
                setMensajes("Error de conexión con el servidor")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => navigate("/login"), 2000);
            return () => clearTimeout(timer);
        }
    }, [success, navigate])

    return <form onSubmit={onSubmit} className="form">
        <div className="conjunto">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={onChange} placeholder="Nombre" disabled={loading} />
        </div>

        <div className="conjunto">
            <label htmlFor="apellido1">Primer apellido</label>
            <input type="text" id="apellido1" name="apellido1" value={form.apellido1} onChange={onChange} placeholder="Primer apellido" disabled={loading} />
        </div>

        <div className="conjunto">
            <label htmlFor="apellido2">Segundo apellido</label>
            <input type="text" id="apellido2" name="apellido2" value={form.apellido2} onChange={onChange} placeholder="Segundo apellido" disabled={loading} />
        </div>

        <div className="conjunto">
            <label htmlFor="correo">Correo electrónico</label>
            <input type="email" id="correo" name="correo" value={form.correo} onChange={onChange} placeholder="email@ejemplo.com" disabled={loading} />
            {errores.correo && <p className="error">{errores.correo}</p>}
        </div>

        <div className="conjunto">
            <label htmlFor="contrasenha">Contraseña</label>
            <input type="password" id="contrasenha" name="contrasenha" value={form.contrasenha} onChange={onChange} placeholder="********" disabled={loading} />
            {errores.contrasenha && <p className="error">{errores.contrasenha}</p>}
        </div>

        <div className="conjunto">
            <label htmlFor="confirmarContrasenha">Confirmar contraseña</label>
            <input type="password" id="confirmarContrasenha" name="confirmarContrasenha" value={form.confirmarContrasenha} onChange={onChange} placeholder="********" disabled={loading} />
        </div>

        {mensajes && <p className={success ? "success-msg" : "error"}>{mensajes}</p>}

        <button disabled={loading} type="submit">
            { loading ? "Enviando..." : "Registrarme" }
        </button>
    </form>
}
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../../../context/AuthContext";
import { loginRequest } from "../../../../services/authService";
import "./Login.css"

export const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [form, setForm] = useState({
        usuario: '',
        contrasenha: ''
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const onChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!form.usuario || !form.contrasenha) {
            setError("Por favor, rellena todos los campos.");
            return
        }

        try {
            setLoading(true);
            setError("");
            const data = await loginRequest(form.usuario, form.contrasenha);

            // Guardamos los tokens en el contexto global
            login(data.access, data.refresh);
            
            // Redirigimos al área privada
            navigate("/mis-emociones")
        } catch (err) {
            if (err.response?.status === 401) {
                setError("Usuario o contraseña incorrectos");
            } else {
                setError("Error al conectar con el servidor. Inténtalo más tarde.");
            }
        } finally {
            setLoading(false);
        }
    }

    return <>
        <form onSubmit={onSubmit} className="form">
            <div className="conjunto">
                <label htmlFor="usuario">Email</label>
                <input 
                    type="email" 
                    id="usuario" 
                    name="usuario" 
                    value={form.usuario} 
                    onChange={onChange} 
                    placeholder="Correo electrónico" 
                    disabled={loading}
                />
            </div>

            <div className="conjunto">
                <label htmlFor="contrasenha">Contraseña</label>
                <input 
                    type="password" 
                    id="contrasenha" 
                    name="contrasenha" 
                    value={form.contrasenha} 
                    onChange={onChange} 
                    placeholder="Contraseña" 
                    disabled={loading}
                />
            </div>

            {error && <p className="error">{error}</p>}

            <Link to="#">He olvidado mi contraseña</Link>

            <button type="submit" disabled={loading}>
                {loading ? "Entrando..." : "Enviar"}
            </button>

            <p>¿No estás registrado?</p>
            <Link to="/registro">Registrarse</Link>
        </form>
    </>
}
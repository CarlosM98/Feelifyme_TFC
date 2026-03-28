import { useState } from "react"
import { Link } from "react-router-dom"
import "./Login.css"
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const navigate = useNavigate();
    const { setLoggedIn } = useOutletContext()

    const [form, setForm] = useState({
        usuario: '',
        contrasenha: ''
    })

    const onChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value

        })
    }

    const [error, setError] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!form.usuario || !form.contrasenha) {
            return
        }

        try {
            const response = await axios.post(
                "http://localhost:8000/api/users/login/",
                {
                    username: form.usuario,
                    password: form.contrasenha
                }
            )

            localStorage.setItem("access", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);

            setLoggedIn(true);
            navigate("/calendario")
        } catch (err) {
            if (err.response?.status === 401)
                setError("Usuario o contraseña incorrectos")
            else
                setError("Error inesperado")
        }
    }

    return <>
        <form onSubmit={onSubmit} className="form">
            <div className="conjunto">
                <label htmlFor="usuario">Email</label>
                <input type="email" id="usuario" name="usuario" value={form.usuario} onChange={onChange} placeholder="Correo electrónico" />
            </div>

            <div className="conjunto">
                <label htmlFor="contrasenha">Contraseña</label>
                <input type="password" id="contrasenha" name="contrasenha" value={form.contrasenha} onChange={onChange} placeholder="Contraseña" />
            </div>

            {error && <p className="error">{error}</p>}

            <Link to="#">He olvidado mi contraseña</Link>

            <button type="submit">Enviar</button>

            <p>¿No estás registrado?</p>
            <Link to="/registro">Registrarse</Link>
        </form>
    </>
}

export default Login
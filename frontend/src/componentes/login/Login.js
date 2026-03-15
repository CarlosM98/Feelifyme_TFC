import { useState } from "react"
import { Link } from "react-router-dom"
import "./Login.css"

const Login = () => {

    const [form, setForm] = useState({
        usuario: '',
        contrasenha: ''
        })

        const onChange = (e) => { 
            setForm({ ...form, [e.target.name]: e.target.value 

            })
        }

    const onSubmit = (e) => { 
        e.preventDefault()
        console.log("Datos enviados:", form)
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

            <Link to="#">He olvidado mi contraseña</Link>

            <button type="submit">Enviar</button>

            <p>¿No estás registrado?</p>
            <Link to="/registro">Registrarse</Link>
        </form>
    </>
}

export default Login
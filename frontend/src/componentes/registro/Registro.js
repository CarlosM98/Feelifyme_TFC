import { useState } from "react"

const Registro = () => {

    const [form, setForm] = useState({
        nombre: '',
        apellido1: '',
        apellido2: '',
        correo: '',
        contrasenha: '',
        confirmarContrasenha: ''
        })

        const onChange = (e) => { 
            setForm({ ...form, [e.target.name]: e.target.value 

            })
        }

    const onSubmit = (e) => { 
        e.preventDefault()
        console.log("Datos enviados:", form)
    }

        return <form onSubmit={onSubmit} className="form">
        <div className="conjunto">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={onChange} placeholder="Ruth" />
        </div>

        <div className="conjunto">
            <label htmlFor="apellido1">Primer apellido</label>
            <input type="text" id="apellido1" name="apellido1" value={form.apellido1} onChange={onChange} placeholder="ruth@gmail.com" />
        </div>

        <div className="conjunto">
            <label htmlFor="apellido2">Segundo apellido</label>
            <input type="text" id="apellido2" name="apellido2" value={form.apellido2} onChange={onChange} placeholder="Pérez" />
        </div>

        <div className="conjunto">
            <label htmlFor="correo">Correo electrónico</label>
            <input type="email" id="correo" name="correo" value={form.correo} onChange={onChange} placeholder="ruth@gmail.com" />
        </div>

        <div className="conjunto">
            <label htmlFor="contrasenha">Contraseña</label>
            <input type="password" id="contrasenha" name="contrasenha" value={form.contrasenha} onChange={onChange} placeholder="Contraseña" />
        </div>

        <div className="conjunto">
            <label htmlFor="confirmaContrasenha">Confirmar contraseña</label>
            <input type="password" id="confirmaContrasenha" name="confirmaContrasenha" value={form.confirmarContrasenha} onChange={onChange} placeholder="Contraseña"></input>
        </div>

        <button type="submit">Enviar</button>
    </form>

}

export default Registro
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { iconoLogo, iconoAcceso } from '../../../assets/images/menu'
import './nav.css'


export const Nav = () => {
    return (
        <>
            <Link to='/'>
                <img src={iconoLogo} alt='logo' className="logo-nav" />
            </Link>

            <input type="checkbox" id="menu-hamb" />
            <label htmlFor="menu-hamb" className="hamburguesa"></label>

            <nav className="nav">
                <ul className="lista-menu">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                    <li><Link to="/como-funciona">Cómo Funciona</Link></li>
                    <li><Link to="/curiosidades">Curiosidades</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
            <Link to="/login" className="acceso-nav">
                <img src={iconoAcceso} alt="acceso" />
            </Link>
        </>
    )
}
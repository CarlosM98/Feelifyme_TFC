import { Link, NavLink } from "react-router-dom"
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
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? "activo" : "")}>Inicio</NavLink></li>
                    <li><NavLink to="/sobre-nosotros" className={({ isActive }) => (isActive ? "activo" : "")}>Sobre Nosotros</NavLink></li>
                    <li><NavLink to="/como-funciona" className={({ isActive }) => (isActive ? "activo" : "")}>Cómo Funciona</NavLink></li>
                    <li><NavLink to="/curiosidades" className={({ isActive }) => (isActive ? "activo" : "")}>Curiosidades</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => (isActive ? "activo" : "")}>Contacto</NavLink></li>
                </ul>
            </nav>
            <Link to="/login" className="acceso-nav">
                <img src={iconoAcceso} alt="acceso" />
            </Link>
        </>
    )
}
import { Link } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"
import { iconoLogo } from '../../../assets/images/menu'
import { iconoLogout } from '../../../assets/images/private/menu'

export const PrivateNav = () => {
    const { logout } = useAuth();

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
                    <li><Link to="/calendario">Mis emociones</Link></li>
                    <li><Link to="/estadisticas">Mi evolución</Link></li>
                    <li><Link to="/recomendaciones">Recomendaciones</Link></li>
                    <li><Link to="/logros">Logros</Link></li>
                    <li><Link to="/perfil">Perfil</Link></li>
                </ul>
            </nav>

            <button onClick={logout} className="boton-logout" title="Cerrar sesión">
                <img src={iconoLogout} alt='logout' />
            </button>
        </>
    )
}
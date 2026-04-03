import { Link } from "react-router-dom"
import logo from '../../../assets/images/menu/logo.PNG'
import logout from '../../../assets/images/private/menu/logout.png'
export const PrivateNav = () => {
    return (
        <>
            <Link to='/'>
                <img src={logo} alt='logo' className="logo-nav" />
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

            <Link to="/logout" className="acceso-img">
                <img src={logout} alt='logout' />
            </Link>
        </>
    )
}
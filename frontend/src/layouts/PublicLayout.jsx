import { Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import Nav from "../componentes/Menu/public/Nav"
import Footer from "../componentes/generales/Footer/Footer"
import "../styles/layout.css"

const PublicLayout = () => {
    const { loggedIn } = useAuth();

    return <div className="estructura">
        <header>
            <Nav />
        </header>
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
}

export default PublicLayout
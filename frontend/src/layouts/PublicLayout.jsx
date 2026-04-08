import { Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Nav } from "../componentes/Menu"
import { Footer } from "../componentes/generales"
import "../styles/layout.css"

export const PublicLayout = () => {
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

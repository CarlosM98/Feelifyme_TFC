import { Outlet, useOutletContext } from "react-router-dom"
import Nav from "../componentes/Menu/public/Nav"
import Footer from "../componentes/generales/Footer/Footer"
import "../styles/layout.css"

const PublicLayout = () => {
    const context = useOutletContext();

    return <div className="estructura">
        <header>
            <Nav />
        </header>
        <main>
            <Outlet context={context} />
        </main>
        <Footer />
    </div>
}

export default PublicLayout
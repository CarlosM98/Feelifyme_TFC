import { Outlet } from "react-router-dom"
import { Nav } from "../componentes/Menu"
import { Footer } from "../componentes/generales"

export const PublicLayout = () => {
    return <>
        <header>
            <Nav />
        </header>
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
}
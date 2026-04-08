import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { PrivateNav } from "../componentes/Menu";
import { Footer } from "../componentes/generales";
import "../styles/layout.css";

export const PrivateLayout = () => {
    const { loggedIn } = useAuth();

    if (!loggedIn) {
        return <Navigate to="/login" replace />
    }

    return (
        <div className="estructura">
            <header>
                <PrivateNav />
            </header>

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};



import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { PrivateNav } from "../componentes/Menu";
import { Footer } from "../componentes/generales";

export const PrivateLayout = () => {
    const { loggedIn } = useAuth();

    if (!loggedIn) {
        return <Navigate to="/login" replace />
    }

    return (
        <>
            <header>
                <PrivateNav />
            </header>

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

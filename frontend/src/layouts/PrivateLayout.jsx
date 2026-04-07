import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { PrivateNav } from "../componentes/Menu/private/PrivateNav";
import Footer from "../componentes/generales/Footer/Footer";
import "../styles/layout.css";

const PrivateLayout = () => {
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

export default PrivateLayout;

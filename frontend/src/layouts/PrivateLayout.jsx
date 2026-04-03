import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { PrivateNav } from "../componentes/Menu/private/PrivateNav";
import Footer from "../componentes/generales/Footer/Footer";
import "../styles/layout.css";

const PrivateLayout = () => {
    const context = useOutletContext();
    const { loggedIn } = context;

    if (!loggedIn) {
        return <Navigate to="/login" replace />
    }

    return (
        <div className="estructura">
            <header>
                <PrivateNav />
            </header>

            <main>
                <Outlet context={context} />
            </main>

            <Footer />
        </div>
    );
};

export default PrivateLayout;

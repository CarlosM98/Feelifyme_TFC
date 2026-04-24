import { Outlet } from "react-router-dom";
import "../styles/layout.css";

export const LayoutApp = () => {
    return (
        <div className="estructura">
            <Outlet />
        </div>
    );
};
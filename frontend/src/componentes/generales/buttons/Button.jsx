import { Link } from "react-router-dom";
import './Button.css'
export const Button = ({ texto, to, onClick, type = "button" }) => {

    if (onClick || !to) {
        return (
            <button type={type} onClick={onClick} className="botones-generales">
                {texto}
            </button>
        );
    }

    return (
        <Link to={to} className="botones-generales">{texto}</Link>
    );
}
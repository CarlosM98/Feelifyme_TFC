import { Link } from "react-router-dom";
import './Boton.css'
export const Boton = ({ texto, to }) => {

    return <>
        <Link to={ to } className="botones-generales">{ texto }</Link>
    </>
}
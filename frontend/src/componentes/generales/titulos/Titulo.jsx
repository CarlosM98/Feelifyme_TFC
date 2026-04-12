import "./Titulo.css";

export const Titulo = ({ nivel = 2, children, className }) => {

    // Creamos el nombre de la etiqueta (ej: "h1", "h2")
    // La variable debe empezar con Mayúscula (Tag) para que React la reconozca como componente
    const Tag = `h${nivel}`;

    return <Tag className={className}>{children}</Tag>;
}
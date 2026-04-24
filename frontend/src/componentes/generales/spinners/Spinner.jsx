import './spinner.css';

export const Spinner = () => {
    return (
        <div className="spinner-container">
            <div className="spinner-loader"></div>
            <p className="spinner-texto">Cargando...</p>
        </div>
    );
};

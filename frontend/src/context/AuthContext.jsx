import { createContext, useContext, useState, useEffect } from "react";

// Creamos el contexto
const AuthContext = createContext();

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
    // Inicializamos el estado consultando el localStorage
    const [loggedIn, setLoggedIn] = useState(() => {
        return localStorage.getItem("access") !== null;
    });

    // En el futuro podría añadir aquí un estado 'user' para guardar nombre, email, etc.
    // const [user, setUser] = useState(null);

    const login = (accessToken, refreshToken) => {
        localStorage.setItem("access", accessToken);
        localStorage.setItem("refresh", refreshToken);
        setLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        setLoggedIn(false);
    };

    // Valor que se compartirá en toda la app
    const value = {
        loggedIn,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar la autenticación
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
};

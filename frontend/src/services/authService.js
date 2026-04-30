import api from '../api/axiosInstance';

/**
 * Realiza la petición de inicio de sesión.
 * @param {string} username - Correo o nombre de usuario.
 * @param {string} password - Contraseña.
 */
export const loginRequest = async (username, password) => {
    const response = await api.post('users/login/', { 
        username, 
        password 
    });
    return response.data;
};

/**
 * Realiza la petición de registro de un nuevo usuario.
 * @param {Object} userData - Datos completos del formulario de registro.
 */
export const registerRequest = async (userData) => {
    const response = await api.post('users/register/', userData);
    return response.data;
};

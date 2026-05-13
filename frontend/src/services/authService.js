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

/**
 * Obtiene los datos del perfil del usuario actual (GET).
 */
export const getMyProfile = async () => {
    const response = await api.get('users/me/');
    return response.data;
};

/**
 * Actualiza los datos del usuario o perfil actual (PUT).
 * @param {Object} data - Datos a actualizar (email, profile.nombre, etc.)
 */
export const updateProfile = async (data) => {
    const response = await api.put('users/me/', data);
    return response.data;
};

/**
 * Elimina la cuenta del usuario actual de forma permanente (DELETE).
 */
export const deleteAccount = async () => {
    const response = await api.delete('users/me/');
    return response.data;
};

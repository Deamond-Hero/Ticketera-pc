export const validateLogin = (form) => {
    const errors = { email: '', password: '' };

    if (!form.email) {
        errors.email = "Debes introducir un email";
    }

    if (!form.password) {
        errors.password = "Debes introducir una contraseña";
    }

    return errors;
};
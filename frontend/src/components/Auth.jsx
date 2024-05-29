import React, { useState } from "react";
import { Link } from "react-router-dom";


const Auth = () => {

    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const validate = () => {
        const errors = { email: '', password: '', confirmPassword: '' };
    
        if (!form.email) {
            errors.email = "El email es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = "El email no es válido";
        }
    
        if (!form.password) {
            errors.password = "La contraseña es obligatoria";
        } else if (form.password.length < 6) {
            errors.password = "La contraseña debe tener al menos 6 caracteres";
        } else if (!/[A-Z]/.test(form.password)) {
            errors.password = "La contraseña debe tener al menos una letra mayúscula";
        } else if (!/[a-z]/.test(form.password)) {
            errors.password = "La contraseña debe tener al menos una letra minúscula";
        } else if (!/[0-9]/.test(form.password)) {
            errors.password = "La contraseña debe tener al menos un número";
        } else if (!/[^A-Za-z0-9]/.test(form.password)) {
            errors.password = "La contraseña debe tener al menos un carácter especial";
        }
    
        if (!form.confirmPassword) {
            errors.confirmPassword = "Debe confirmar la contraseña";
        } else if (form.password !== form.confirmPassword) {
            errors.confirmPassword = "Las contraseñas no coinciden";
        }
    
        return errors;
    };
    



    const valueChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (!validationErrors.email && !validationErrors.password && !validationErrors.confirmPassword) {
            // No hay errores, se puede proceder con el envío del formulario
            console.log("Formulario enviado", form);
        } else {
            // Hay errores, no se envía el formulario
            console.log("Errores en el formulario", validationErrors);
        }
    };

    return (
        <div>
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={form.email}
                        name="email"
                        onChange={valueChange}
                    />
                    {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                </div>
                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={form.password}
                        name="password"
                        onChange={valueChange}
                    />
                    {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
                </div>
                <div>
                    <button type="submit">Ingresar</button>
                </div>
            </form>
            <div>
                <Link><p>¿Has olvidado tu contraseña?</p></Link>
            </div>
        </div>
    );
};

export default Auth;
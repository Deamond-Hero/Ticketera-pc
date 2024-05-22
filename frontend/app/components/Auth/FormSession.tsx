"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import ButtonAuth from "./ButtonComponent";


interface FormLoginState {
    email: string;
    password: string;
    confirmPassword: string;
}

interface FormLoginErrors {
    email: string;
    password: string;
    confirmPassword: string;
}

const Auth: React.FC = () => {

    // const { data: session } = useSession()

    // const [form, setForm] = useState<FormLoginState>({
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    // });

    // const [errors, setErrors] = useState<FormLoginErrors>({
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    // });

    // const validate = (): FormLoginErrors => {
    //     const errors: FormLoginErrors = { email: '', password: '', confirmPassword: '' };

    //     if (!form.email) {
    //         errors.email = "El email es obligatorio";
    //     } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    //         errors.email = "El email no es válido";
    //     }

    //     if (!form.password) {
    //         errors.password = "La contraseña es obligatoria";
    //     } else if (form.password.length < 6) {
    //         errors.password = "La contraseña debe tener al menos 6 caracteres";
    //     } else if (!/[A-Z]/.test(form.password)) {
    //         errors.password = "La contraseña debe tener al menos una letra mayúscula";
    //     } else if (!/[a-z]/.test(form.password)) {
    //         errors.password = "La contraseña debe tener al menos una letra minúscula";
    //     } else if (!/[0-9]/.test(form.password)) {
    //         errors.password = "La contraseña debe tener al menos un número";
    //     } else if (!/[^A-Za-z0-9]/.test(form.password)) {
    //         errors.password = "La contraseña debe tener al menos un carácter especial";
    //     }

    //     if (!form.confirmPassword) {
    //         errors.confirmPassword = "Debe confirmar la contraseña";
    //     } else if (form.password !== form.confirmPassword) {
    //         errors.confirmPassword = "Las contraseñas no coinciden";
    //     }

    //     return errors;
    // };

    // const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setForm(prevForm => ({
    //         ...prevForm,
    //         [name]: value
    //     }));
    // };

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const validationErrors = validate();
    //     setErrors(validationErrors);

    //     if (!validationErrors.email && !validationErrors.password) {
    //         // No hay errores, se puede proceder con el envío del formulario
    //         console.log("Formulario enviado", form);
    //     } else {
    //         // Hay errores, no se envía el formulario
    //         console.log("Errores en el formulario", validationErrors);
    //     }
    // };

    return (
        //     <div>
        //         <form onSubmit={handleSubmit}>
        //             <div>
        //                 <label>Email</label>
        //                 <input
        //                     type="email"
        //                     value={form.email}
        //                     name="email"
        //                     onChange={valueChange}
        //                 />
        //                 {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        //             </div>
        //             <div>
        //                 <label>Contraseña</label>
        //                 <input
        //                     type="password"
        //                     value={form.password}
        //                     name="password"
        //                     onChange={valueChange}
        //                 />
        //                 {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
        //             </div>
        <div>
            <ButtonAuth />
        </div>
        // </form>
        // </div>
    );
};

export default Auth;
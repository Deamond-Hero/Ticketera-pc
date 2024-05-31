import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LoginService } from "../redux/actionsUser";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import api from "../utils/Api";

const Auth = () => {

    const dispatch = useDispatch()
    const dataUser = useSelector(state => state.dataUser)
    const navigate = useNavigate()
    useEffect(() => {

        console.log(dataUser)

    }, [dataUser])

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const validate = () => {
        const errors = { email: '', password: '' };

        if (!form.email) {
            errors.email = "El email es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = "El email no es válido";
        }

        if (!form.password) {
            errors.password = "La contraseña es obligatoria";
        } else if (form.password.length < 6) {
            errors.password = "La contraseña debe tener al menos 6 caracteres";

        } else if (!/[a-z]/.test(form.password)) {
            errors.password = "La contraseña debe tener al menos una letra minúscula";
        } else if (!/[0-9]/.test(form.password)) {
            errors.password = "La contraseña debe tener al menos un número";

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (!validationErrors.email && !validationErrors.password) {

            dispatch(LoginService(form))
            navigate("/dashboard")
            console.log(dataUser)


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
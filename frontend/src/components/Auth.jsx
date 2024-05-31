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
        <div className="bg-[#FFFFFF] text-text-dark w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h1 className="font-semibold text-5xl tracking-wide mb-6">Iniciar sesión</h1>
                <div className="flex flex-col gap-1">
                    <label>Email</label>
                    <input
                        type="email"
                        value={form.email}
                        name="email"
                        onChange={valueChange}
                        className="rounded-lg bg-[#FBFBFB] h-12 w-96 border border-text-dark text-text-dark px-2  focus:shadow-input-focus focus:outline-none focus:border-none"
                    />
                    {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                </div>
                <div className="flex flex-col gap-1">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={form.password}
                        name="password"
                        onChange={valueChange}
                        className="rounded-lg bg-[#FBFBFB] h-12 w-96 border border-text-dark text-text-dark px-2  focus:shadow-input-focus focus:outline-none focus:border-none"
                    />
                    {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
                </div>
                <div>
                    <button type="submit" className="h-12 w-96 rounded-lg text-[#FFFFFF] text-xl tracking-wide bg-default-btn">Ingresar</button>
                </div>
            </form>
            <div>
                <Link><p className="text-xl underline tracking-wide">¿Has olvidado tu contraseña?</p></Link>
            </div>
        </div>
    );
};

export default Auth;
import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LoginService } from "../redux/auth/actionsUser";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { validateLogin } from "../utils/validationLogin";

const Auth = () => {

    const dispatch = useDispatch()
    const dataUser = useSelector(state => state.auth.userData)
    const errorRequest = useSelector(state => state.auth.userMesaggeError)
    const navigate = useNavigate()
    const [flag, setFlag] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });


    useEffect(() => {
        if (errorRequest) {
            setFlag(true)
            setTimeout(() => {
                setFlag(false)
            }, 3000);
            setFlag(false)
        }
    }, [errorRequest])

    useEffect(() => {
        if (errors.email || errors.password) {
          setFlag(true);
          const timer = setTimeout(() => {
            setFlag(false);
          }, 3000);
    
          return () => clearTimeout(timer);
        }
      }, [errors]);


    const valueChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateLogin(form);
        setErrors(validationErrors);

        if (!validationErrors.email && !validationErrors.password) {

            dispatch(LoginService(form))
            navigate("/dashboard")
            console.log(dataUser)


            console.log("Formulario enviado", form);
        } else {

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
                </div>

                {flag && errors.email && <span style={{ color: "red" }}>{errors.email}</span>}

                <div className="flex flex-col gap-1">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={form.password}
                        name="password"
                        onChange={valueChange}
                        className="rounded-lg bg-[#FBFBFB] h-12 w-96 border border-text-dark text-text-dark px-2  focus:shadow-input-focus focus:outline-none focus:border-none"
                    />
                </div>

                {flag && errors.password && <span style={{ color: "red" }}>{errors.password}</span>}

                <div>
                    <button type="submit" className="h-12 w-96 rounded-lg text-[#FFFFFF] text-xl tracking-wide bg-default-btn">Ingresar</button>
                </div>
            </form>
            <div>
                <Link className="text-xl underline tracking-wide"><p>¿Has olvidado tu contraseña?</p></Link>
            </div>
        </div>
    );
};

export default Auth;
import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LoginService } from "../redux/actionsUser";
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
        const validationErrors = validateLogin();
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
                </div>

                {flag && errors.email && <span style={{ color: "red" }}>{errors.email}</span>}

                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={form.password}
                        name="password"
                        onChange={valueChange}
                    />
                </div>

                {flag && errors.password && <span style={{ color: "red" }}>{errors.password}</span>}

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
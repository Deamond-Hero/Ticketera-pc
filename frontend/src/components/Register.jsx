import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../utils/Api";
import axios from "axios";

 
const RegisterPage = () => {

  const [formState, setFormState] = useState({
    email: '',
    password: '',
    password2: '',
    errors: {}
  });

  const [apiError, setApiError] = useState({
    errorApi: '',
  })


  const onInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const validateForm = ()  => {

    const errors = {};

    if (!formState.email.includes('@') || formState.email === '') {
      errors.email = 'El email no es válido';
    }

    if (formState.password.length < 6 || formState.password === '') {
      errors.password = 'La contraseña debe tener al menos 6 caracteres, una letra minúscula y una mayúscula';
    }

  if (formState.password !== formState.password2) {
      errors.password = 'Las contraseñas no coinciden';
    }

    return errors;
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    // const dat = import.meta.env.NEXT_PUBLIC_BACKEND_URL

    // axios.post(`${dat}/auth/register`, formState)
    // .then(response => {
    //     console.log(response.data);
    // })
    // .catch(error => {
    //     console.log('Error en la solicitud POST:', error);
    // });



    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormState({
        ...formState,
        errors
      });
    } else {
      try {

        const response = await api.post('/auth/register', { email: formState.email, password : formState.password});
        console.log(response)
        console.log('Formulario enviado', response.data);

        if (response.error) {
          console.log(response.error);
          setFormState({
            ...formState,
            errors: response.error
          })

        setFormState({
            ...formState,
            errors: { apiError: response.error }
          });
        }

        setFormState({
          ...formState,
          errors: undefined
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label>Email
            <input
            type="email"
            required
            name="email"
            value={formState.email}
            onChange={onInputChange}
            placeholder="Ingrese su Email"
            />
        </label>

       {
         formState.errors && formState.errors.email && <p className="error">{formState.errors.email}</p>
       }
       <label>Password
            <input
            type="password"
            required
            name="password"
            value={formState.password}
            onChange={onInputChange}
            placeholder="Ingrese su Contraseña"
            />
       </label>
        {
          formState.errors.password && <p className="error">{formState.errors.password}</p>
        }

        <label>Password2
            <input
            type="password"
            required
            name="password2"
            value={formState.password2}
            onChange={onInputChange}
            placeholder="Confirme su Contraseña"
            />
        </label>

        {
          formState.errors.password2 && <p className="error">{formState.errors.password2}</p>
        }

        <button type="submit">Registrarse</button>
      </form>
      <Link to={'/Login'} > <span >¿Ya tienes una cuenta?</span> </Link>
    </div>
  );
};

export default RegisterPage;


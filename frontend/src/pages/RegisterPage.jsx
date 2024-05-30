import Link from "next/link";
import { useState } from "react";
import api from "../utils/Api";
 
export const RegisterPage = () => {

  const [formState, setFormState] = useState({
    email: '',
    password: '',
    password2: '',
    errors: {}
  });


  const onInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const validateForm = ()  => {

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

  const handleSubmit = async () => {
    event.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormState({
        ...formState,
        errors
      });
    } else {
      try {
        // const response = await fetchFromApi(basicUrl, 'POST', formState);
        const response = await api.post('/auth/register', formState);
        console.log('Formulario enviado', response.data);

        if (response.error) {
          console.error(response.error);
          setFormState({
            ...formState,
            errors: response.error
          })
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
        <input
          type="email"
          required
          name="email"
          value={formState.email}
          onChange={onInputChange}
          placeholder="Ingrese su Email"
        />
       {
         formState.errors && formState.errors.email && <p className="error">{formState.errors.email}</p>
       }
        <input
          type="password"
          required
          name="password"
          value={formState.password}
          onChange={onInputChange}
          placeholder="Ingrese su Contraseña"
        />

        {
          formState.errors.password && <p className="error">{formState.errors.password}</p>
        }

        <input
          type="password2"
          required
          name="password2"
          value={formState.password2}
          onChange={onInputChange}
          placeholder="Confirme su Contraseña"
        />

        {
          formState.errors.password2 && <p className="error">{formState.errors.password2}</p>
        }

        <button type="submit">Registrarse</button>
      </form>
      <Link to={'/login'} > <span >¿Ya tienes una cuenta?</span> </Link>
    </div>
  );
};


'use client';

import { useState } from 'react';

export default function Notification() {
  const [message, setMessage] = useState<string>('');
  const emailUser = 's15nodereact@gmail.com';

  const handleSend = async () => {
    if (message.trim() === '') {
      alert('El mensaje no puede estar vacío');
      return;
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailUser, message }),
      });

      if (response.ok) {
        alert('Email enviado con éxito');
        setMessage(''); // Resetear el input después de enviar
      } else {
        const data = await response.json();
        alert(`Hubo un error al enviar el email: ${data.message}`);
      }
    } catch (error) {
      console.error('Error enviando el email:', error);
      alert('Hubo un error al enviar el email');
    }
  };

  const handleCancel = () => {
    setMessage(''); // Resetear el input al cancelar
  };

  return (
    <div className='bg-gray-800 border-2 p-4'>
      <h1 className='text-white'>Enviar Email</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label className='text-white'>Ingrese Su mensaje</label>
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='w-full p-2 my-2'
        />
        <div className='flex justify-between'>
          <button
            type='button'
            onClick={handleCancel}
            className='bg-red-500 text-white px-4 py-2'
          >
            Cancelar
          </button>
          <button
            type='button'
            onClick={handleSend}
            className='bg-green-500 text-white px-4 py-2'
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
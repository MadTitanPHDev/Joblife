import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Usuario = () => {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3333/usuario')
      .then((response) => {
        setUsuario(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>{usuario.nome}</h1>
      <p>{usuario.email}</p>
    </div>
  );
};

export default Usuario;
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function ApostasMistas() {
  const { apostas } = useContext(AppContext);

  return (
    <div>
      <h2>Apostas Mistas Sugeridas</h2>
      <ul>
        {apostas.map((aposta, idx) => (
          <li key={idx}>{aposta.descricao}</li>
        ))}
      </ul>
    </div>
  );
}
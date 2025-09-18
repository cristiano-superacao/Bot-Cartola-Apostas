import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function ProximosJogos() {
  const { proximosJogos } = useContext(AppContext);

  if (!proximosJogos.length) return <p>Nenhum jogo encontrado.</p>;

  return (
    <div className="proximos-jogos">
      <h2>Próximos Jogos</h2>
      <ul>
        {proximosJogos.map((jogo, idx) => (
          <li key={idx}>
            {jogo.timeCasa} x {jogo.timeFora} - {jogo.data}
          </li>
        ))}
      </ul>
    </div>
  );
}
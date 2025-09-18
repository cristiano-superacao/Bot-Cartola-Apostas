import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [dadosCampeonatos, setDadosCampeonatos] = useState({});
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);
  const [times, setTimes] = useState([]);
  const [apostas, setApostas] = useState([]);
  const [proximosJogos, setProximosJogos] = useState([]);

  return (
    <AppContext.Provider value={{
      dadosCampeonatos, setDadosCampeonatos,
      loading, setLoading,
      erro, setErro,
      times, setTimes,
      apostas, setApostas,
      proximosJogos, setProximosJogos
    }}>
      {children}
    </AppContext.Provider>
  );
}
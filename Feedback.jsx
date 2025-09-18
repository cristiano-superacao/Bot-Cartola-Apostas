import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Feedback() {
  const { loading, erro } = useContext(AppContext);

  if (loading) return <div className="loading">Carregando...</div>;
  if (erro) return <div className="erro">{erro}</div>;
  return null;
}
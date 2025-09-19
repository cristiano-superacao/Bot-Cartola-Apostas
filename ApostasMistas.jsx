import React, { useEffect, useState } from "react";
import "./ApostasMistas.css";

export default function ApostasMistas() {
  const [apostas, setApostas] = useState([]);
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    fetch("/api/apostas")
      .then((res) => res.json())
      .then(setApostas);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/apostas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ descricao }),
    });
    const novaAposta = await res.json();
    setApostas([...apostas, novaAposta]);
    setDescricao("");
  };

  return (
    <div className="apostas-container">
      <h2>Apostas Mistas</h2>
      <form onSubmit={handleSubmit} className="apostas-form">
        <input
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição da aposta"
          required
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul className="apostas-list">
        {apostas.map((aposta) => (
          <li key={aposta.id}>{aposta.descricao}</li>
        ))}
      </ul>
    </div>
  );
}
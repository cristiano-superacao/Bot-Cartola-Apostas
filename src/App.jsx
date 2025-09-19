import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getCurrentDate, getCurrentRound } from './utils/dateUtils'
import { AppProvider } from './context/AppContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Fantasy from './pages/Fantasy'
import Betting from './pages/Betting'
import History from './pages/History'

const DATA_INICIO_TEMPORADA = '2025-04-01'

export async function buscarDadosCampeonato(apiUrl) {
  try {
    const resp = await fetch(apiUrl);
    if (!resp.ok) throw new Error('Erro ao buscar dados');
    return await resp.json();
  } catch (e) {
    throw e;
  }
}

function App() {
  const [data, setData] = useState(getCurrentDate())
  const [rodada, setRodada] = useState(getCurrentRound(DATA_INICIO_TEMPORADA))

  const atualizarDados = () => {
    setData(getCurrentDate())
    setRodada(getCurrentRound(DATA_INICIO_TEMPORADA))
    // Aqui você pode disparar a atualização dos dados dos campeonatos
  }

  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <main className="flex-1">
            <button
              onClick={atualizarDados}
              className="botao-atualizar"
              aria-label="Atualizar dados dos campeonatos"
            >
              Atualizar Campeonatos
            </button>
            <p>
              Data atual: {data.dia}/{data.mes}/{data.ano}
            </p>
            <p>Rodada atual: {rodada}</p>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fantasy" element={<Fantasy />} />
              <Route path="/apostas" element={<Betting />} />
              <Route path="/historico" element={<History />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  )
}

export default App


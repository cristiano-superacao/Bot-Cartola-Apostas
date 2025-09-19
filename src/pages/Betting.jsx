import { useState } from 'react'

const Betting = () => {
  const [loading, setLoading] = useState(false)
  const [betType, setBetType] = useState('mixed')

  const betTypes = [
    { id: 'mixed', name: 'Apostas Mistas', description: 'Combinação de diferentes mercados' },
    { id: 'goals', name: 'Gols', description: 'Apostas em total de gols' },
    { id: 'results', name: 'Resultados', description: 'Vitória, empate ou derrota' }
  ]

  const handleGenerateBets = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Bilhetes gerados com sucesso! (Demo)')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Apostas Esportivas
          </h1>
          <p className="text-xl text-gray-600">
            Bilhetes otimizados com odds entre 5 e 150
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Tipo de Aposta</h2>
          
          <div className="grid gap-4 mb-8">
            {betTypes.map((type) => (
              <div
                key={type.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  betType === type.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setBetType(type.id)}
              >
                <h3 className="text-lg font-semibold mb-1">{type.name}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleGenerateBets}
              disabled={loading}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                loading
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {loading ? 'Gerando Bilhetes...' : 'Gerar Bilhetes de Apostas'}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">Odds Baixas</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">5-15</div>
            <p className="text-gray-600 text-sm">Maior segurança, menor retorno</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">Odds Médias</h3>
            <div className="text-3xl font-bold text-orange-600 mb-2">15-50</div>
            <p className="text-gray-600 text-sm">Equilíbrio entre risco e retorno</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">Odds Altas</h3>
            <div className="text-3xl font-bold text-red-600 mb-2">50-150</div>
            <p className="text-gray-600 text-sm">Alto risco, alto retorno</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Betting
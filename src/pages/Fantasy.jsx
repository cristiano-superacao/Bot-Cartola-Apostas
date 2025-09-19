import { useState } from 'react'

const Fantasy = () => {
  const [selectedLeague, setSelectedLeague] = useState('cartola')
  const [loading, setLoading] = useState(false)

  const leagues = [
    { id: 'cartola', name: 'Cartola FC', budget: 100 },
    { id: 'premier', name: 'Premier League Fantasy', budget: 100 }
  ]

  const handleGenerateTeam = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      alert('Time gerado com sucesso! (Demo)')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fantasy Game
          </h1>
          <p className="text-xl text-gray-600">
            Geração automática de times otimizados
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Selecionar Liga</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {leagues.map((league) => (
              <div
                key={league.id}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-colors ${
                  selectedLeague === league.id
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedLeague(league.id)}
              >
                <h3 className="text-lg font-semibold mb-2">{league.name}</h3>
                <p className="text-gray-600">Orçamento: {league.budget}M</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleGenerateTeam}
              disabled={loading}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                loading
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {loading ? 'Gerando Times...' : 'Gerar 5 Times Otimizados'}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-semibold mb-6">Funcionalidades</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">5</span>
              </div>
              <h3 className="font-semibold mb-2">5 Times Diferentes</h3>
              <p className="text-gray-600 text-sm">Variações otimizadas para diferentes estratégias</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">AI</span>
              </div>
              <h3 className="font-semibold mb-2">IA Avançada</h3>
              <p className="text-gray-600 text-sm">Algoritmos de otimização baseados em dados</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">📊</span>
              </div>
              <h3 className="font-semibold mb-2">Análise Completa</h3>
              <p className="text-gray-600 text-sm">Estatísticas detalhadas de cada jogador</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fantasy
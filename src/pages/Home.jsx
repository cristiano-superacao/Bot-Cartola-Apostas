import { Link } from 'react-router-dom'

const Home = () => {
  const features = [
    {
      title: 'Fantasy Game',
      description: 'Geração automática de 5 times otimizados para Cartola FC e Premier League Fantasy',
      link: '/fantasy',
      color: 'bg-green-600'
    },
    {
      title: 'Apostas Esportivas',
      description: 'Criação de bilhetes de apostas mistas com odds entre 5 e 150',
      link: '/apostas',
      color: 'bg-blue-600'
    },
    {
      title: 'Histórico Completo',
      description: 'Análise detalhada de performance e estatísticas históricas',
      link: '/historico',
      color: 'bg-orange-600'
    }
  ]

  const stats = [
    { label: 'Times Gerados', value: '150+' },
    { label: 'Apostas Analisadas', value: '500+' },
    { label: 'Taxa de Acerto', value: '78%' },
    { label: 'Usuários Ativos', value: '1.2K+' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              FutAnalytics
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Plataforma completa para análise de futebol e apostas esportivas
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto text-white/90">
              Geração automática de times para fantasy games, criação de bilhetes de apostas otimizados 
              e análise detalhada de performance baseada em dados precisos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/fantasy"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Começar Fantasy
              </Link>
              <Link
                to="/apostas"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Ver Apostas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades Principais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ferramentas poderosas para maximizar seus resultados no fantasy e apostas esportivas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border p-8 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  <span className="text-white font-bold text-lg">
                    {feature.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
                >
                  Explorar
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl mb-12 text-green-100 max-w-2xl mx-auto">
            Junte-se a milhares de usuários que já estão maximizando seus resultados com nossa plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/fantasy"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Criar Time Fantasy
            </Link>
            <Link
              to="/apostas"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Gerar Apostas
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target, TrendingUp, History, BarChart3, Users, Trophy, Zap, Shield } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Target,
      title: 'Fantasy Game',
      description: 'Geração automática de 5 times otimizados para Cartola FC e Premier League Fantasy',
      link: '/fantasy',
      color: 'bg-primary'
    },
    {
      icon: TrendingUp,
      title: 'Apostas Esportivas',
      description: 'Criação de bilhetes de apostas mistas com odds entre 5 e 150',
      link: '/apostas',
      color: 'bg-secondary'
    },
    {
      icon: History,
      title: 'Histórico Completo',
      description: 'Acompanhe o desempenho de seus times e apostas anteriores',
      link: '/historico',
      color: 'bg-accent'
    }
  ]

  const stats = [
    { label: 'Times Gerados', value: '1,247', icon: Users },
    { label: 'Apostas Criadas', value: '892', icon: TrendingUp },
    { label: 'Taxa de Acerto', value: '73%', icon: Trophy },
    { label: 'Usuários Ativos', value: '2,156', icon: BarChart3 }
  ]

  const championships = [
    { name: 'Campeonato Brasileiro', status: 'Ativo', matches: 24 },
    { name: 'Premier League', status: 'Ativo', matches: 18 },
    { name: 'Champions League', status: 'Ativo', matches: 12 }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6">
              FutAnalytics
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Análise inteligente de futebol para Fantasy Games e Apostas Esportivas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/fantasy">
                  <Target className="w-5 h-5 mr-2" />
                  Criar Times
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/apostas">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Gerar Apostas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="stats-card text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Funcionalidades Principais</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ferramentas avançadas baseadas em dados reais para maximizar seus resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="card-hover animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader>
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link to={feature.link}>
                        Acessar
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Championships Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Campeonatos Analisados</h2>
            <p className="text-lg text-muted-foreground">
              Cobertura completa dos principais campeonatos de futebol
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {championships.map((championship, index) => (
              <Card key={index} className="team-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{championship.name}</CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {championship.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Próximas rodadas</span>
                    <span className="font-semibold">{championship.matches} jogos</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-primary to-accent text-white">
            <CardContent className="p-12 text-center">
              <Zap className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl font-bold mb-4">
                Pronto para começar?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Junte-se a milhares de usuários que já estão usando dados inteligentes 
                para melhorar seus resultados no fantasy e nas apostas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                  <Link to="/fantasy">
                    Começar Agora
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white/20 text-white hover:bg-white/10">
                  <Link to="/historico">
                    Ver Histórico
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-8 h-8 text-primary mr-3" />
            <h3 className="text-2xl font-bold">Dados Confiáveis</h3>
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Nossas análises são baseadas em dados oficiais do SofaScore, CartomanteFC 
            e principais casas de apostas como Betano, Sportingbet e bet365.
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="text-sm font-semibold">SofaScore</div>
            <div className="text-sm font-semibold">CartomanteFC</div>
            <div className="text-sm font-semibold">Betano</div>
            <div className="text-sm font-semibold">Sportingbet</div>
            <div className="text-sm font-semibold">bet365</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


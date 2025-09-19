import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Progress } from '@/components/ui/progress'
import { 
  Target, 
  TrendingUp, 
  Zap, 
  Trophy, 
  BarChart3, 
  Users, 
  Star,
  Shirt,
  DollarSign,
  Timer,
  Crown,
  Shuffle
} from 'lucide-react'

const Fantasy = () => {
  const [selectedChampionship, setSelectedChampionship] = useState('brasileiro')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedTeams, setGeneratedTeams] = useState(null)

  const championships = [
    { id: 'brasileiro', name: 'Campeonato Brasileiro', rounds: 38 },
    { id: 'premier', name: 'Premier League', rounds: 38 },
    { id: 'champions', name: 'Champions League', rounds: 13 }
  ]

  const teamStrategies = [
    {
      id: 'valorizacao',
      name: 'Time Valorização',
      description: 'Foco em jogadores com maior potencial de aumento de patrimônio',
      icon: TrendingUp,
      color: 'bg-green-500',
      budget: 'C$ 100.00',
      expectedReturn: '+15%'
    },
    {
      id: 'tiro-curto',
      name: 'Time Tiro Curto',
      description: 'Ideal para ligas de rodada única, máxima pontuação',
      icon: Target,
      color: 'bg-blue-500',
      budget: 'C$ 100.00',
      expectedReturn: '120+ pts'
    },
    {
      id: 'mitar',
      name: 'Time para Mitar',
      description: 'Escalação com jogadores de maior potencial explosivo',
      icon: Zap,
      color: 'bg-yellow-500',
      budget: 'C$ 100.00',
      expectedReturn: '150+ pts'
    },
    {
      id: 'liga-classica',
      name: 'Time Liga Clássica',
      description: 'Foco na regularidade e boa média de pontos',
      icon: Trophy,
      color: 'bg-purple-500',
      budget: 'C$ 100.00',
      expectedReturn: '90+ pts'
    },
    {
      id: 'resumo',
      name: 'Time Resumo',
      description: 'Equipe balanceada com os melhores de cada categoria',
      icon: Crown,
      color: 'bg-orange-500',
      budget: 'C$ 100.00',
      expectedReturn: 'Balanceado'
    }
  ]

  const mockPlayers = [
    { name: 'Hulk', position: 'ATA', team: 'ATL', price: 'C$ 18.50', points: 8.2, status: 'provável' },
    { name: 'Arrascaeta', position: 'MEI', team: 'FLA', price: 'C$ 16.80', points: 7.8, status: 'provável' },
    { name: 'Everson', position: 'GOL', team: 'ATL', price: 'C$ 12.30', points: 6.5, status: 'confirmado' },
    { name: 'Gerson', position: 'MEI', team: 'FLA', price: 'C$ 14.20', points: 7.1, status: 'provável' },
    { name: 'Paulinho', position: 'ATA', team: 'ATL', price: 'C$ 15.90', points: 6.9, status: 'dúvida' }
  ]

  const generateTeams = async () => {
    setIsGenerating(true)
    
    // Simular geração de times
    setTimeout(() => {
      setGeneratedTeams({
        round: 34,
        championship: championships.find(c => c.id === selectedChampionship)?.name,
        teams: teamStrategies.map(strategy => ({
          ...strategy,
          players: mockPlayers.slice(0, 5).map(player => ({
            ...player,
            expectedPoints: Math.floor(Math.random() * 10) + 5
          }))
        }))
      })
      setIsGenerating(false)
    }, 3000)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmado': return 'bg-green-100 text-green-800'
      case 'provável': return 'bg-blue-100 text-blue-800'
      case 'dúvida': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Fantasy Game</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Geração automática de times otimizados baseada em análises avançadas 
          dos últimos jogos e estatísticas dos jogadores
        </p>
      </div>

      {/* Championship Selection */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            Selecionar Campeonato
          </CardTitle>
          <CardDescription>
            Escolha o campeonato para gerar os times otimizados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {championships.map((championship) => (
              <Card 
                key={championship.id}
                className={`cursor-pointer transition-all ${
                  selectedChampionship === championship.id 
                    ? 'ring-2 ring-primary bg-primary/5' 
                    : 'hover:bg-muted/50'
                }`}
                onClick={() => setSelectedChampionship(championship.id)}
              >
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold mb-2">{championship.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {championship.rounds} rodadas
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Generate Teams Button */}
      <div className="text-center mb-12">
        <Button 
          size="lg" 
          onClick={generateTeams}
          disabled={isGenerating}
          className="text-lg px-12 py-6"
        >
          {isGenerating ? (
            <>
              <Shuffle className="w-5 h-5 mr-2 animate-spin" />
              Gerando Times...
            </>
          ) : (
            <>
              <Target className="w-5 h-5 mr-2" />
              Criar 5 Times
            </>
          )}
        </Button>
        
        {isGenerating && (
          <div className="mt-6 max-w-md mx-auto">
            <Progress value={66} className="mb-2" />
            <p className="text-sm text-muted-foreground">
              Analisando dados dos últimos 5 jogos...
            </p>
          </div>
        )}
      </div>

      {/* Team Strategies Info */}
      {!generatedTeams && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Estratégias Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamStrategies.map((strategy) => {
              const Icon = strategy.icon
              return (
                <Card key={strategy.id} className="card-hover">
                  <CardHeader>
                    <div className={`w-12 h-12 ${strategy.color} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{strategy.name}</CardTitle>
                    <CardDescription>{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Orçamento:</span>
                      <span className="font-semibold">{strategy.budget}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-muted-foreground">Expectativa:</span>
                      <span className="font-semibold text-primary">{strategy.expectedReturn}</span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* Generated Teams */}
      {generatedTeams && (
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Times Gerados</h2>
            <p className="text-lg text-muted-foreground">
              {generatedTeams.championship} - Rodada {generatedTeams.round}
            </p>
          </div>

          <Tabs defaultValue="valorizacao" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {teamStrategies.map((strategy) => (
                <TabsTrigger key={strategy.id} value={strategy.id} className="text-xs">
                  {strategy.name.split(' ')[1] || strategy.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {teamStrategies.map((strategy) => (
              <TabsContent key={strategy.id} value={strategy.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 ${strategy.color} rounded-lg flex items-center justify-center mr-3`}>
                          <strategy.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>{strategy.name}</CardTitle>
                          <CardDescription>{strategy.description}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Orçamento Total</div>
                        <div className="text-lg font-bold">{strategy.budget}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockPlayers.map((player, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <Shirt className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold">{player.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {player.position} - {player.team}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-6">
                            <div className="text-center">
                              <div className="text-sm text-muted-foreground">Preço</div>
                              <div className="font-semibold">{player.price}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-muted-foreground">Média</div>
                              <div className="font-semibold">{player.points}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-muted-foreground">Status</div>
                              <Badge className={getStatusColor(player.status)}>
                                {player.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Pontuação Esperada:</span>
                        <span className="text-2xl font-bold text-primary">
                          {Math.floor(Math.random() * 50) + 80} pontos
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center mt-8">
            <Button onClick={() => setGeneratedTeams(null)} variant="outline">
              Gerar Novos Times
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Fantasy


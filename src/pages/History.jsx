import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  History as HistoryIcon, 
  Target, 
  TrendingUp, 
  Trophy, 
  Calendar,
  BarChart3,
  Users,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
  Filter
} from 'lucide-react'

const History = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('all')
  const [selectedChampionship, setSelectedChampionship] = useState('all')

  const periods = [
    { id: 'all', name: 'Todos os Períodos' },
    { id: 'week', name: 'Última Semana' },
    { id: 'month', name: 'Último Mês' },
    { id: 'season', name: 'Temporada Atual' }
  ]

  const championships = [
    { id: 'all', name: 'Todos os Campeonatos' },
    { id: 'brasileiro', name: 'Campeonato Brasileiro' },
    { id: 'premier', name: 'Premier League' },
    { id: 'champions', name: 'Champions League' }
  ]

  const fantasyHistory = [
    {
      id: 1,
      round: 33,
      championship: 'Brasileirão',
      date: '2024-03-10',
      strategy: 'Time Valorização',
      points: 87.5,
      position: 1250,
      profit: '+C$ 15.30',
      status: 'completed'
    },
    {
      id: 2,
      round: 32,
      championship: 'Brasileirão',
      date: '2024-03-03',
      strategy: 'Time Tiro Curto',
      points: 124.2,
      position: 450,
      profit: '+C$ 8.90',
      status: 'completed'
    },
    {
      id: 3,
      round: 31,
      championship: 'Premier League',
      date: '2024-02-25',
      strategy: 'Time para Mitar',
      points: 156.8,
      position: 89,
      profit: '+C$ 22.40',
      status: 'completed'
    },
    {
      id: 4,
      round: 30,
      championship: 'Brasileirão',
      date: '2024-02-18',
      strategy: 'Liga Clássica',
      points: 92.1,
      position: 2100,
      profit: '-C$ 3.20',
      status: 'completed'
    }
  ]

  const bettingHistory = [
    {
      id: 'BET-001',
      date: '2024-03-12',
      selections: 4,
      totalOdds: 12.5,
      stake: 10.00,
      potentialReturn: 125.00,
      actualReturn: 125.00,
      status: 'won',
      profit: 115.00
    },
    {
      id: 'BET-002',
      date: '2024-03-08',
      selections: 3,
      totalOdds: 8.2,
      stake: 15.00,
      potentialReturn: 123.00,
      actualReturn: 0,
      status: 'lost',
      profit: -15.00
    },
    {
      id: 'BET-003',
      date: '2024-03-05',
      selections: 5,
      totalOdds: 25.8,
      stake: 5.00,
      potentialReturn: 129.00,
      actualReturn: 129.00,
      status: 'won',
      profit: 124.00
    },
    {
      id: 'BET-004',
      date: '2024-03-01',
      selections: 2,
      totalOdds: 4.5,
      stake: 20.00,
      potentialReturn: 90.00,
      actualReturn: 0,
      status: 'lost',
      profit: -20.00
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'won':
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'lost':
        return <XCircle className="w-4 h-4 text-red-500" />
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'won':
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'lost':
        return 'bg-red-100 text-red-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getProfitColor = (profit) => {
    if (typeof profit === 'string') {
      return profit.startsWith('+') ? 'text-green-600' : 'text-red-600'
    }
    return profit > 0 ? 'text-green-600' : 'text-red-600'
  }

  // Estatísticas calculadas
  const fantasyStats = {
    totalRounds: fantasyHistory.length,
    avgPoints: (fantasyHistory.reduce((acc, h) => acc + h.points, 0) / fantasyHistory.length).toFixed(1),
    bestPosition: Math.min(...fantasyHistory.map(h => h.position)),
    totalProfit: fantasyHistory.reduce((acc, h) => {
      const profit = parseFloat(h.profit.replace(/[C$+]/g, ''))
      return acc + profit
    }, 0).toFixed(2)
  }

  const bettingStats = {
    totalBets: bettingHistory.length,
    wonBets: bettingHistory.filter(b => b.status === 'won').length,
    winRate: ((bettingHistory.filter(b => b.status === 'won').length / bettingHistory.length) * 100).toFixed(1),
    totalProfit: bettingHistory.reduce((acc, b) => acc + b.profit, 0).toFixed(2)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Histórico</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Acompanhe o desempenho de seus times de fantasy e apostas esportivas
        </p>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Filtros
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Período</label>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {periods.map((period) => (
                    <SelectItem key={period.id} value={period.id}>
                      {period.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Campeonato</label>
              <Select value={selectedChampionship} onValueChange={setSelectedChampionship}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {championships.map((championship) => (
                    <SelectItem key={championship.id} value={championship.id}>
                      {championship.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="fantasy" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="fantasy" className="flex items-center">
            <Target className="w-4 h-4 mr-2" />
            Fantasy Game
          </TabsTrigger>
          <TabsTrigger value="betting" className="flex items-center">
            <TrendingUp className="w-4 h-4 mr-2" />
            Apostas Esportivas
          </TabsTrigger>
        </TabsList>

        {/* Fantasy History */}
        <TabsContent value="fantasy">
          {/* Fantasy Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="stats-card">
              <CardContent className="p-4 text-center">
                <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{fantasyStats.totalRounds}</div>
                <div className="text-sm text-muted-foreground">Rodadas</div>
              </CardContent>
            </Card>
            <Card className="stats-card">
              <CardContent className="p-4 text-center">
                <BarChart3 className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{fantasyStats.avgPoints}</div>
                <div className="text-sm text-muted-foreground">Média de Pontos</div>
              </CardContent>
            </Card>
            <Card className="stats-card">
              <CardContent className="p-4 text-center">
                <Trophy className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">#{fantasyStats.bestPosition}</div>
                <div className="text-sm text-muted-foreground">Melhor Posição</div>
              </CardContent>
            </Card>
            <Card className="stats-card">
              <CardContent className="p-4 text-center">
                <DollarSign className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className={`text-2xl font-bold ${getProfitColor(fantasyStats.totalProfit)}`}>
                  C$ {fantasyStats.totalProfit}
                </div>
                <div className="text-sm text-muted-foreground">Lucro Total</div>
              </CardContent>
            </Card>
          </div>

          {/* Fantasy History List */}
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Times</CardTitle>
              <CardDescription>
                Desempenho dos times gerados nas últimas rodadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fantasyHistory.map((entry) => (
                  <div key={entry.id} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(entry.status)}
                        <div>
                          <div className="font-semibold">
                            {entry.championship} - Rodada {entry.round}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(entry.date).toLocaleDateString('pt-BR')}
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">{entry.strategy}</Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Pontos</div>
                        <div className="font-semibold text-lg">{entry.points}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Posição</div>
                        <div className="font-semibold">#{entry.position}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Lucro</div>
                        <div className={`font-semibold ${getProfitColor(entry.profit)}`}>
                          {entry.profit}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Status</div>
                        <Badge className={getStatusColor(entry.status)}>
                          Concluído
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Betting History */}
        <TabsContent value="betting">
          {/* Betting Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="stats-card">
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{bettingStats.totalBets}</div>
                <div className="text-sm text-muted-foreground">Total de Apostas</div>
              </CardContent>
            </Card>
            <Card className="stats-card">
              <CardContent className="p-4 text-center">
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-500" />
                <div className="text-2xl font-bold">{bettingStats.wonBets}</div>
                <div className="text-sm text-muted-foreground">Apostas Ganhas</div>
              </CardContent>
            </Card>
            <Card className="stats-card">
              <CardContent className="p-4 text-center">
                <BarChart3 className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{bettingStats.winRate}%</div>
                <div className="text-sm text-muted-foreground">Taxa de Acerto</div>
              </CardContent>
            </Card>
            <Card className="stats-card">
              <CardContent className="p-4 text-center">
                <DollarSign className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className={`text-2xl font-bold ${getProfitColor(parseFloat(bettingStats.totalProfit))}`}>
                  R$ {bettingStats.totalProfit}
                </div>
                <div className="text-sm text-muted-foreground">Lucro Total</div>
              </CardContent>
            </Card>
          </div>

          {/* Betting History List */}
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Apostas</CardTitle>
              <CardDescription>
                Resultados dos bilhetes de apostas gerados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bettingHistory.map((bet) => (
                  <div key={bet.id} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(bet.status)}
                        <div>
                          <div className="font-semibold">{bet.id}</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(bet.date).toLocaleDateString('pt-BR')}
                          </div>
                        </div>
                      </div>
                      <Badge className={getStatusColor(bet.status)}>
                        {bet.status === 'won' ? 'Ganhou' : 'Perdeu'}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Seleções</div>
                        <div className="font-semibold">{bet.selections}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Odds Total</div>
                        <div className="font-semibold odds-display text-xs">
                          {bet.totalOdds}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Aposta</div>
                        <div className="font-semibold">R$ {bet.stake.toFixed(2)}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Retorno</div>
                        <div className="font-semibold">
                          R$ {bet.actualReturn.toFixed(2)}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Lucro</div>
                        <div className={`font-semibold ${getProfitColor(bet.profit)}`}>
                          R$ {bet.profit > 0 ? '+' : ''}{bet.profit.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default History


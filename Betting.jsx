import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Progress } from '@/components/ui/progress'
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  BarChart3,
  Shuffle,
  Trophy,
  Timer,
  Users,
  Flag,
  ArrowRight
} from 'lucide-react'

const Betting = () => {
  const [oddsRange, setOddsRange] = useState([5, 150])
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedBets, setGeneratedBets] = useState(null)

  const bookmakers = [
    { name: 'Betano', logo: '🟠', rating: 4.8 },
    { name: 'Sportingbet', logo: '🔵', rating: 4.6 },
    { name: 'bet365', logo: '🟡', rating: 4.9 }
  ]

  const betMarkets = [
    { name: 'Resultado Final (1x2)', icon: Trophy, popularity: 95 },
    { name: 'Total de Gols', icon: Target, popularity: 88 },
    { name: 'Ambas Marcam', icon: Users, popularity: 82 },
    { name: 'Escanteios', icon: Flag, popularity: 65 },
    { name: 'Cartões', icon: BarChart3, popularity: 58 },
    { name: 'Handicap Asiático', icon: TrendingUp, popularity: 72 }
  ]

  const mockMatches = [
    {
      home: 'Flamengo',
      away: 'Palmeiras',
      league: 'Brasileirão',
      time: '16:00',
      date: '2024-03-15'
    },
    {
      home: 'Manchester City',
      away: 'Arsenal',
      league: 'Premier League',
      time: '14:30',
      date: '2024-03-16'
    },
    {
      home: 'Real Madrid',
      away: 'Barcelona',
      league: 'La Liga',
      time: '17:00',
      date: '2024-03-17'
    }
  ]

  const generateBets = async () => {
    setIsGenerating(true)
    
    setTimeout(() => {
      const mockBetSlip = {
        id: 'BET-' + Math.random().toString(36).substr(2, 9),
        totalOdds: (Math.random() * (oddsRange[1] - oddsRange[0]) + oddsRange[0]).toFixed(2),
        selections: [
          {
            match: 'Flamengo vs Palmeiras',
            market: 'Resultado Final',
            selection: 'Flamengo Vitória',
            odds: 2.15,
            bookmaker: 'Betano'
          },
          {
            match: 'Manchester City vs Arsenal',
            market: 'Total de Gols',
            selection: 'Mais de 2.5',
            odds: 1.85,
            bookmaker: 'bet365'
          },
          {
            match: 'Real Madrid vs Barcelona',
            market: 'Ambas Marcam',
            selection: 'Sim',
            odds: 1.72,
            bookmaker: 'Sportingbet'
          },
          {
            match: 'Atlético-MG vs São Paulo',
            market: 'Escanteios',
            selection: 'Mais de 9.5',
            odds: 1.95,
            bookmaker: 'Betano'
          }
        ],
        potentialReturn: 100,
        confidence: 73
      }
      setGeneratedBets(mockBetSlip)
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Apostas Esportivas</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Geração automática de bilhetes de apostas mistas com análise de odds 
          das principais casas de apostas
        </p>
      </div>

      {/* Odds Range Selector */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            Configurar Odds
          </CardTitle>
          <CardDescription>
            Defina o range de odds totais para o bilhete de apostas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-4">
                <span className="text-sm font-medium">Odds Mínima: {oddsRange[0]}</span>
                <span className="text-sm font-medium">Odds Máxima: {oddsRange[1]}</span>
              </div>
              <Slider
                value={oddsRange}
                onValueChange={setOddsRange}
                max={200}
                min={2}
                step={1}
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">{oddsRange[0]}</div>
                <div className="text-sm text-muted-foreground">Odds Mínima</div>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">{oddsRange[1]}</div>
                <div className="text-sm text-muted-foreground">Odds Máxima</div>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-secondary">R$ 10</div>
                <div className="text-sm text-muted-foreground">Aposta Sugerida</div>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-accent">
                  R$ {Math.floor(10 * ((oddsRange[0] + oddsRange[1]) / 2))}
                </div>
                <div className="text-sm text-muted-foreground">Retorno Médio</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bookmakers */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Casas de Apostas Monitoradas</CardTitle>
          <CardDescription>
            Comparamos odds das principais casas para encontrar as melhores oportunidades
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bookmakers.map((bookmaker, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{bookmaker.logo}</div>
                  <div>
                    <div className="font-semibold">{bookmaker.name}</div>
                    <div className="text-sm text-muted-foreground">
                      ⭐ {bookmaker.rating}/5.0
                    </div>
                  </div>
                </div>
                <Badge variant="secondary">Ativo</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Generate Bets Button */}
      <div className="text-center mb-12">
        <Button 
          size="lg" 
          onClick={generateBets}
          disabled={isGenerating}
          className="text-lg px-12 py-6"
        >
          {isGenerating ? (
            <>
              <Shuffle className="w-5 h-5 mr-2 animate-spin" />
              Gerando Apostas...
            </>
          ) : (
            <>
              <TrendingUp className="w-5 h-5 mr-2" />
              Criar Apostas Mistas
            </>
          )}
        </Button>
        
        {isGenerating && (
          <div className="mt-6 max-w-md mx-auto">
            <Progress value={45} className="mb-2" />
            <p className="text-sm text-muted-foreground">
              Analisando odds e mercados disponíveis...
            </p>
          </div>
        )}
      </div>

      {/* Bet Markets Info */}
      {!generatedBets && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Mercados Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {betMarkets.map((market, index) => {
              const Icon = market.icon
              return (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Icon className="w-8 h-8 text-primary" />
                      <Badge variant="outline">{market.popularity}%</Badge>
                    </div>
                    <CardTitle className="text-lg">{market.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Popularidade</span>
                        <span className="font-semibold">{market.popularity}%</span>
                      </div>
                      <Progress value={market.popularity} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* Generated Bet Slip */}
      {generatedBets && (
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Bilhete Gerado</h2>
            <p className="text-lg text-muted-foreground">
              ID: {generatedBets.id}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Bet Selections */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Seleções ({generatedBets.selections.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {generatedBets.selections.map((selection, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-semibold">{selection.match}</div>
                            <div className="text-sm text-muted-foreground">
                              {selection.market}
                            </div>
                          </div>
                          <Badge variant="outline">{selection.bookmaker}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <span className="font-medium">{selection.selection}</span>
                          </div>
                          <div className="odds-display">
                            {selection.odds}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bet Summary */}
            <div>
              <Card className="bet-slip">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Resumo da Aposta
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-white">
                    <span>Odds Total:</span>
                    <span className="text-2xl font-bold">{generatedBets.totalOdds}</span>
                  </div>
                  
                  <div className="flex justify-between text-white/90">
                    <span>Aposta Sugerida:</span>
                    <span className="font-semibold">R$ 10,00</span>
                  </div>
                  
                  <div className="flex justify-between text-white/90">
                    <span>Retorno Potencial:</span>
                    <span className="font-semibold">
                      R$ {(10 * parseFloat(generatedBets.totalOdds)).toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between text-white">
                      <span>Confiança:</span>
                      <span className="font-semibold">{generatedBets.confidence}%</span>
                    </div>
                    <Progress 
                      value={generatedBets.confidence} 
                      className="mt-2 bg-white/20" 
                    />
                  </div>
                  
                  <Button className="w-full bg-white text-primary hover:bg-white/90">
                    Copiar Bilhete
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Estatísticas Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Número de Jogos:</span>
                    <span className="font-semibold">{generatedBets.selections.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Odds Média:</span>
                    <span className="font-semibold">
                      {(generatedBets.selections.reduce((acc, sel) => acc + sel.odds, 0) / generatedBets.selections.length).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Casas Utilizadas:</span>
                    <span className="font-semibold">
                      {new Set(generatedBets.selections.map(s => s.bookmaker)).size}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button onClick={() => setGeneratedBets(null)} variant="outline">
              Gerar Nova Aposta
            </Button>
          </div>
        </div>
      )}

      {/* Upcoming Matches Preview */}
      {!generatedBets && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Timer className="w-5 h-5 mr-2" />
              Próximos Jogos
            </CardTitle>
            <CardDescription>
              Jogos disponíveis para apostas nos próximos dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockMatches.map((match, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">{match.date}</div>
                      <div className="font-semibold">{match.time}</div>
                    </div>
                    <div>
                      <div className="font-semibold">
                        {match.home} vs {match.away}
                      </div>
                      <div className="text-sm text-muted-foreground">{match.league}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Betting


import { Target, Github, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">FutAnalytics</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Plataforma completa para análise de dados de futebol, geração de times para fantasy games 
              e criação de bilhetes de apostas esportivas baseada em dados precisos e estatísticas avançadas.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/fantasy" className="hover:text-foreground transition-colors">Fantasy Game</a></li>
              <li><a href="/apostas" className="hover:text-foreground transition-colors">Apostas Esportivas</a></li>
              <li><a href="/historico" className="hover:text-foreground transition-colors">Histórico</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sobre</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 FutAnalytics. Todos os direitos reservados.</p>
          <p className="mt-2">
            Dados fornecidos por SofaScore, CartomanteFC e principais casas de apostas.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


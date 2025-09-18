# FutAnalytics - Análise de Futebol e Apostas Esportivas

Uma plataforma completa para análise de dados de futebol, geração de times para fantasy games e criação de bilhetes de apostas esportivas baseada em dados precisos e estatísticas avançadas.

## 🚀 Funcionalidades Principais

### 📊 Fantasy Game
- **Geração Automática de 5 Times**: Criação otimizada baseada em análises dos últimos jogos
- **5 Estratégias Diferentes**:
  - **Time Valorização**: Foco em jogadores com potencial de aumento de patrimônio
  - **Time Tiro Curto**: Máxima pontuação para ligas de rodada única
  - **Time para Mitar**: Escalação com jogadores de maior potencial explosivo
  - **Time Liga Clássica**: Regularidade e boa média de pontos
  - **Time Resumo**: Equipe balanceada com os melhores de cada categoria
- **Campeonatos Suportados**: Brasileirão, Premier League, Champions League
- **Análise de Jogadores**: Preços, médias, status (provável, confirmado, dúvida)

### 🎯 Apostas Esportivas
- **Geração de Bilhetes Mistas**: Criação automática com odds entre 5 e 150
- **Múltiplos Mercados**:
  - Resultado Final (1x2)
  - Total de Gols (Mais/Menos)
  - Ambas as Equipes Marcam
  - Escanteios
  - Cartões
  - Handicap Asiático
- **Casas de Apostas Monitoradas**: Betano, Sportingbet, bet365
- **Análise de Confiança**: Percentual de confiança para cada bilhete

### 📈 Histórico Completo
- **Histórico de Times**: Desempenho detalhado por rodada
- **Histórico de Apostas**: Resultados e lucros/perdas
- **Estatísticas**: Médias, melhores posições, taxa de acerto
- **Filtros**: Por período e campeonato

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18**: Biblioteca principal para interface
- **Vite**: Build tool e dev server
- **React Router**: Navegação SPA
- **Tailwind CSS**: Framework de estilos utilitários
- **shadcn/ui**: Componentes de interface modernos
- **Lucide React**: Ícones SVG
- **Framer Motion**: Animações suaves

### Funcionalidades Técnicas
- **Design Responsivo**: Mobile-first approach
- **Estados de Loading**: Feedback visual para operações
- **Dados Mockados**: Simulação realista de APIs
- **Navegação Intuitiva**: UX otimizada
- **Paleta de Cores Personalizada**: Verde, laranja e azul

## 📁 Estrutura do Projeto

```
futebol-analytics/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/           # Componentes shadcn/ui
│   │   ├── Header.jsx    # Cabeçalho com navegação
│   │   └── Footer.jsx    # Rodapé
│   ├── pages/
│   │   ├── Home.jsx      # Página inicial
│   │   ├── Fantasy.jsx   # Módulo Fantasy Game
│   │   ├── Betting.jsx   # Módulo Apostas
│   │   └── History.jsx   # Histórico
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos customizados
│   └── main.jsx          # Entry point
├── package.json
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação e Execução
```bash
# Clonar o repositório
cd futebol-analytics

# Instalar dependências
pnpm install

# Executar em modo desenvolvimento
pnpm run dev

# Executar com acesso externo
pnpm run dev --host
```

O site estará disponível em `http://localhost:5173`

### Build para Produção
```bash
# Gerar build otimizado
pnpm run build

# Preview do build
pnpm run preview
```

## 🎨 Design System

### Paleta de Cores
- **Primary**: Verde escuro (#1B5E20) - Representa o campo de futebol
- **Secondary**: Laranja (#FF6F00) - Energia e ação
- **Accent**: Azul (#1976D2) - Confiança e dados
- **Background**: Cinza claro (#F5F5F5)
- **Text**: Cinza escuro (#212121)

### Tipografia
- **Headings**: Inter Bold
- **Body**: Inter Regular
- **Monospace**: Courier New (para odds)

### Componentes
- Cards com hover effects
- Botões com estados visuais
- Progress bars animadas
- Badges coloridos por status
- Modais responsivos

## 📱 Responsividade

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Estratégias
- Mobile-first CSS
- Grid flexível
- Imagens responsivas
- Touch-friendly para mobile
- Menu hamburger em telas pequenas

## 🔮 Funcionalidades Futuras

### Integrações Reais
- **APIs Oficiais**: Cartola FC e Fantasy Premier League
- **Web Scraping**: SofaScore e CartomanteFC para estatísticas
- **Odds APIs**: Integração com casas de apostas reais

### Melhorias Planejadas
- Sistema de usuários e autenticação
- Notificações push para jogos
- Análises mais avançadas com IA
- Comparação de desempenho entre usuários
- Exportação de dados em PDF/Excel

## 📊 Dados de Demonstração

O site utiliza dados mockados realistas para demonstração:
- **Times Fantasy**: Jogadores reais com preços e estatísticas
- **Apostas**: Jogos reais com odds simuladas
- **Histórico**: Dados de performance fictícios mas realistas

## 🤝 Contribuição

Para contribuir com o projeto:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **Projeto**: FutAnalytics
- **Descrição**: Análise inteligente de futebol para Fantasy Games e Apostas Esportivas
- **Dados**: SofaScore, CartomanteFC, Betano, Sportingbet, bet365

---

**FutAnalytics** - Transformando dados em vitórias! ⚽📊🏆


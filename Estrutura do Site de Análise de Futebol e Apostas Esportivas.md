# Estrutura do Site de Análise de Futebol e Apostas Esportivas

## Arquitetura de Informação

### Mapa do Site
```
Home
├── Fantasy Game
│   ├── Cartola FC
│   ├── Premier League Fantasy
│   └── Análise de Jogadores
├── Apostas Esportivas
│   ├── Criar Apostas Mistas
│   ├── Odds Comparator
│   └── Mercados Disponíveis
├── Histórico
│   ├── Times Anteriores
│   └── Apostas Anteriores
└── Sobre
```

## Páginas Principais

### 1. Home Page
- Hero section com apresentação da plataforma
- Cards de acesso rápido aos módulos principais
- Estatísticas em destaque
- Últimas atualizações e resultados

### 2. Fantasy Game
- Dashboard com campeonatos disponíveis (Brasileiro, Premier League, Champions)
- Botão "Criar 5 Times" com as 5 estratégias:
  - Time Valorização
  - Time Tiro Curto
  - Time para Mitar
  - Time Liga Clássica
  - Time Resumo
- Análise de jogadores com dados do SofaScore
- Comparador de jogadores

### 3. Apostas Esportivas
- Interface para criar apostas mistas
- Seletor de odds entre 5 e 150
- Mercados disponíveis (1x2, Over/Under, BTTS, etc.)
- Comparação de odds entre casas (Betano, Sportingbet, bet365)

### 4. Histórico
- Timeline de times criados por rodada
- Histórico de apostas com resultados
- Estatísticas de performance
- Filtros por período e tipo

## Wireframes Conceituais

### Layout Mobile-First
- Header fixo com menu hamburger
- Cards empilhados verticalmente
- Botões de ação em destaque
- Footer simplificado

### Layout Desktop
- Header horizontal com navegação completa
- Sidebar para filtros e opções
- Grid de cards responsivo
- Dashboard com múltiplas colunas

## Tecnologias Escolhidas

### Frontend: React
**Justificativa:**
- Excelente para interfaces dinâmicas e interativas
- Grande ecossistema de bibliotecas
- Boa performance com Virtual DOM
- Facilita a criação de componentes reutilizáveis

### Styling: Tailwind CSS
**Justificativa:**
- Desenvolvimento rápido com classes utilitárias
- Excelente suporte para responsividade
- Customização fácil de temas
- Otimização automática de CSS

### Bibliotecas Adicionais:
- **React Router**: Navegação SPA
- **Axios**: Requisições HTTP
- **Chart.js/Recharts**: Gráficos e visualizações
- **Framer Motion**: Animações suaves
- **React Hook Form**: Formulários otimizados

## Estrutura de Pastas

```
src/
├── components/
│   ├── common/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx
│   │   └── LoadingSpinner.jsx
│   ├── fantasy/
│   │   ├── TeamGenerator.jsx
│   │   ├── PlayerCard.jsx
│   │   └── PlayerComparator.jsx
│   ├── betting/
│   │   ├── BetSlipGenerator.jsx
│   │   ├── OddsComparator.jsx
│   │   └── MarketSelector.jsx
│   └── history/
│       ├── TeamHistory.jsx
│       └── BetHistory.jsx
├── pages/
│   ├── Home.jsx
│   ├── Fantasy.jsx
│   ├── Betting.jsx
│   └── History.jsx
├── hooks/
│   ├── useApi.js
│   └── useLocalStorage.js
├── services/
│   ├── api.js
│   └── mockData.js
├── styles/
│   └── globals.css
└── utils/
    ├── constants.js
    └── helpers.js
```

## Design System

### Paleta de Cores
- **Primary**: Verde escuro (#1B5E20) - Representa o campo de futebol
- **Secondary**: Laranja (#FF6F00) - Energia e ação
- **Accent**: Azul (#1976D2) - Confiança e dados
- **Background**: Cinza claro (#F5F5F5)
- **Text**: Cinza escuro (#212121)

### Tipografia
- **Headings**: Inter Bold
- **Body**: Inter Regular
- **Monospace**: Fira Code (para odds e números)

### Componentes Base
- Cards com sombra sutil
- Botões com estados hover e active
- Inputs com validação visual
- Modais responsivos
- Tooltips informativos

## Responsividade

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Estratégias
- Mobile-first approach
- Grid flexível com CSS Grid e Flexbox
- Imagens responsivas com srcset
- Texto escalável com unidades rem
- Touch-friendly para dispositivos móveis


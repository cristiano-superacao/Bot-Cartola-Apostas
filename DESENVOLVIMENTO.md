# Guia de Desenvolvimento - FutAnalytics

## 🎯 Configuração do Ambiente

### Node.js Instalado ✅
- **Versão**: Node.js 20.19.5
- **npm**: 10.8.2
- **Local**: Sistema já configurado

### Estrutura de Desenvolvimento

#### Frontend (React + Vite)
```bash
# Desenvolvimento
npm run dev
# URL: http://localhost:5173

# Build
npm run build
npm run preview
```

#### Backend (Node.js + Express)
```bash
# Produção
npm run server

# Desenvolvimento (com auto-reload)
npm run server:dev
# URL: http://localhost:4000
```

## 🏗️ Arquitetura do Projeto

### Frontend
- **Framework**: React 18 com Vite
- **Roteamento**: React Router DOM
- **Estilização**: Tailwind CSS + CSS customizado
- **Componentes**: Sistema baseado em shadcn/ui
- **Estado**: Context API (AppContext)

### Backend
- **Runtime**: Node.js com ES Modules
- **Framework**: Express.js
- **Banco de Dados**: SQLite3
- **CORS**: Habilitado para desenvolvimento

### Estrutura de Arquivos
```
src/
├── components/
│   ├── ui/              # Componentes reutilizáveis
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── badge.jsx
│   │   └── ...
│   ├── Header.jsx       # Navegação principal
│   └── Footer.jsx       # Rodapé
├── pages/               # Páginas da aplicação
│   ├── Home.jsx         # Dashboard principal
│   ├── Fantasy.jsx      # Gerador de times
│   ├── Betting.jsx      # Sistema de apostas
│   └── History.jsx      # Histórico
├── context/
│   └── AppContext.jsx   # Estado global
├── utils/
│   └── dateUtils.js     # Utilitários
└── main.jsx             # Entry point
```

## 🎨 Design System

### Cores Principais
```css
:root {
  --primary: 142 72% 29%;        /* Verde campo */
  --secondary: 210 40% 95%;      /* Cinza claro */
  --accent: 210 40% 95%;         /* Azul confiança */
  --background: 0 0% 100%;       /* Branco */
  --foreground: 222.2 84% 4.9%;  /* Preto texto */
}
```

### Componentes UI
- **Button**: Variantes (default, secondary, outline, ghost)
- **Card**: Estrutura para conteúdo
- **Badge**: Indicadores de status
- **Tabs**: Navegação em abas
- **Progress**: Barras de progresso
- **Select**: Dropdowns personalizados

## 🔧 Ferramentas de Desenvolvimento

### Linting
```bash
npm run lint
```

### Hot Reload
- **Frontend**: Vite HMR automático
- **Backend**: Nodemon para auto-restart

### Build Tools
- **Vite**: Build do frontend
- **PostCSS**: Processamento CSS
- **Tailwind**: Geração de classes utilitárias

## 📊 Banco de Dados

### SQLite Schema
```sql
-- Tabela de apostas
CREATE TABLE apostas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  descricao TEXT NOT NULL
);

-- Tabela de times
CREATE TABLE times (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  jogadores TEXT NOT NULL -- JSON serializado
);
```

### Operações CRUD
```javascript
// Buscar apostas
GET /apostas

// Criar aposta
POST /apostas
{
  "descricao": "Flamengo x Palmeiras - Over 2.5 gols"
}

// Buscar times
GET /times

// Criar time
POST /times
{
  "nome": "Time Valorização",
  "jogadores": ["Gabigol", "Raphael Veiga", "Hulk"]
}
```

## 🚀 Deploy e Produção

### Build de Produção
```bash
# Gerar arquivos otimizados
npm run build

# Testar build localmente
npm run preview
```

### Variáveis de Ambiente
```bash
# Backend
PORT=4000

# Database
DATABASE_PATH=./database.db
```

### Hosting Sugerido
- **Frontend**: Vercel, Netlify, GitHub Pages
- **Backend**: Railway, Render, Heroku
- **Database**: Pode usar PostgreSQL em produção

## 🔍 Debugging

### Frontend
- React DevTools
- Console do navegador
- Vite dev tools

### Backend
- Logs no terminal
- SQLite Browser para DB
- Postman/Insomnia para API

## 📈 Próximos Passos

1. **Integração com APIs reais**
   - SofaScore API
   - CartomanteFC API
   - APIs de casas de apostas

2. **Melhorias de UX**
   - Loading states
   - Error boundaries
   - Toast notifications

3. **Funcionalidades avançadas**
   - Autenticação de usuários
   - Favoritos e histórico pessoal
   - Notificações push

4. **Performance**
   - Code splitting
   - Lazy loading
   - Service workers

## 🐛 Troubleshooting

### Problemas Comuns

**Frontend não carrega:**
```bash
# Verificar dependências
npm install

# Limpar cache
rm -rf node_modules package-lock.json
npm install
```

**Backend não conecta:**
```bash
# Verificar porta
lsof -i :4000

# Restartar servidor
npm run server:dev
```

**Styling quebrado:**
```bash
# Recompilar Tailwind
npm run build

# Verificar PostCSS
npm run dev
```

## 📝 Convenções de Código

### JavaScript
- ES6+ features
- Destructuring
- Arrow functions
- Async/await

### React
- Functional components
- Hooks
- Props destructuring
- Component composition

### CSS
- Tailwind-first
- CSS custom properties
- Mobile-first responsive

---

**Happy Coding!** 🚀⚽
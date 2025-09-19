# FutAnalytics - Análise de Futebol e Apostas Esportivas

Uma aplicação web moderna para análise de futebol, fantasy games e apostas esportivas.

## 🚀 Deploy no Vercel

Este projeto está configurado para deployment automático no Vercel. Para fazer o deploy:

1. Conecte seu repositório GitHub ao Vercel
2. O Vercel detectará automaticamente que é um projeto Vite
3. Configure as seguintes opções (se necessário):
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

## 🛠️ Desenvolvimento Local

### Pré-requisitos
- Node.js 18+ 
- npm ou pnpm

### Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# O site estará disponível em http://localhost:5173
```

### Build para Produção

```bash
# Gerar build otimizado
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
├── src/
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes de interface (shadcn/ui style)
│   │   ├── Header.jsx    # Cabeçalho
│   │   └── Footer.jsx    # Rodapé
│   ├── pages/            # Páginas da aplicação
│   │   ├── Home.jsx      # Página inicial
│   │   ├── Fantasy.jsx   # Fantasy Game
│   │   ├── Betting.jsx   # Apostas
│   │   └── History.jsx   # Histórico
│   ├── context/          # Context providers
│   ├── utils/            # Funções utilitárias
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos
│   └── main.jsx          # Entry point
├── backend/              # Arquivos de backend (não usado no Vercel)
├── public/               # Arquivos estáticos
├── index.html            # Template HTML
├── package.json          # Dependências e scripts
├── vite.config.js        # Configuração do Vite
├── tailwind.config.js    # Configuração do Tailwind
└── vercel.json           # Configuração do Vercel
```

## 🛠️ Tecnologias

- **React 18**: Biblioteca principal
- **Vite**: Build tool e dev server
- **React Router**: Navegação
- **Tailwind CSS**: Framework de estilos
- **Lucide React**: Ícones
- **Framer Motion**: Animações

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção

# FutAnalytics - Bot Cartola Apostas

Plataforma completa para análise de dados de futebol, geração de times para fantasy games e criação de bilhetes de apostas esportivas.

## 🚀 Deploy no Vercel

### Pré-requisitos
- Conta no [Vercel](https://vercel.com)
- Repositório no GitHub

### Passos para Deploy

1. **Conectar Repositório no Vercel**
   - Acesse [vercel.com](https://vercel.com) e faça login
   - Clique em "New Project"
   - Importe este repositório do GitHub

2. **Configurações do Build**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy Automático**
   - O Vercel irá automaticamente detectar as configurações
   - O deploy será feito automaticamente a cada push na branch main

### Estrutura do Projeto

```
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Header.jsx      # Cabeçalho com navegação
│   │   └── Footer.jsx      # Rodapé
│   ├── pages/              # Páginas da aplicação
│   │   ├── Home.jsx        # Página inicial
│   │   ├── Fantasy.jsx     # Módulo Fantasy Game
│   │   ├── Betting.jsx     # Módulo Apostas
│   │   └── History.jsx     # Histórico
│   ├── context/            # Context API
│   ├── utils/              # Utilitários
│   ├── App.jsx             # Componente principal
│   ├── App.css             # Estilos principais
│   └── main.jsx            # Entry point
├── public/                 # Arquivos estáticos
├── api/                    # Backend (para futuras implementações)
├── package.json
├── vite.config.js          # Configuração do Vite
├── vercel.json             # Configuração do Vercel
└── README.md
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18**: Biblioteca principal para interface
- **Vite**: Build tool e dev server ultra-rápido
- **React Router**: Navegação SPA
- **CSS3**: Estilos responsivos customizados

### Deploy
- **Vercel**: Plataforma de deploy com CI/CD automático
- **GitHub**: Controle de versão e integração

## 🌐 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📋 Funcionalidades

### ✅ Implementadas
- [x] Interface responsiva completa
- [x] Navegação entre páginas
- [x] Páginas principais (Home, Fantasy, Apostas, Histórico)
- [x] Design system customizado
- [x] Build otimizado para produção
- [x] Configuração para deploy no Vercel

### 🔄 Em Desenvolvimento
- [ ] Integração com APIs reais do Cartola FC
- [ ] Sistema de geração de times com IA
- [ ] Cálculo de apostas com odds reais
- [ ] Banco de dados para histórico
- [ ] Autenticação de usuários

## 🎯 Como Usar no Vercel

1. **Fork ou Clone** este repositório
2. **Conecte ao Vercel** através da interface web
3. **Configure o domínio** personalizado (opcional)
4. **Deploy automático** a cada push

### Variáveis de Ambiente (Futuras)
```env
VITE_API_URL=sua_api_url
VITE_CARTOLA_API_KEY=sua_chave_cartola
```

## 📞 Suporte

Este projeto está configurado para ser facilmente implantado no Vercel. Se encontrar algum problema durante o deploy, verifique:

- ✅ Node.js version 18+ no package.json
- ✅ Comandos de build corretos
- ✅ Estrutura de arquivos adequada
- ✅ Configuração do vercel.json

---

**Status**: ✅ Pronto para deploy no Vercel

# FutAnalytics - Bot Cartola Apostas

Um sistema completo de análise de futebol e apostas esportivas com gerador de times para disputar ligas do Cartola FC, Premier League Fantasy e criação de bilhetes de apostas.

![FutAnalytics Homepage](https://github.com/user-attachments/assets/68260d8a-f084-41a2-8c7f-4a49c690b9ca)

## 🚀 Funcionalidades

- **Fantasy Game**: Geração automática de 5 times otimizados para Cartola FC e Premier League Fantasy
- **Apostas Esportivas**: Criação de bilhetes de apostas mistas com odds entre 5 e 150
- **Histórico Completo**: Acompanhamento do desempenho de times e apostas anteriores
- **Análise de Dados**: Baseado em dados oficiais do SofaScore, CartomanteFC e principais casas de apostas

## 🛠️ Tecnologias

### Frontend
- **React 18**: Biblioteca principal para interface
- **Vite**: Build tool e dev server moderno
- **React Router**: Navegação SPA
- **Tailwind CSS**: Framework de estilos utilitários
- **Lucide React**: Ícones SVG modernos
- **Framer Motion**: Animações suaves

### Backend
- **Node.js**: Runtime JavaScript
- **Express**: Framework web para APIs
- **SQLite3**: Banco de dados local
- **CORS**: Habilitação de requisições cross-origin

### Ferramentas de Desenvolvimento
- **ESLint**: Linting de código
- **PostCSS & Autoprefixer**: Processamento de CSS
- **Nodemon**: Auto-reload do servidor

## 📋 Pré-requisitos

- Node.js 18+ 
- npm (vem com Node.js)

## 🚀 Instalação e Execução

### 1. Clone o repositório
```bash
git clone https://github.com/cristiano-superacao/Bot-Cartola-Apostas.git
cd Bot-Cartola-Apostas
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o projeto

#### Frontend (Desenvolvimento)
```bash
npm run dev
```
O frontend estará disponível em `http://localhost:5173`

#### Backend (API)
```bash
npm run server
```
O backend estará disponível em `http://localhost:4000`

#### Backend (Desenvolvimento com auto-reload)
```bash
npm run server:dev
```

### 4. Build para Produção
```bash
npm run build
npm run preview
```

## 📁 Estrutura do Projeto

```
Bot-Cartola-Apostas/
├── src/
│   ├── components/
│   │   ├── ui/           # Componentes de interface
│   │   ├── Header.jsx    # Cabeçalho com navegação
│   │   └── Footer.jsx    # Rodapé
│   ├── pages/
│   │   ├── Home.jsx      # Página inicial
│   │   ├── Fantasy.jsx   # Módulo Fantasy Game
│   │   ├── Betting.jsx   # Módulo Apostas
│   │   └── History.jsx   # Histórico
│   ├── context/
│   │   └── AppContext.jsx # Estado global da aplicação
│   ├── utils/
│   │   └── dateUtils.js  # Utilitários de data
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos customizados
│   └── main.jsx          # Entry point
├── server.js             # Servidor backend
├── database.js           # Configuração do banco
├── package.json          # Dependências e scripts
├── vite.config.js        # Configuração do Vite
├── tailwind.config.js    # Configuração do Tailwind
└── README.md             # Documentação
```

## 🔌 API Endpoints

### Apostas
- `GET /apostas` - Lista todas as apostas
- `POST /apostas` - Cria nova aposta
  ```json
  {
    "descricao": "Descrição da aposta"
  }
  ```

### Times
- `GET /times` - Lista todos os times
- `POST /times` - Cria novo time
  ```json
  {
    "nome": "Nome do time",
    "jogadores": ["jogador1", "jogador2", "..."]
  }
  ```

## 🎨 Design System

O projeto utiliza um design system personalizado com:
- **Cores primárias**: Verde (campo de futebol), Laranja (energia), Azul (confiança)
- **Componentes reutilizáveis**: Baseados no padrão shadcn/ui
- **Design responsivo**: Mobile-first approach
- **Animações**: Transições suaves com CSS e Framer Motion

## 📱 Responsividade

- **Desktop**: Layout completo com navegação horizontal
- **Tablet**: Adaptação da grid e componentes
- **Mobile**: Menu hamburger e layout vertical otimizado

## 🧪 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento (Vite)
npm run build        # Gera build de produção
npm run preview      # Preview do build de produção
npm run lint         # Executa o linter
npm run server       # Inicia o servidor backend
npm run server:dev   # Inicia o servidor backend com auto-reload
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através dos issues do GitHub.

---

**FutAnalytics** - Transformando dados em vitórias! ⚽📊

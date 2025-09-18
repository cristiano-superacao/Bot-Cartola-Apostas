# Bot-Cartola-Apostas

Um Gerador de apostas e times para disputar ligas do Cartola, Campeonato Inglês e Liga dos Campeões.

## 🚀 Funcionalidades

- **⚽ Gerador de Times Cartola**: Cria escalações aleatórias com jogadores brasileiros
- **🏴󠁧󠁢󠁥󠁮󠁧󠁿 Apostas Premier League**: Sugestões de apostas para o Campeonato Inglês
- **🌟 Apostas Champions League**: Recomendações para a Liga dos Campeões
- **🎯 Interface Web Interativa**: Dashboard moderno e responsivo
- **📱 Mobile Friendly**: Funciona perfeitamente em dispositivos móveis

## 🛠️ Tecnologias

- **Backend**: Python + Flask
- **Frontend**: HTML, CSS, JavaScript
- **Deploy**: Render (configuração automática)
- **Servidor**: Gunicorn

## 🚀 Deploy no Render

### Método 1: Deploy Automático (Recomendado)

1. Faça fork deste repositório
2. Acesse [Render.com](https://render.com) e crie uma conta
3. Conecte sua conta GitHub ao Render
4. Clique em "New Web Service"
5. Selecione este repositório
6. O Render detectará automaticamente as configurações do `render.yaml`
7. Clique em "Deploy"

### Método 2: Configuração Manual

1. No Render, crie um novo "Web Service"
2. Conecte seu repositório GitHub
3. Configure as seguintes opções:
   - **Runtime**: Python
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn --bind 0.0.0.0:$PORT app:app`
   - **Python Version**: 3.11.0

## 🏃‍♂️ Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/cristiano-superacao/Bot-Cartola-Apostas.git
cd Bot-Cartola-Apostas

# Instale as dependências
pip install -r requirements.txt

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# Execute a aplicação
python app.py
```

A aplicação estará disponível em `http://localhost:5000`

## 🔧 Configuração

### Variáveis de Ambiente

- `SECRET_KEY`: Chave secreta do Flask (gerada automaticamente no Render)
- `PORT`: Porta da aplicação (definida automaticamente pelo Render)
- `FLASK_ENV`: Ambiente de execução (production/development)

## 📦 Estrutura do Projeto

```
Bot-Cartola-Apostas/
├── app.py                 # Aplicação principal Flask
├── requirements.txt       # Dependências Python
├── render.yaml           # Configuração do Render
├── .env.example          # Template de variáveis de ambiente
├── .gitignore            # Arquivos ignorados pelo Git
├── templates/
│   └── index.html        # Interface web principal
└── README.md             # Documentação
```

## 🎮 Como Usar

1. Acesse a aplicação web
2. Escolha uma das opções:
   - **Gerar Time Cartola**: Cria uma escalação aleatória
   - **Gerar Aposta Premier League**: Sugere uma aposta para o Inglês
   - **Gerar Aposta Champions League**: Recomenda aposta para a Champions
   - **Gerar Todas**: Executa todas as funções de uma vez

## 🔍 Endpoints da API

- `GET /` - Interface web principal
- `GET /api/cartola-team` - Gera time do Cartola
- `GET /api/premier-league-bet` - Gera aposta da Premier League
- `GET /api/champions-league-bet` - Gera aposta da Champions League
- `GET /api/all-suggestions` - Retorna todas as sugestões
- `GET /health` - Health check para monitoramento

## 🤝 Contribuindo

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🎯 Próximas Melhorias

- [ ] Integração com APIs reais de estatísticas
- [ ] Sistema de histórico de apostas
- [ ] Análise de probabilidades mais avançada
- [ ] Notificações por email/webhook
- [ ] Dashboard de performance
- [ ] Modo escuro na interface

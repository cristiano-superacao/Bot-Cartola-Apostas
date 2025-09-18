# Bot-Cartola-Apostas

Um gerador de apostas e times para disputar ligas do Cartola, Campeonato Inglês e Liga dos Campeões, agora com suporte a banco de dados relacional usando Flask e SQLAlchemy.

## 🚀 Funcionalidades

- ⚽ **Geração de Times**: Times otimizados para Fantasy Football
- 💰 **Sistema de Apostas**: Registro e acompanhamento de apostas esportivas
- 🏆 **Múltiplos Campeonatos**: Brasileirão, Premier League, Champions League e mais
- 📊 **Interface Web**: Interface moderna e responsiva para gestão de apostas
- 🗄️ **Banco de Dados Flexível**: SQLite para desenvolvimento, PostgreSQL para produção

## 🛠️ Tecnologias

### Backend
- **Flask 2.0+**: Framework web Python
- **SQLAlchemy 2.0+**: ORM para banco de dados
- **Flask-SQLAlchemy**: Integração Flask + SQLAlchemy
- **Flask-CORS**: Suporte a CORS para API
- **psycopg2-binary**: Driver PostgreSQL
- **python-dotenv**: Gerenciamento de variáveis de ambiente

### Frontend
- **React 18**: Interface de usuário
- **HTML5/CSS3**: Interface web responsiva
- **JavaScript ES6+**: Funcionalidades interativas

### Banco de Dados
- **SQLite**: Desenvolvimento local
- **PostgreSQL**: Produção (Render/Vercel)

## 📦 Instalação e Configuração

### Pré-requisitos
- Python 3.8+
- Node.js 16+ (para desenvolvimento frontend)
- pip (gerenciador de pacotes Python)

### 1. Clonando o Repositório
```bash
git clone https://github.com/cristiano-superacao/Bot-Cartola-Apostas.git
cd Bot-Cartola-Apostas
```

### 2. Configuração do Backend (Flask)

#### Instalação das Dependências Python
```bash
pip install -r requirements.txt
```

#### Configuração do Ambiente
```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite o arquivo .env conforme necessário
# Para desenvolvimento local, deixe DATABASE_URL comentado (usa SQLite)
# Para produção, configure com PostgreSQL
```

#### Executando o Servidor Flask
```bash
# Desenvolvimento
python app.py

# Ou usando gunicorn (produção)
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

O servidor estará disponível em: `http://localhost:5000`

### 3. Configuração do Frontend (React)

#### Instalação das Dependências Node.js
```bash
npm install
```

#### Executando o Frontend
```bash
# Desenvolvimento
npm start

# Build para produção
npm run build
```

## 🌐 Configuração de Banco de Dados

### Desenvolvimento Local (SQLite)
Para desenvolvimento local, não é necessário configurar nada. O sistema criará automaticamente um arquivo `cartola.db` na raiz do projeto.

### Produção (PostgreSQL)
Para ambiente de produção, configure a variável de ambiente `DATABASE_URL`:

#### Render.com
```bash
DATABASE_URL=postgresql://username:password@hostname:port/database_name
```

#### Vercel com PostgreSQL
```bash
DATABASE_URL=postgresql://username:password@hostname:port/database_name
```

#### Outras Plataformas
O sistema suporta qualquer PostgreSQL compatível com SQLAlchemy. Configure a `DATABASE_URL` apropriadamente.

## 📖 API Endpoints

### Apostas

#### GET /apostas
Retorna todas as apostas registradas.
```bash
curl -X GET http://localhost:5000/apostas
```

#### POST /apostas
Cria uma nova aposta.
```bash
curl -X POST http://localhost:5000/apostas \
  -H "Content-Type: application/json" \
  -d '{
    "nome_time": "Flamengo",
    "campeonato": "Brasileirão", 
    "valor": 25.50
  }'
```

### Outros Endpoints

#### GET /health
Verifica o status da aplicação e conexão com banco.
```bash
curl -X GET http://localhost:5000/health
```

#### GET /times (Compatibilidade)
Endpoint legacy para compatibilidade com versões anteriores.

## 🚀 Deploy

### Render.com
1. Conecte seu repositório no Render
2. Configure as variáveis de ambiente:
   - `DATABASE_URL`: URL do PostgreSQL
   - `PORT`: 5000 (ou deixe vazio para usar padrão)
3. Use o comando de build: `pip install -r requirements.txt`
4. Use o comando de start: `gunicorn -w 4 -b 0.0.0.0:$PORT app:app`

### Vercel
1. Configure o `vercel.json` (se necessário)
2. Configure as variáveis de ambiente no painel da Vercel
3. Deploy através do GitHub integration

### Docker (Opcional)
```dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 5000

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]
```

## 📁 Estrutura do Projeto

```
Bot-Cartola-Apostas/
├── app.py                 # Aplicação Flask principal
├── requirements.txt       # Dependências Python
├── package.json          # Dependências Node.js
├── .env.example          # Exemplo de configuração
├── .gitignore           # Arquivos ignorados pelo Git
├── templates/           # Templates HTML
│   └── apostas.html     # Interface web de apostas
├── static/              # Arquivos estáticos (CSS, JS, imagens)
├── node_modules/        # Dependências Node.js (ignorado)
├── *.jsx                # Componentes React
└── README.md           # Este arquivo
```

## 🔧 Desenvolvimento

### Modelo de Dados

A aplicação usa o modelo `Aposta` com os seguintes campos:

```python
class Aposta(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome_time = db.Column(db.String(100), nullable=False)
    campeonato = db.Column(db.String(100), nullable=False) 
    valor = db.Column(db.Float, nullable=False)
    data = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
```

### Adicionando Novos Endpoints
Para adicionar novos endpoints, edite o arquivo `app.py` seguindo o padrão Flask:

```python
@app.route('/novo-endpoint', methods=['GET', 'POST'])
def novo_endpoint():
    # Sua lógica aqui
    return jsonify({'status': 'success'})
```

### Migrações de Banco
O sistema cria as tabelas automaticamente. Para migrações futuras, considere usar Flask-Migrate:

```bash
pip install Flask-Migrate
# Configure conforme necessário
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Se encontrar problemas:

1. Verifique se todas as dependências estão instaladas
2. Confirme se as variáveis de ambiente estão configuradas
3. Verifique os logs da aplicação
4. Abra uma issue no GitHub com detalhes do problema

## 📈 Roadmap

- [ ] Sistema de autenticação
- [ ] Dashboard de analytics
- [ ] Integração com APIs de casas de apostas
- [ ] Sistema de notificações
- [ ] App mobile (React Native)
- [ ] Testes automatizados

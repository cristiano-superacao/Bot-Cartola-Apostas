# Bot-Cartola-Apostas

Um backend Flask para geração de apostas e times para disputar ligas do Cartola, Campeonato Inglês e Liga dos Campeões.

## 🛠️ Tecnologias Utilizadas

### Backend
- **Flask**: Framework web Python
- **Flask-SQLAlchemy**: ORM para banco de dados
- **Flask-CORS**: Suporte a CORS
- **SQLAlchemy**: Biblioteca de banco de dados
- **Gunicorn**: Servidor WSGI para produção
- **PostgreSQL**: Banco de dados em produção (via psycopg2-binary)
- **SQLite**: Banco de dados para desenvolvimento

## 🚀 Como Executar

### Pré-requisitos
- Python 3.8+
- pip

### Instalação e Execução Local

```bash
# Instalar dependências
pip install -r requirements.txt

# Executar em modo desenvolvimento
python app.py

# Executar com gunicorn (produção)
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

A API estará disponível em `http://localhost:5000`

### Endpoints Disponíveis

#### Health Check
- `GET /health` - Verifica se a API está funcionando

#### Apostas
- `GET /apostas` - Lista todas as apostas
- `POST /apostas` - Cria nova aposta
  ```json
  {
    "descricao": "Descrição da aposta"
  }
  ```

#### Times
- `GET /times` - Lista todos os times
- `POST /times` - Cria novo time
  ```json
  {
    "nome": "Nome do time",
    "jogadores": ["jogador1", "jogador2", ...]
  }
  ```

## 🌐 Deploy no Render

O projeto está configurado para deploy automático no Render usando:

- **Runtime**: Python
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `gunicorn -w 4 -b 0.0.0.0:$PORT app:app`

O arquivo `render.yaml` contém toda a configuração necessária para o deploy.

### Variáveis de Ambiente (Render)

- `DATABASE_URL`: URL do banco PostgreSQL (configurado automaticamente pelo Render)
- `PORT`: Porta do servidor (configurado automaticamente pelo Render)
- `FLASK_ENV`: `production` (para desabilitar debug em produção)

## 📁 Estrutura do Projeto

```
Bot-Cartola-Apostas/
├── app.py              # Aplicação Flask principal
├── requirements.txt    # Dependências Python
├── render.yaml        # Configuração do Render
├── README.md          # Este arquivo
└── instance/          # Banco SQLite local (criado automaticamente)
```

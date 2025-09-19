# Bot-Cartola-Apostas

Um backend Flask para geração de apostas e times para disputar ligas do Cartola, Campeonato Inglês e Liga dos Campeões.

## Tecnologias

- **Backend**: Flask (Python)
- **Banco de Dados**: SQLite (desenvolvimento) / PostgreSQL (produção)
- **Deploy**: Render

## Instalação e Execução Local

### Pré-requisitos
- Python 3.8+
- pip

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/cristiano-superacao/Bot-Cartola-Apostas.git
cd Bot-Cartola-Apostas
```

2. Instale as dependências:
```bash
pip install -r requirements.txt
```

3. Execute a aplicação:
```bash
python app.py
```

A aplicação estará disponível em `http://localhost:5000`

## API Endpoints

### Apostas
- `GET /apostas` - Lista todas as apostas
- `POST /apostas` - Cria uma nova aposta
  - Body: `{"descricao": "Descrição da aposta"}`

### Times
- `GET /times` - Lista todos os times
- `POST /times` - Cria um novo time
  - Body: `{"nome": "Nome do time", "jogadores": ["jogador1", "jogador2"]}`

### Health Check
- `GET /health` - Verifica se a aplicação está funcionando

## Deploy no Render

O projeto está configurado para deploy automático no Render através do arquivo `render.yaml`.

### Configuração no Render:
1. Conecte seu repositório GitHub ao Render
2. O arquivo `render.yaml` já está configurado com:
   - Ambiente Python
   - Build command: `pip install -r requirements.txt`
   - Start command: `gunicorn -w 4 -b 0.0.0.0:$PORT app:app`

### Variáveis de Ambiente (opcionais):
- `DATABASE_URL`: URL do banco PostgreSQL (fornecida automaticamente pelo Render)

## Estrutura do Projeto

```
Bot-Cartola-Apostas/
├── app.py              # Aplicação Flask principal
├── requirements.txt    # Dependências Python
├── render.yaml        # Configuração de deploy para Render
└── README.md          # Este arquivo
```

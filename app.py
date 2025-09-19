from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Database configuration
database_url = os.getenv('DATABASE_URL')
if database_url and database_url.startswith('postgres://'):
    database_url = database_url.replace('postgres://', 'postgresql://', 1)

app.config['SQLALCHEMY_DATABASE_URI'] = database_url or 'sqlite:///cartola.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Models
class Aposta(db.Model):
    __tablename__ = 'apostas'
    id = db.Column(db.Integer, primary_key=True)
    descricao = db.Column(db.Text, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'descricao': self.descricao
        }

class Time(db.Model):
    __tablename__ = 'times'
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.Text, nullable=False)
    jogadores = db.Column(db.Text, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'jogadores': self.jogadores
        }

# Create tables
with app.app_context():
    db.create_all()

# Routes for apostas
@app.route('/apostas', methods=['GET'])
def get_apostas():
    try:
        apostas = Aposta.query.all()
        return jsonify([aposta.to_dict() for aposta in apostas])
    except Exception as e:
        return jsonify({'erro': str(e)}), 500

@app.route('/apostas', methods=['POST'])
def create_aposta():
    try:
        data = request.get_json()
        if not data or 'descricao' not in data:
            return jsonify({'erro': 'Descrição é obrigatória'}), 400
        
        nova_aposta = Aposta(descricao=data['descricao'])
        db.session.add(nova_aposta)
        db.session.commit()
        
        return jsonify(nova_aposta.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': str(e)}), 500

# Routes for times
@app.route('/times', methods=['GET'])
def get_times():
    try:
        times = Time.query.all()
        return jsonify([time.to_dict() for time in times])
    except Exception as e:
        return jsonify({'erro': str(e)}), 500

@app.route('/times', methods=['POST'])
def create_time():
    try:
        data = request.get_json()
        if not data or 'nome' not in data or 'jogadores' not in data:
            return jsonify({'erro': 'Nome e jogadores são obrigatórios'}), 400
        
        # Convert jogadores to JSON string if it's not already
        jogadores_str = data['jogadores']
        if isinstance(jogadores_str, (list, dict)):
            import json
            jogadores_str = json.dumps(jogadores_str)
        
        novo_time = Time(nome=data['nome'], jogadores=jogadores_str)
        db.session.add(novo_time)
        db.session.commit()
        
        return jsonify(novo_time.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': str(e)}), 500

# Health check endpoint
@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
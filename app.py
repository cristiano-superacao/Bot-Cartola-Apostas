import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv
import json

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Configure CORS
CORS(app)

# Database configuration
if os.getenv('DATABASE_URL'):
    # Production database (PostgreSQL)
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
else:
    # Development database (SQLite)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cartola.db'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize database
db = SQLAlchemy(app)


# Database Models
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
    nome = db.Column(db.String(255), nullable=False)
    jogadores = db.Column(db.Text, nullable=False)  # JSON string
    
    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'jogadores': json.loads(self.jogadores) if self.jogadores else []
        }


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
        descricao = data.get('descricao')
        
        if not descricao:
            return jsonify({'erro': 'Descrição é obrigatória'}), 400
        
        nova_aposta = Aposta(descricao=descricao)
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
        nome = data.get('nome')
        jogadores = data.get('jogadores', [])
        
        if not nome:
            return jsonify({'erro': 'Nome é obrigatório'}), 400
        
        novo_time = Time(
            nome=nome,
            jogadores=json.dumps(jogadores)
        )
        db.session.add(novo_time)
        db.session.commit()
        
        return jsonify(novo_time.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': str(e)}), 500


# Health check endpoint
@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'message': 'Bot Cartola Apostas API is running'})


if __name__ == '__main__':
    # Create tables if they don't exist
    with app.app_context():
        db.create_all()
    
    # Run the app
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=os.getenv('FLASK_ENV') == 'development')
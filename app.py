import os
from datetime import datetime
from flask import Flask, request, jsonify, render_template, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Database configuration
DATABASE_URL = os.getenv('DATABASE_URL')
if not DATABASE_URL:
    # Default to SQLite for local development
    DATABASE_URL = 'sqlite:///cartola.db'

# Handle PostgreSQL URL format for SQLAlchemy 2.0+
if DATABASE_URL.startswith('postgres://'):
    DATABASE_URL = DATABASE_URL.replace('postgres://', 'postgresql://', 1)

app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Aposta model
class Aposta(db.Model):
    __tablename__ = 'apostas'
    
    id = db.Column(db.Integer, primary_key=True)
    nome_time = db.Column(db.String(100), nullable=False)
    campeonato = db.Column(db.String(100), nullable=False)
    valor = db.Column(db.Float, nullable=False)
    data = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'nome_time': self.nome_time,
            'campeonato': self.campeonato,
            'valor': self.valor,
            'data': self.data.isoformat()
        }

# Create tables
with app.app_context():
    db.create_all()

# Routes
@app.route('/')
def index():
    return render_template('apostas.html')

@app.route('/apostas', methods=['GET'])
def get_apostas():
    """Get all apostas"""
    try:
        apostas = Aposta.query.all()
        return jsonify([aposta.to_dict() for aposta in apostas])
    except Exception as e:
        return jsonify({'erro': str(e)}), 500

@app.route('/apostas', methods=['POST'])
def create_aposta():
    """Create a new aposta"""
    try:
        data = request.get_json() if request.is_json else request.form.to_dict()
        
        # Validate required fields
        required_fields = ['nome_time', 'campeonato', 'valor']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({'erro': f'Campo {field} é obrigatório'}), 400
        
        # Create new aposta
        aposta = Aposta(
            nome_time=data['nome_time'],
            campeonato=data['campeonato'],
            valor=float(data['valor'])
        )
        
        db.session.add(aposta)
        db.session.commit()
        
        if request.is_json:
            return jsonify(aposta.to_dict()), 201
        else:
            # Redirect for form submission
            return redirect(url_for('index'))
            
    except ValueError:
        return jsonify({'erro': 'Valor deve ser um número'}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({'erro': str(e)}), 500

# Legacy routes for backward compatibility with existing Node.js API
@app.route('/times', methods=['GET'])
def get_times():
    """Legacy route for backward compatibility"""
    return jsonify([])

@app.route('/times', methods=['POST'])
def create_time():
    """Legacy route for backward compatibility"""
    return jsonify({'message': 'Times endpoint deprecated, use apostas instead'}), 200

# Health check
@app.route('/health')
def health():
    return jsonify({'status': 'ok', 'database': 'connected'})

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
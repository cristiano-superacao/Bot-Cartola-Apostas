from flask import Flask, render_template, jsonify, request
import random
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Configuration
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'your-secret-key-here')

# Sample data for teams and players
CARTOLA_PLAYERS = {
    'goleiros': ['Alisson', 'Weverton', 'Cássio', 'Diego Alves'],
    'zagueiros': ['Marquinhos', 'Thiago Silva', 'Gabriel', 'Lucas Veríssimo'],
    'laterais': ['Dani Alves', 'Alex Sandro', 'Fagner', 'Guilherme Arana'],
    'meias': ['Gerson', 'Bruno Guimarães', 'Éverton Ribeiro', 'Arrascaeta'],
    'atacantes': ['Gabigol', 'Pedro', 'Hulk', 'Dudu']
}

PREMIER_LEAGUE_TEAMS = [
    'Manchester City', 'Arsenal', 'Manchester United', 'Newcastle',
    'Liverpool', 'Brighton', 'Aston Villa', 'Tottenham',
    'Brentford', 'Fulham', 'Crystal Palace', 'Chelsea'
]

CHAMPIONS_LEAGUE_TEAMS = [
    'Real Madrid', 'Manchester City', 'Bayern Munich', 'PSG',
    'Barcelona', 'Inter Milan', 'Napoli', 'Borussia Dortmund',
    'AC Milan', 'Chelsea', 'Benfica', 'Porto'
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/cartola-team')
def generate_cartola_team():
    """Generate a random Cartola team"""
    # Select players ensuring no duplicates in same position
    goleiro = random.choice(CARTOLA_PLAYERS['goleiros'])
    zagueiro1 = random.choice(CARTOLA_PLAYERS['zagueiros'])
    zagueiro2 = random.choice([p for p in CARTOLA_PLAYERS['zagueiros'] if p != zagueiro1])
    lateral1 = random.choice(CARTOLA_PLAYERS['laterais'])
    lateral2 = random.choice([p for p in CARTOLA_PLAYERS['laterais'] if p != lateral1])
    meia1 = random.choice(CARTOLA_PLAYERS['meias'])
    meia2 = random.choice([p for p in CARTOLA_PLAYERS['meias'] if p != meia1])
    atacante1 = random.choice(CARTOLA_PLAYERS['atacantes'])
    atacante2 = random.choice([p for p in CARTOLA_PLAYERS['atacantes'] if p != atacante1])
    
    team = {
        'goleiro': goleiro,
        'zagueiro1': zagueiro1,
        'zagueiro2': zagueiro2,
        'lateral1': lateral1,
        'lateral2': lateral2,
        'meia1': meia1,
        'meia2': meia2,
        'atacante1': atacante1,
        'atacante2': atacante2
    }
    return jsonify(team)

@app.route('/api/premier-league-bet')
def generate_premier_league_bet():
    """Generate a Premier League betting suggestion"""
    teams = random.sample(PREMIER_LEAGUE_TEAMS, 2)
    bet_types = ['Vitória', 'Empate', 'Mais de 2.5 gols', 'Menos de 2.5 gols', 'Ambos marcam']
    
    suggestion = {
        'match': f"{teams[0]} vs {teams[1]}",
        'bet_type': random.choice(bet_types),
        'confidence': random.randint(60, 95)
    }
    return jsonify(suggestion)

@app.route('/api/champions-league-bet')
def generate_champions_league_bet():
    """Generate a Champions League betting suggestion"""
    teams = random.sample(CHAMPIONS_LEAGUE_TEAMS, 2)
    bet_types = ['Vitória casa', 'Vitória visitante', 'Empate', 'Mais de 2.5 gols', 'Handicap asiático']
    
    suggestion = {
        'match': f"{teams[0]} vs {teams[1]}",
        'bet_type': random.choice(bet_types),
        'confidence': random.randint(65, 90),
        'odds': round(random.uniform(1.5, 4.0), 2)
    }
    return jsonify(suggestion)

@app.route('/api/all-suggestions')
def get_all_suggestions():
    """Get suggestions for all competitions"""
    cartola_team = generate_cartola_team().get_json()
    premier_bet = generate_premier_league_bet().get_json()
    champions_bet = generate_champions_league_bet().get_json()
    
    return jsonify({
        'cartola_team': cartola_team,
        'premier_league_bet': premier_bet,
        'champions_league_bet': champions_bet
    })

@app.route('/health')
def health_check():
    """Health check endpoint for Render"""
    return jsonify({'status': 'healthy', 'service': 'Bot-Cartola-Apostas'})

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
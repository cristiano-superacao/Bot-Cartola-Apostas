#!/usr/bin/env python3
"""
Simple test script to verify Flask app functionality
"""
import os
import json
import requests
import time
import subprocess
import sys
from threading import Thread

def test_endpoints():
    """Test the Flask application endpoints"""
    base_url = "http://localhost:5000"
    
    print("🧪 Testando endpoints da aplicação Flask...")
    
    # Wait for server to start
    time.sleep(2)
    
    try:
        # Test health check
        print("\n1. Testando endpoint /health")
        response = requests.get(f"{base_url}/health")
        assert response.status_code == 200
        data = response.json()
        assert data['status'] == 'ok'
        assert data['database'] == 'connected'
        print("✅ Health check passou")
        
        # Test GET apostas (empty)
        print("\n2. Testando GET /apostas (vazio)")
        response = requests.get(f"{base_url}/apostas")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print(f"✅ GET /apostas retornou {len(data)} apostas")
        
        # Test POST apostas
        print("\n3. Testando POST /apostas")
        test_aposta = {
            "nome_time": "Palmeiras",
            "campeonato": "Brasileirão",
            "valor": 50.00
        }
        response = requests.post(
            f"{base_url}/apostas",
            headers={"Content-Type": "application/json"},
            data=json.dumps(test_aposta)
        )
        assert response.status_code == 201
        data = response.json()
        assert data['nome_time'] == test_aposta['nome_time']
        assert data['campeonato'] == test_aposta['campeonato']
        assert data['valor'] == test_aposta['valor']
        assert 'id' in data
        assert 'data' in data
        print("✅ POST /apostas criou aposta com sucesso")
        
        # Test GET apostas (with data)
        print("\n4. Testando GET /apostas (com dados)")
        response = requests.get(f"{base_url}/apostas")
        assert response.status_code == 200
        data = response.json()
        assert len(data) >= 1
        assert data[0]['nome_time'] == test_aposta['nome_time']
        print(f"✅ GET /apostas retornou {len(data)} apostas")
        
        # Test legacy endpoint
        print("\n5. Testando endpoint legacy /times")
        response = requests.get(f"{base_url}/times")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print("✅ Endpoint legacy /times funcionando")
        
        print("\n🎉 Todos os testes passaram!")
        return True
        
    except Exception as e:
        print(f"\n❌ Erro nos testes: {e}")
        return False

def main():
    """Run tests"""
    print("🚀 Iniciando testes da aplicação Flask...")
    
    # Start Flask server in background
    print("📡 Iniciando servidor Flask...")
    server_process = subprocess.Popen([
        sys.executable, "app.py"
    ], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    
    try:
        # Run tests
        success = test_endpoints()
        
        if success:
            print("\n✅ Aplicação Flask está funcionando corretamente!")
        else:
            print("\n❌ Alguns testes falharam")
            
    finally:
        # Stop server
        print("\n🛑 Parando servidor Flask...")
        server_process.terminate()
        server_process.wait()

if __name__ == "__main__":
    main()
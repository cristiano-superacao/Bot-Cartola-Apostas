#!/usr/bin/env python3
"""
Development server runner for Bot Cartola Apostas
"""
import os
import sys
from app import app

if __name__ == '__main__':
    print("🚀 Starting Bot Cartola Apostas Development Server...")
    print("📊 Access the web interface at: http://localhost:5000")
    print("🔧 API endpoints available at: http://localhost:5000/apostas")
    print("❤️  Health check at: http://localhost:5000/health")
    print("🛑 Press Ctrl+C to stop the server\n")
    
    # Set development environment
    os.environ['FLASK_ENV'] = 'development'
    os.environ['FLASK_DEBUG'] = 'True'
    
    # Run the app
    app.run(
        host='0.0.0.0',
        port=int(os.getenv('PORT', 5000)),
        debug=True
    )
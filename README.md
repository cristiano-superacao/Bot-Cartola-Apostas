# FutAnalytics - Bot Cartola Apostas

Sistema inteligente de análise de futebol e apostas esportivas com interface responsiva.

## 🚀 Deploy no Render

### Pré-requisitos
- Conta no [Render](https://render.com)
- Repositório Git conectado

### Configuração de Deploy

1. **Criar Web Service no Render:**
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: `Node`

2. **Variáveis de Ambiente:**
   ```
   PORT=4000
   NODE_ENV=production
   ```

3. **Arquivos Estáticos:**
   - ✅ CSS separado em `/static/style.css`
   - ✅ Favicon em `/static/favicon.ico` e `/static/favicon.svg`
   - ✅ Servidor configurado para servir arquivos estáticos

## 📁 Estrutura do Projeto

```
├── static/                 # Arquivos estáticos
│   ├── style.css          # CSS responsivo separado
│   ├── favicon.ico        # Favicon ICO
│   └── favicon.svg        # Favicon SVG
├── src/                   # Código React
│   └── main.jsx          # Entry point
├── server.js             # Servidor Express
├── index.html            # Template HTML principal
└── package.json          # Dependências
```

## 🎨 Recursos Implementados

### ✅ Responsividade
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: 
  - Mobile: < 768px (coluna única)
  - Tablet: 768px - 1024px (2 colunas)  
  - Desktop: > 1024px (3-4 colunas)
- **Typography**: Escalonamento responsivo de texto
- **Touch-friendly**: Botões e interações otimizadas para toque

### ✅ Arquivos Estáticos
- **CSS Separado**: Estilos organizados em arquivo próprio
- **Favicon Duplo**: Suporte ICO + SVG para melhor compatibilidade
- **Serving Otimizado**: Express configurado para servir estáticos

### ✅ Deploy-Ready
- **Render Compatible**: Configuração otimizada para Render
- **Environment Variables**: Suporte a variáveis de ambiente
- **Production Ready**: Otimizações para produção

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar servidor
npm start

# Acessar aplicação
http://localhost:4000
```

## 📱 Testes de Responsividade

A aplicação foi testada nos seguintes breakpoints:

- ✅ **Mobile (480px)**: Layout em coluna única
- ✅ **Tablet (768px)**: Layout em 2 colunas  
- ✅ **Desktop (1200px+)**: Layout completo

## 🎯 Funcionalidades

- **Fantasy Game**: Geração automática de times otimizados para Cartola FC e Premier League Fantasy
- **Apostas Esportivas**: Criação de bilhetes de apostas mistas com odds entre 5 e 150
- **Histórico**: Acompanhamento de resultados e estatísticas detalhadas
- **Interface Responsiva**: Adaptável a todos os dispositivos

## 📊 Tecnologias

- **Frontend**: React, HTML5, CSS3 Responsivo
- **Backend**: Node.js, Express
- **Database**: SQLite3
- **Deploy**: Render
- **Icons**: Lucide React, Favicon personalizado

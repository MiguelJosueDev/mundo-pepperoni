#!/bin/bash
# Script para instalar MongoDB en macOS usando Homebrew

echo "Instalando MongoDB Community Edition en macOS..."

# Verificar si Homebrew está instalado
if ! command -v brew &> /dev/null; then
    echo "Homebrew no está instalado. Instalando Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
else
    echo "Homebrew ya está instalado. Actualizando..."
    brew update
fi

# Instalar MongoDB
echo "Instalando MongoDB Community Edition..."
brew tap mongodb/brew
brew install mongodb-community@7.0

# Iniciar MongoDB como servicio
echo "Iniciando MongoDB como servicio..."
brew services start mongodb-community@7.0

# Verificar estado
echo "Verificando el estado de MongoDB..."
brew services list | grep mongodb

echo "MongoDB instalado y ejecutándose en localhost:27017"
echo "Para conectarte, usa: mongodb://localhost:27017"
echo "Para iniciar MongoDB manualmente: brew services start mongodb-community"
echo "Para detener MongoDB: brew services stop mongodb-community" 
# Guía de Deployment para Mundo Pepperoni

## Configuración en Vercel

### 1. Variables de Entorno
En tu dashboard de Vercel, ve a Project Settings > Environment Variables y agrega:

```
USERNAME=admin
PASSWORD=eq4589ze
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pepperoni?retryWrites=true&w=majority
```

### 2. Configuración de Node.js
Asegúrate de que tu proyecto esté configurado para usar Node.js 18.x:
- Ve a Project Settings > General
- En "Node.js Version", selecciona 18.x

### 3. Build Settings
- Framework Preset: Next.js
- Build Command: `npm run build` (por defecto)
- Output Directory: `.next` (por defecto)

### 4. Deployment
1. Conecta tu repositorio de GitHub
2. Configura las variables de entorno
3. Haz deploy

## Configuración Local

### Instalación
```bash
npm install
```

### Variables de Entorno
Crea un archivo `.env` con:
```
USERNAME=admin
PASSWORD=eq4589ze
MONGODB_URI=mongodb://localhost:27017/pepperoni
```

### Ejecutar en desarrollo
```bash
npm run dev
```

### Ejecutar en producción
```bash
npm run build
npm start
```

## Solución de Problemas

### Error de Node.js Version
Si obtienes el error "Found invalid Node.js Version: 16.x":
1. Verifica que el archivo `.nvmrc` contenga `18`
2. Asegúrate de que `package.json` tenga `"engines": {"node": "18.x"}`
3. En Vercel Project Settings, cambia Node.js Version a 18.x

### Problemas de MongoDB
- Para desarrollo local: Usa `mongodb://localhost:27017/pepperoni`
- Para producción: Usa MongoDB Atlas con la cadena de conexión completa
- Asegúrate de que las IPs estén permitidas en MongoDB Atlas

### Problemas de Build
Si el build falla:
1. Verifica que todas las dependencias estén instaladas
2. Asegúrate de que no hay errores de TypeScript/ESLint
3. Revisa que las rutas de archivos sean correctas 
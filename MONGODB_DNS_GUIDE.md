# Guía para Resolver Problemas de DNS con MongoDB Atlas

## El problema
Estás experimentando un error "getaddrinfo ENOTFOUND" al intentar conectarte a MongoDB Atlas. Este error indica que tu sistema no puede resolver los nombres de dominio de MongoDB Atlas.

## Soluciones

### 1. Cambiar los servidores DNS

#### Para macOS:
1. Ve a **Preferencias del Sistema** > **Red**
2. Selecciona tu conexión activa y haz clic en **Avanzado**
3. Ve a la pestaña **DNS**
4. Agrega estos servidores DNS:
   - `8.8.8.8` (Google DNS)
   - `8.8.4.4` (Google DNS alternativo)
   - `1.1.1.1` (Cloudflare DNS)
   - `1.0.0.1` (Cloudflare DNS alternativo)
5. Haz clic en **OK** y luego en **Aplicar**

### 2. Modificar el archivo hosts

Agrega las direcciones IP de MongoDB Atlas a tu archivo hosts:

1. Abre Terminal
2. Ejecuta: `sudo nano /etc/hosts`
3. Agrega las siguientes líneas (deberás reemplazar con las IP reales):
```
52.87.152.243 ac-uwkgvne-shard-00-00.cos70.mongodb.net
52.22.117.156 ac-uwkgvne-shard-00-01.cos70.mongodb.net
54.211.27.78 ac-uwkgvne-shard-00-02.cos70.mongodb.net
```
4. Guarda con Ctrl+O, Enter, y luego Ctrl+X para salir

Para obtener las IP reales, usa:
```
ping ac-uwkgvne-shard-00-00.cos70.mongodb.net
```
Si el ping tampoco funciona, usa estas herramientas online:
- https://mxtoolbox.com/DNSLookup.aspx
- https://www.whatsmydns.net/

### 3. Usar MongoDB Compass

MongoDB Compass puede ayudarte a probar la conexión de manera gráfica:

1. Descarga [MongoDB Compass](https://www.mongodb.com/try/download/compass)
2. Instálalo y ábrelo
3. Pega tu cadena de conexión y prueba si funciona

### 4. Usar una base de datos local para desarrollo

Instala MongoDB localmente:
```bash
chmod +x ./install-mongodb.sh
./install-mongodb.sh
```

### 5. Verificar reglas de firewall

Asegúrate de que tu firewall no esté bloqueando las conexiones salientes a MongoDB Atlas (puertos 27017, 27018, 27019).

### 6. Verificar la red

Si estás en una red corporativa o utilizando una VPN, es posible que tengan restricciones. Prueba desde una red diferente, como la de tu teléfono móvil compartida. 
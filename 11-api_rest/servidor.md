# Ejecutar servidor local API falsa

=========================
1° ejecutar node (importante)
2° instalar json_server (omitir si ya esta instalado)
3° crear un archivo JSON para simular una DB base de datos

## iniciar el servidor`
=> json-server --watch api_rest/db.json
`cambiar de puerto`
=> json-server -w -p 5000 api_rest/db.json
`ayuda de comandos`

json-server [options] <source>
Opciones:
--config, -c Ruta al archivo de configuración [predeterminado: "json-server.json"]
--port, -p Establecer puerto [predeterminado: 3000]
--host, -H Establecer host [predeterminado: "localhost"]
--watch, -w Watch archivo (s) [boolean]
--routes, -r Ruta al archivo de rutas
--middlewares, -m Rutas a archivos de middleware [matriz]
--static , -s Establecer directorio de archivos estáticos
--read-only, --ro Permitir solo solicitudes GET [booleano]
--no-cors, --nc Desactivar el uso compartido de recursos de origen cruzado [booleano]
--no-gzip, --ng Deshabilitar codificación de contenido GZIP [booleano]
--snapshots, -S Establecer directorio de instantáneas [predeterminado: "."]
--Delay, -d Agregar retraso a las respuestas (ms)
--id, -i Establecer la propiedad de identificación de la base de datos (por ejemplo, \_id ) [predeterminado: "id"]
--extranjero KeySuffix, --fks Establece el sufijo de clave externa, (p. Ej. \_id como en post_id) [predeterminado: "Id"]
--quiet, -q Suprime los mensajes de registro de la salida [boolean]
--help, -h Mostrar ayuda [boolean]
--version, -v Mostrar el número de versión [boolean]

### Examples:
json-server db.json
json-server file.js
json-server http://example.com/db.json
json-server [opciones] <origen>

https://github.com/typicode/json-server

# comandos MVN multiples versiones de node

=========================
nvm list =>
muestra todas las versiones de node instaladas
nvm install 12.11.1 =>
instala una version especifica de node
nvm use 13.11.5 =>
para usar una version especifica de las instaladas

para mas colsultas https://github.com/coreybutler/nvm-windows

# CRUD AJAX HTTPREQUEST pasos en general

=========================
1 crea la instancia del objeto
2 crea el listenner (evento)
3 abrir la peticion
4 enviarla
=========================

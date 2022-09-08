# AJAX

asincrono javascript and xml
javascript y xml(json) asincrono

# METODOS NATIVOS

XMLHttpRequest
APIFetch

# LIBERIAS EXTERNAS

Axios

# COMO FUNCIONA AJAX?

HTML y CSS para crear una presentación basada en estándares
DOM para la interacción y manipulación de la presentación
HTML, XML y JSON para el intercambio y la manipulación de información
XMLHttpRequest o Fetch, para el intercambio asincrono de información
Javascript para unir todas las demás tecnologias

# CODIGO DE ESTADO DE LA PETICION

Ready_state_uninitialized = 0
Ready_state_loading = 1 => se estan enviando los datos al serv.
Ready_state_loaded = 2 => ya cargo los datos del serv.
Ready_state_interactive = 3 => js ya tiene acceso a los datos
Ready_state_complete = 4 => ya tiene los datos listos para manipular

# CODIGOS DE ESTADO DE RESPUESTA

Respuestas informativas (100–199),
Respuestas satisfactorias (200–299),
Redirecciones (300–399),
Errores de los clientes (400–499),
y errores de los servidores (500–599).

# nota: mas info https://developer.mozilla.org/es/docs/Web/HTTP/Status

`VERVOS HTTP PETICIONES REST`
GET listar datos => user/ user/id
POST crear recusos => user/
PUT reemplazar un recurso => user/id
PATCH actualizar o reemplazar parcial => user/id
DELETE eliminar => user/id

# nota: mas info https://developer.mozilla.org/es/docs/Web/HTTP/Methods

=========================================

# AJAX

Metodos para extraer un body de la respuesta del Fetch
arrayBuffer()
blob()
json()
text()
formData()

# nota: mas info => https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch

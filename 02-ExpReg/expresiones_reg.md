IMPORT!! usa expresiones regulares con match(/ExpReg/ig)
Los corchetes se usan para encontrar una variedad de caracteres:

# Coincidencias Basicas
      .       - Cualquier Caracter, excepto nueva linea
      \d      - Cualquier Digitos (0-9)
      \D      - No es un Digito (0-9)
      \w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
      \W      - No es un Caracter de Palabra.
      \s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
      \S      - No es un Espacio, Tab o nueva linea.

   ### Limites

      \b      - Limite de Palabra
      \B      - No es un Limite de Palabra
      ^       - Indica desde donde debe analizar
      $       - Indica hasta donde debe analizar

   ### Cuantificadores:

      *       - 0 o Más
      +       - 1 o Más
      ?       - el valor precedente es opcional
      {3}     - Numero Exacto
      {3,4}   - Rango de Numeros (Minimo, Maximo)

## Conjuntos de Caracteres

      []      - Caracteres dentro de los brackets
      [^ ]    - Caracteres que NO ESTAN dentro de los brackets

   ### Grupos

      ( )     - Grupo
      |       - Uno u otro

## Descripción de la expresión

      [abc] Encuentra cualquier carácter entre paréntesis
      [^ abc] Encuentra cualquier carácter que NO esté entre corchetes
      [0-9] Encuentra cualquier carácter entre paréntesis (cualquier dígito)
      [^ 0-9] Encuentra cualquier carácter que NO esté entre corchetes (cualquier no dígito)
      (x | y) Encuentre cualquiera de las alternativas especificadas


## Descripción de metacaracteres

      . Encuentre un solo carácter, excepto la nueva línea o el terminador de línea
      \ w Encuentra un carácter de palabra
      \ W Buscar un carácter que no sea de palabra
      \ d Encuentra un dígito
      \ D Encuentra un carácter sin dígitos
      \ s Encuentra un carácter de espacio en blanco
      \ S Encuentra un personaje que no sea un espacio en blanco
      \ b Encuentra una coincidencia al principio / al final de una palabra, comenzando así: \ bHI, termina así: HI \ b
      \ B Encuentra una coincidencia, pero no al principio / al final de una palabra
      \ 0 Encuentra un personaje NULO
      \ n Encuentra un nuevo personaje de línea
      \ f Encuentra un personaje de feed de formulario
      \ r Encuentra un personaje de retorno de carro
      \ t Encuentra un caracter de tabulación
      \ v Encuentra un carácter de tabulación vertical
      \ xxx Encuentra el carácter especificado por un número octal xxx
      \ xdd Encuentra el carácter especificado por un número hexadecimal dd
      \ udddd Encuentra el carácter Unicode especificado por un número hexadecimal dddd

## Descripción del cuantificador

      n + Coincide con cualquier cadena que contenga al menos un n
      n * Coincide con cualquier cadena que contenga cero o más ocurrencias de n
      ¿norte? Coincide con cualquier cadena que contenga cero o una aparición de n
      n {X} Coincide con cualquier cadena que contenga una secuencia de X n
      n {X, Y} Coincide con cualquier cadena que contenga una secuencia de X a Y n
      n {X,} Coincide con cualquier cadena que contenga una secuencia de al menos X n
      n $ Coincide con cualquier cadena con n al final
      ^ n Coincide con cualquier cadena con n al principio
      ? = n Coincide con cualquier cadena seguida de una cadena específica n
      ?! n Coincide con cualquier cadena que no sea seguida por una cadena específica n

## Descripción de propiedad

      constructor -Devuelve la función que creó el prototipo del objeto RegExp
      global 	-Comprueba si el modificador "g" está configurado
      ignoreCase -Comprueba si el modificador "i" está configurado
      lastIndex -Especifica el índice en el que comenzar la próxima coincidencia
      multiline -Comprueba si el modificador "m" está configurado
      source 	-Devuelve el texto del patrón RegExp


## Descripción del método

      compile () Desaprobado en la versión 1.5. Compila una expresión regular
      exec () Prueba una coincidencia en una cadena. Devuelve el primer partido
      test () Prueba una coincidencia en una cadena. Devuelve verdadero o falso
      toString () Devuelve el valor de cadena de la expresión regular
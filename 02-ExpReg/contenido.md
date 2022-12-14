# Expresiones regulares

  Algunas personas, cuando se enfrentan a un problema, piensan:'Lo sé, usaré expresiones regulares'. Ahora tienen dos problemas.

  Jamie Zawinski
  Yuan-Ma dijo: 'Cuando cortas contra el grano de la madera, se necesita mucha fuerza. Cuando se programa contra el grano del problema, se necesita mucho código.'

  Maestro Yuan-Ma, El libro de programación
  A railroad diagram
  Las herramientas y técnicas de programación sobreviven y se propagan de una manera caótica y evolutiva. No siempre son los bonitos o brillantes los que ganan, sino los que funcionan lo suficientemente bien dentro del nicho correcto o que pasan a estar integrados con otra pieza de tecnología exitosa.

  En este capítulo, discutiré una de esas herramientas, expresiones regulares. Las expresiones regulares son una forma de describir patrones en los datos de cadena. Forman un lenguaje pequeño e independiente que forma parte de JavaScript y muchos otros lenguajes y sistemas.

  Las expresiones regulares son terriblemente incómodas y extremadamente útiles. Su sintaxis es críptica, y la interfaz de programación que JavaScript proporciona para ellos es torpe. Pero son una poderosa herramienta para inspeccionar y procesar cadenas. Comprender correctamente las expresiones regulares le hará un programador más eficaz.

  Creación de una expresión regular
  Una expresión regular es un tipo de objeto. Se puede construir con el constructor o escribirse como un valor literal encerrando un patrón en caracteres de barra diagonal ().RegExp/

  editar y ejecutar código haciendo clic en éllet re1

      new RegExp("abc");
      let re2 = /abc/;

  Ambos objetos de expresión regular representan el mismo patrón: un carácter seguido de un b seguido de un c.

  Cuando se utiliza el constructor, el patrón se escribe como una cadena normal, por lo que las reglas habituales se aplican a las barras diagonales inversas.RegExp

  La segunda notación, donde el patrón aparece entre caracteres de barra diagonal, trata las barras diagonales inversas de forma diferente. En primer lugar, ya que una barra diagonal termina el patrón, necesitamos poner una barra diagonal inversa antes de cualquier barra diagonal que queremos ser parte del patrón. Además, se conservaránlas barras diagonales inversas que no forman parte de códigos de caracteres especiales (como ) , en lugar de ignorarse como están en cadenas, y cambiarán el significado del patrón. Algunos caracteres, como los signos de interrogación y signos más, tienen significados especiales en las expresiones regulares y deben ir precedidos de una barra diagonal invertida si están destinados a representar el carácter en sí.\n

    let eighteenPlus = /eighteen\+/;
  
## Pruebas para los partidos

  Los objetos de expresión regular tienen una serie de métodos. El más simple es . Si le pasa una cadena, devolverá un valor booleano que le indicará si la cadena contiene una coincidencia del patrón en la expresión.test

    console.log(/abc/.test("abcde"));
    // → true
    console.log(/abc/.test("abxde"));
    // → false

Una expresión regular que consta únicamente de caracteres no especiales representa simplemente esa secuencia de caracteres. Si abc se produce en cualquier parte de la cadena con la que estamos probando (no solo al principio), devolverá .testtrue

## Conjuntos de caracteres

  Averiguar si una cadena contiene abc también podría hacerse con una llamada a . Las expresiones regulares nos permiten expresar patrones más complicados.indexOf

  Digamos que queremos coincidir con cualquier número. En una expresión regular, colocar un conjunto de caracteres entre corchetes hace que esa parte de la expresión coincida con cualquiera de los caracteres entre corchetes.

  Las dos expresiones siguientes coinciden con todas las cadenas que contienen un dígito:

    console.log(/[0123456789]/.test("in 1992"));
    // → true
    console.log(/[0-9]/.test("in 1992"));
    // → true
  
  Entre corchetes, se puede utilizar un guión () entre dos caracteres para indicar un intervalo de caracteres, donde el orden viene determinado por el número Unicode del carácter. Los caracteres 0 a 9 se sientan uno al lado del otro en este orden (códigos 48 a 57), por lo que cubre todos ellos y coincide con cualquier dígito.-[0-9]

  Varios grupos de caracteres comunes tienen sus propios accesos directos integrados. Los dígitos son uno de ellos: significa lo mismo que .\d[0-9]

    \d - Cualquier carácter de dígito
    \w - Un carácter alfanumérico ("carácter de palabra")
    \s - Cualquier carácter de espacio en blanco (espacio, tabulación, nueva línea y similares)
    \D - Un carácter que no es un dígito
    \W - Un carácter no alfanumérico
    \S - Carácter no espacial
    .  - Cualquier personaje excepto newline

  Por lo que podría coincidir con un formato de fecha y hora como 01-30-2003 15:20 con la siguiente expresión:

    let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
    console.log(dateTime.test("01-30-2003 15:20"));
    // → true
    console.log(dateTime.test("30-jan-2003 15:20"));
    // → false

  Eso se ve completamente horrible, ¿no? La mitad son barras diagonales inversas, produciendo un ruido de fondo que hace difícil detectar el patrón real expresado. Veremos una versión ligeramente mejorada de esta expresión más adelante.

  Estos códigos de barra diagonal invertida también se pueden utilizar entre corchetes. Por ejemplo, significa cualquier dígito o un carácter de punto. Pero el período en sí, entre corchetes, pierde su significado especial. Lo mismo ocurre con otros caracteres especiales, como .[\d.]+

  Para invertir un conjunto de caracteres, es decir, para expresar que desea que coincida con cualquier carácter excepto los del conjunto, puede escribir un carácter de intercalación () después del corchete de apertura.^

  let notBinary = /[^01]/;
  console.log(notBinary.test("1100100010100110"));
  // → false
  console.log(notBinary.test("1100100010200110"));
  // → true
  Repetir partes de un patrón
  Ahora sabemos cómo hacer coincidir un solo dígito. ¿Qué pasa si queremos hacer coincidir un número entero, una secuencia de uno o más dígitos?

  Cuando se coloca un signo más () después de algo en una expresión regular, indica que el elemento se puede repetir más de una vez. Por lo tanto, coincide con uno o más caracteres de dígitos.+/\d+/

    console.log(/'\d+'/.test("'123'"));
    // → true
    console.log(/'\d+'/.test("''"));
    // → false
    console.log(/'\d*'/.test("'123'"));
    // → true
    console.log(/'\d*'/.test("''"));
    // → true
  La estrella () tiene un significado similar, pero también permite que el patrón coincida con cero veces. Algo con una estrella después de que nunca impide que un patrón coincida, solo coincidirá con cero instancias si no puede encontrar ningún texto adecuado para que coincida.*

  Un signo de interrogación hace que una parte de un patrón sea opcional,lo que significa que puede producirse cero veces o una vez. En el ejemplo siguiente, se permite que se produzca el carácter u, pero el patrón también coincide cuando falta.

    let neighbor = /neighbou?r/;
    console.log(neighbor.test("neighbour"));
    // → true
    console.log(neighbor.test("neighbor"));
    // → true

  Para indicar que un patrón debe producirse un número preciso de veces, utilice llaves. Poner después de un elemento, por ejemplo, requiere que se produzca exactamente cuatro veces. También es posible especificar un rango de esta manera: significa que el elemento debe producirse al menos dos veces y como máximo cuatro veces.{4}{2,4}

    Here is another version of the date and time pattern that allows both single- and double-digit days, months, and hours. It is also slightly easier to decipher.

    let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
    console.log(dateTime.test("1-30-2003 8:45"));
    // → true
    You can also specify open-ended ranges when using braces by omitting the number after the comma. So, means five or more times.{5,}

## Agrupar subexpresiones

  Para utilizar un operador similar o en más de un elemento a la vez, debe usar paréntesis. Una parte de una expresión regular que está entre paréntesis cuenta como un único elemento en lo que respecta a los operadores siguientes.*+

    let cartoonCrying = /boo+(hoo+)+/i;
    console.log(cartoonCrying.test("Boohoooohoohooo"));
    // → true
    El primer y segundo carácter se aplican sólo a la segunda o in boo y hoo, respectivamente. El tercero se aplica a todo el grupo, que coincide con una o más secuencias como esa.++(hoo+)

  El final de la expresión en el ejemplo hace que esta expresión regular no distintive, lo que le permite coincidir con la B en mayúsculas en la cadena de entrada, aunque el patrón está en sí en minúsculas.i

## Partidos y grupos

  El método es la forma más sencilla y absoluta de hacer coincidir una expresión regular. Sólo te dice si coincidía y nada más. Las expresiones regulares también tienen un método (execute) que se devolverá si no se encontró ninguna coincidencia y devuelven un objeto con información sobre la coincidencia en caso contrario.testexecnull

    let match = /\d+/.exec("one two 100");
    console.log(match);
    // → ["100"]
    console.log(match.index);
    // → 8

  Un objeto devuelto por tiene una propiedad que nos indica dónde comienza la coincidencia correcta en la cadena. Aparte de eso, el objeto se ve como (y de hecho es) una matriz de cadenas, cuyo primer elemento es la cadena que se hizo coincidir. En el ejemplo anterior, esta es la secuencia de dígitos que estábamos buscando.execindex

    Los valores de cadena tienen un método que se comporta de forma similar.match

    console.log("one two 100".match(/\d+/));
    // → ["100"]

  Cuando la expresión regular contiene subexpresiones agrupadas con paréntesis, el texto que coincida con esos grupos también se mostrará en la matriz. Toda la coincidencia es siempre el primer elemento. El siguiente elemento es la parte que coincide con el primer grupo (el que tiene paréntesis de apertura viene primero en la expresión), luego el segundo grupo, etc.

    let quotedText = /'([^']*)'/;
    console.log(quotedText.exec("she said 'hello'"));
    // → ["'hello'", "hello"]

  Cuando un grupo no termina siendo emparejado en absoluto (por ejemplo, cuando va seguido de un signo de interrogación), su posición en la matriz de salida se mantendrá . De forma similar, cuando un grupo coincide varias veces, solo la última coincidencia termina en la matriz.undefined

    console.log(/bad(ly)?/.exec("bad"));
    // → ["bad", undefined]
    console.log(/(\d)+/.exec("123"));
    // → ["123", "3"]

  Los grupos pueden ser útiles para extraer partes de una cadena. Si no solo queremos verificar si una cadena contiene una fecha, sino también extraerla y construir un objeto que la represente, podemos ajustar paréntesis alrededor de los patrones de dígitos y elegir directamente la fecha del resultado de .exec

  Pero primero tomaremos un breve desvío, en el que analizamos la forma integrada de representar los valores de fecha y hora en JavaScript.

## La clase Date

JavaScript tiene una clase estándar para representar fechas o, más bien, puntos en el tiempo. Se llama . Si simplemente crea un objeto de fecha utilizando , obtendrá la fecha y hora actuales.Datenew

    console.log(new Date());
    // → Mon Nov 13 2017 16:19:11 GMT+0100 (CET)
    También puede crear un objeto para un tiempo específico.

    console.log(new Date(2009, 11, 9));
    // → Wed Dec 09 2009 00:00:00 GMT+0100 (CET)
    console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
    // → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)

  JavaScript uses a convention where month numbers start at zero (so December is 11), yet day numbers start at one. This is confusing and silly. Be careful.

  The last four arguments (hours, minutes, seconds, and milliseconds) are optional and taken to be zero when not given.

  Timestamps are stored as the number of milliseconds since the start of 1970, in the UTC time zone. This follows a convention set by “Unix time”, which was invented around that time. You can use negative numbers for times before 1970. The method on a date object returns this number. It is big, as you can imagine.getTime

    console.log(new Date(2013, 11, 19).getTime());
    // → 1387407600000
    console.log(new Date(1387407600000));
    // → Thu Dec 19 2013 00:00:00 GMT+0100 (CET)

  If you give the constructor a single argument, that argument is treated as such a millisecond count. You can get the current millisecond count by creating a new object and calling on it or by calling the function.DateDategetTimeDate.now

  Date objects provide methods such as , , , , , and to extract their components. Besides there’s also , which gives you the year minus 1900 ( or ) and is mostly useless.getFullYeargetMonthgetDategetHoursgetMinutesgetSecondsgetFullYeargetYear98119

  Putting parentheses around the parts of the expression that we are interested in, we can now create a date object from a string.

    function getDate(string) {
      let [_, month, day, year] =
        /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
      return new Date(year, month - 1, day);
    }
    console.log(getDate("1-30-2003"));
    // → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)
    The (underscore) binding is ignored and used only to skip the full match element in the array returned by ._exec

## Word and string boundaries

  Unfortunately, will also happily extract the nonsensical date 00-1-3000 from the string . A match may happen anywhere in the string, so in this case, it’ll just start at the second character and end at the second-to-last character.getDate"100-1-30000"

  Si queremos exigir que la coincidencia debe abarcar toda la cadena, podemos agregar los marcadores y . El símbolo de intercalación coincide con el inicio de la cadena de entrada, mientras que el signo de dólar coincide con el final. Por lo tanto, coincide con una cadena que consta enteramente de uno o más dígitos, coincide con cualquier cadena que comience con un signo de exclamación y no coincida con ninguna cadena (no puede haber una x antes del inicio de la cadena).^$/^\d+$//^!//x^/

  Si, por otro lado, sólo queremos asegurarnos de que la fecha comienza y termina en un límite de palabras, podemos usar el marcador . Un límite de palabra puede ser el inicio o el final de la cadena o cualquier punto de la cadena que tenga un carácter de palabra (como en ) en un lado y un carácter sin palabra en el otro.\b\w

    console.log(/cat/.test("concatenate"));
    // → true
    console.log(/\bcat\b/.test("concatenate"));
    // → false
    Tenga en cuenta que un marcador de límite no coincide con un carácter real. Sólo aplica que la expresión regular coincide solo cuando una determinada condición se mantiene en el lugar donde aparece en el patrón.

## Patrones de elección

  Digamos que queremos saber si un pedazo de texto contiene no sólo un número, sino un número seguido de una de las palabras cerdo, vaca,o pollo,o cualquiera de sus formas plurales.

  Podríamos escribir tres expresiones regulares y probarlas a su vez, pero hay una manera más agradable. El carácter de tubería () indica una elección entre el patrón a su izquierda y el patrón a su derecha. Así que puedo decir esto:|

    let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
    console.log(animalCount.test("15 pigs"));
    // → true
    console.log(animalCount.test("15 pigchickens"));
    // → false
    Los paréntesis se pueden utilizar para limitar la parte del patrón al que se aplica el operador de tubería, y puede colocar varios de estos operadores uno al lado del otro para expresar una opción entre más de dos alternativas.

## La mecánica de la coincidencia

  Conceptualmente, cuando se usa o , el motor de expresiones regulares busca una coincidencia en la cadena intentando hacer coincidir la expresión primero desde el inicio de la cadena, a continuación, desde el segundo carácter, etc., hasta que encuentre una coincidencia o llegue al final de la cadena. Devolverá la primera coincidencia que se puede encontrar o no encontrará ninguna coincidencia.exectest

  Para realizar la coincidencia real, el motor trata una expresión regular algo así como un diagrama de flujo. Este es el diagrama para la expresión ganadera en el ejemplo anterior:

    Visualization of /\b\d+ (pig|cow|chicken)s?\b/
    Nuestra expresión coincide si podemos encontrar una ruta desde el lado izquierdo del diagrama hasta el lado derecho. Mantenemos una posición actual en la cadena, y cada vez que nos movemos a través de un cuadro, verificamos que la parte de la cadena después de nuestra posición actual coincide con ese cuadro.

  Así que si tratamos de igualar desde la posición 4, nuestro progreso a través del diagrama de flujo se vería así:"the 3 pigs"

  En la posición 4, hay un límite de palabras, por lo que podemos movernos más allá de la primera caja.

  Todavía en la posición 4, encontramos un dígito, así que también podemos movernos más allá de la segunda caja.

  En la posición 5, un trazado vuelve a ser antes del segundo cuadro (dígito), mientras que el otro se mueve hacia delante a través del cuadro que contiene un solo carácter de espacio. Hay un espacio aquí, no un dígito, así que debemos tomar el segundo camino.

  Ahora estamos en la posición 6 (el inicio de los cerdos)y en la rama de tres vías en el diagrama. Aquí no vemos vaca ni pollo, pero sí cerdo,así que tomamos esa rama.

  En la posición 9, después de la bifurcación de tres vías, una ruta salta el cuadro s y va directamente al límite de la palabra final, mientras que el otro trazado coincide con un s. Hay un carácter s aquí, no un límite de palabra, así que pasamos por el cuadro s.

  Estamos en la posición 10 (el final de la cadena) y solo podemos coincidir con un límite de palabra. El final de una cadena cuenta como un límite de palabra, por lo que pasamos por el último cuadro y hemos hecho coincidir correctamente con esta cadena.

## Retroceso

  La expresión regular coincide con un número binario seguido de un b,un número hexadecimal (es decir, base 16, con las letras a a f de pie para los dígitos 10 a 15) seguido de un h, o un número decimal normal sin carácter de sufijo. Este es el diagrama correspondiente:/\b([01]+b|[\da-f]+h|\d+)\b/

    Visualization of /\b([01]+b|\d+|[\da-f]+h)\b/

  Al hacer coincidir esta expresión, a menudo sucederá que se introduce la rama superior (binaria) aunque la entrada no contenga realmente un número binario. Al hacer coincidir la cadena, por ejemplo, se hace evidente sólo en el 3 que estamos en la rama incorrecta. La cadena coincide con la expresión, pero no con la rama en la que estamos actualmente."103"

  Así que el emparejador retrocede. Al escribir una rama, recuerda su posición actual (en este caso, al principio de la cadena, justo después del primer cuadro de límite en el diagrama) para que pueda volver atrás y probar otra rama si la actual no funciona. Para la cadena, después de encontrar el carácter 3, comenzará a probar la rama para números hexadecimales, lo que falla de nuevo porque no hay h después del número. Así que intenta la rama de número decimal. Este encaja, y se reporta un partido después de todo."103"

  El emparejador se detiene tan pronto como encuentra una coincidencia completa. Esto significa que si varias ramas podrían coincidir potencialmente con una cadena, solo se utiliza la primera (ordenada por donde aparecen las ramas en la expresión regular).

  El retroceso también ocurre para operadores de repetición como + y . Si coincide con , la parte primero intentará consumir toda la cadena. El motor entonces se dará cuenta de que necesita una x para que coincida con el patrón. Puesto que no hay x más allá del final de la cadena, el operador de estrella intenta hacer coincidir un carácter menos. Pero el emparejador no encuentra una x después de cualquiera de los dos, por lo que retrocede de nuevo, haciendo coincidir el operador estrella con sólo . Ahora encuentra una x donde la necesita e informa de un partido exitoso de las posiciones 0 a 4.*/^.*x/"abcxe".*abcxabc

  Es posible escribir expresiones regulares que harán mucho retroceso. Este problema se produce cuando un patrón puede coincidir con un fragmento de entrada de muchas maneras diferentes. Por ejemplo, si nos confundimos al escribir una expresión regular de número binario, podríamos escribir accidentalmente algo como ./([01]+)+b/

    Visualization of /([01]+)+b/

  Si eso intenta hacer coincidir algunas series largas de ceros y unos sin carácter b final, el emparejador primero pasa a través del bucle interno hasta que se queda sin dígitos. Entonces se da cuenta de que no hay b, por lo que retrocede una posición, pasa a través del bucle exterior una vez, y se da por venciendo de nuevo, tratando de retroceder fuera del bucle interno una vez más. Continuará probando todas las rutas posibles a través de estos dos loops. Esto significa que la cantidad de trabajo se duplica con cada carácter adicional. Incluso para unas pocas docenas de personajes, el partido resultante tomará prácticamente para siempre.

  El método de reemplazo
Los valores de cadena tienen un método que se puede usar para reemplazar parte de la cadena por otra cadena.replace

    console.log("papa".replace("p", "m"));
    // → mapa
    El primer argumento también puede ser una expresión regular, en cuyo caso se reemplaza la primera coincidencia de la expresión regular. Cuando se agrega una opción (para global)a la expresión regular, se reemplazarán todas las coincidencias de la cadena, no solo la primera.g

    console.log("Borobudur".replace(/[ou]/, "a"));
    // → Barobudur
    console.log("Borobudur".replace(/[ou]/g, "a"));
    // → Barabadar
    Hubiera sido sensato si la elección entre la sustitución de una coincidencia o todas las coincidencias se hizo a través de un argumento adicional a o proporcionando un método diferente, . Pero por alguna razón desafortunada, la elección se basa en una propiedad de la expresión regular en su lugar.replacereplaceAll

  El poder real de usar expresiones regulares proviene del hecho de que podemos hacer referencia a grupos coincidentes en la cadena de reemplazo. Por ejemplo, supongamos que tenemos una cadena grande que contiene los nombres de personas, un nombre por línea, en el formato . Si queremos intercambiar estos nombres y eliminar la coma para obtener un formato, podemos usar el siguiente código:replaceLastname, FirstnameFirstname Lastname

    console.log(
      "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
        .replace(/(\w+), (\w+)/g, "$2 $1"));
    // → Barbara Liskov
    //   John McCarthy
    //   Philip Wadler

  El y en la cadena de reemplazo hace referencia a los grupos entre paréntesis en el patrón. se sustituye por el texto que coincide con el primer grupo, por el segundo, y así sucesivamente, hasta . Todo el partido se puede hacer referencia con .$1$2$1$2$9$&

  Es posible pasar una función, en lugar de una cadena, como segundo argumento para . Para cada reemplazo, se llamará a la función con los grupos coincidentes (así como toda la coincidencia) como argumentos, y su valor devuelto se insertará en la nueva cadena.replace

  Este es un pequeño ejemplo:

    let s = "the cia and fbi";
    console.log(s.replace(/\b(fbi|cia)\b/g,
                str => str.toUpperCase()));
    // → the CIA and FBI
    Aquí hay uno más interesante:

    let stock = "1 lemon, 2 cabbages, and 101 eggs";
    function minusOne(match, amount, unit) {
      amount = Number(amount) - 1;
      if (amount == 1) { // only one left, remove the 's'
        unit = unit.slice(0, unit.length - 1);
      } else if (amount == 0) {
        amount = "no";
      }
      return amount + " " + unit;
    }
    console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
    // → no lemon, 1 cabbage, and 100 eggs
    Esto toma una cadena, busca todas las apariciones de un número seguido de una palabra alfanumérica y devuelve una cadena en la que cada aparición de este tipo se reduce en uno.

  El grupo termina como argumento para la función y el grupo se enlaza a . La función se convierte en un número, que siempre funciona desde que coincide, y realiza algunos ajustes en caso de que solo quede uno o cero.(\d+)amount(\w+)unitamount\d+

## Avaricia

  Es posible utilizar para escribir una función que elimina todos los comentarios de un fragmento de código JavaScript. Aquí está un primer intento:replace

    function stripComments(code) {
      return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
    }
    console.log(stripComments("1 + /* 2 */3"));
    // → 1 + 3
    console.log(stripComments("x = 10;// ten!"));
    // → x = 10;
    console.log(stripComments("1 /* a */+/* b */ 1"));
    // → 1  1

  La parte antes del operador or coincide con dos caracteres de barra diagonal seguidos de cualquier número de caracteres que no sean de nueva línea. La parte de los comentarios multilínea está más implicada. Usamos (cualquier carácter que no esté en el conjunto vacío de caracteres) como una forma de hacer coincidir cualquier carácter. No podemos usar simplemente un punto aquí porque los comentarios de bloque pueden continuar en una nueva línea y el carácter de punto no coincide con los caracteres de nueva línea.[^]

  Pero la salida de la última línea parece haber salido mal. ¿por qué?

  La parte de la expresión, como describí en la sección sobre el retroceso, primero coincidirá tanto como pueda. Si eso hace que la siguiente parte del patrón falle, el emparejador retrocede un carácter e intenta de nuevo desde allí. En el ejemplo, el emparejador primero intenta hacer coincidir todo el resto de la cadena y, a continuación, se mueve hacia atrás desde allí. Se encontrará una ocurrencia de después de volver cuatro caracteres y coincidir con eso. Esto no es lo que queríamos, la intención era hacer coincidir un solo comentario, no ir hasta el final del código y encontrar el final del último comentario de bloque.[^]**/

  Debido a este comportamiento, decimos que los operadores de repetición (, , , y ) son codiciosos,lo que significa que coinciden tanto como pueden y retroceden desde allí. Si pone un signo de interrogación después de ellos (, , , ), se convierten en nogreñidos y comienzan haciendo coincidir lo menos posible, haciendo coincidir más solo cuando el patrón restante no se ajusta a la coincidencia más pequeña.+*?{}+?*???{}?

  Y eso es exactamente lo que queremos en este caso. Al tener la estrella coincide con el tramo más pequeño de caracteres que nos lleva a un , consumimos un comentario de bloque y nada más.*/

    function stripComments(code) {
      return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
    }
    console.log(stripComments("1 /* a */+/* b */ 1"));
    // → 1 + 1

  Una gran cantidad de errores en los programas de expresión regular se puede rastrear a involuntariamente usando un operador codicioso donde uno nogreedy funcionaría mejor. Cuando utilice un operador de repetición, tenga en cuenta primero la variante nogreedy.

## Creación dinámica de objetos RegExp

  Hay casos en los que es posible que no sepa el patrón exacto con el que debe coincidir al escribir el código. Supongamos que desea buscar el nombre del usuario en un fragmento de texto y encerrarlo en caracteres de subrayado para que destaque. Puesto que sabrá el nombre sólo una vez que el programa se está ejecutando realmente, no puede usar la notación basada en barra diagonal.

  Pero puede crear una cadena y usar el constructor en eso. Este es un ejemplo:RegExp

    let name = "harry";
    let text = "Harry is a suspicious character.";
    let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
    console.log(text.replace(regexp, "_$1_"));
    // → _Harry_ is a suspicious character.
    Al crear los marcadores de límite, tenemos que usar dos barras diagonales inversas porque las estamos escribiendo en una cadena normal, no en una expresión regular cerrada con barra diagonal. El segundo argumento del constructor contiene las opciones para la expresión regular, en este caso, para global y sin distinción entre mayúsculas y minúsculas.\bRegExp"gi"

  Pero, ¿y si el nombre es porque nuestro usuario es un adolescente nerd? Eso resultaría en una expresión regular sin sentido que en realidad no coincidirá con el nombre del usuario."dea+hl[]rd"

  Para evitar esto, podemos agregar barras diagonales inversas antes de cualquier carácter que tenga un significado especial.

    let name = "dea+hl[]rd";
    let text = "This dea+hl[]rd guy is super annoying.";
    let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
    let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
    console.log(text.replace(regexp, "_$&_"));
    // → This _dea+hl[]rd_ guy is super annoying.

## El método de búsqueda

  No se puede llamar al método en cadenas con una expresión regular. Pero hay otro método, , que espera una expresión regular. Al igual que , devuelve el primer índice en el que se encontró la expresión, o -1 cuando no se encontró.indexOfsearchindexOf

    console.log("  word".search(/\S/));
    // → 2
    console.log("    ".search(/\S/));
    // → -1
    Desafortunadamente, no hay manera de indicar que la coincidencia debe comenzar en un desplazamiento dado (como podemos con el segundo argumento para ), lo que a menudo sería útil.indexOf

## La propiedad lastIndex

  Del mismo modo, el método no proporciona una manera cómoda de comenzar a buscar desde una posición determinada en la cadena. Pero proporciona una maneraconveniente.exec

  Los objetos de expresión regular tienen propiedades. Una de estas propiedades es , que contiene la cadena desde la que se creó la expresión. Otra propiedad es , que controla, en algunas circunstancias limitadas, dónde se iniciará la siguiente coincidencia.sourcelastIndex

  Estas circunstancias son que la expresión regular debe tener habilitada la opción global () o pegajosa () y la coincidencia debe realizarse a través del método. Una vez más, una solución menos confusa habría sido simplemente permitir que se pasara un argumento adicional a , pero la confusión es una característica esencial de la interfaz de expresión regular de JavaScript.gyexecexec

    let pattern = /y/g;
    pattern.lastIndex = 3;
    let match = pattern.exec("xyzzy");
    console.log(match.index);
    // → 4
    console.log(pattern.lastIndex);
    // → 5

  Si la coincidencia se realizó correctamente, la llamada para actualizar automáticamente la propiedad para que apunte después de la coincidencia. Si no se encontró ninguna coincidencia, se vuelve a establecer en cero, que también es el valor que tiene en un objeto de expresión regular recién construido.execlastIndexlastIndex

  La diferencia entre las opciones globales y pegajosas es que, cuando se habilita sticky, la coincidencia sólo tendrá éxito si comienza directamente en , mientras que con global, buscará por delante una posición donde una coincidencia puede comenzar.lastIndex

    let global = /abc/g;
    console.log(global.exec("xyz abc"));
    // → ["abc"]
    let sticky = /abc/y;
    console.log(sticky.exec("xyz abc"));
    // → null

  Cuando se usa un valor de expresión regular compartida para varias llamadas, estas actualizaciones automáticas de la propiedad pueden causar problemas. Es posible que la expresión regular se inicie accidentalmente en un índice que quedó de una llamada anterior.execlastIndex

    let digit = /\d/g;
    console.log(digit.exec("here it is: 1"));
    // → ["1"]
    console.log(digit.exec("and now: 1"));
    // → null

  Otro efecto interesante de la opción global es que cambia la forma en que funciona el método en las cadenas. Cuando se llama con una expresión global, en lugar de devolver una matriz similar a la devuelta por , encontrará todas las coincidencias del patrón en la cadena y devolverá una matriz que contiene las cadenas coincidentes.matchexecmatch

    console.log("Banana".match(/an/g));
    // → ["an", "an"]
    So be cautious with global regular expressions. The cases where they are necessary—calls to and places where you want to explicitly use —are typically the only places where you want to use them.replacelastIndex

## Looping over matches

  A common thing to do is to scan through all occurrences of a pattern in a string, in a way that gives us access to the match object in the loop body. We can do this by using and .lastIndexexec

    let input = "A string with 3 numbers in it... 42 and 88.";
    let number = /\b\d+\b/g;
    let match;
    while (match = number.exec(input)) {
      console.log("Found", match[0], "at", match.index);
    }
    // → Found 3 at 14
    //   Found 42 at 33
    //   Found 88 at 40
    This makes use of the fact that the value of an assignment expression () is the assigned value. So by using as the condition in the statement, we perform the match at the start of each iteration, save its result in a binding, and stop looping when no more matches are found.=match = number.exec(input)while

## Parsing an INI file

  To conclude the chapter, we’ll look at a problem that calls for regular expressions. Imagine we are writing a program to automatically collect information about our enemies from the Internet. (We will not actually write that program here, just the part that reads the configuration file. Sorry.) The configuration file looks like this:

    searchengine=https://duckduckgo.com/?q=$1
    spitefulness=9.7

    ; comments are preceded by a semicolon...
    ; each section concerns an individual enemy
    [larry]
    fullname=Larry Doe
    type=kindergarten bully
    website=http://www.geocities.com/CapeCanaveral/11451

    [davaeorn]
    fullname=Davaeorn
    type=evil wizard
    outputdir=/home/marijn/enemies/davaeorn
    Las reglas exactas para este formato (que es un formato ampliamente utilizado, normalmente llamado un archivo INI) son las siguientes:

  Las líneas en blanco y las líneas que comienzan con punto y coma se omiten.

  Líneas envueltas e iniciar una nueva sección.[]

  Las líneas que contienen un identificador alfanumérico seguido de un carácter agregan una configuración a la sección actual.=

  Cualquier otra cosa no es válida.

  Nuestra tarea consiste en convertir una cadena como esta en un objeto cuyas propiedades contienen cadenas para la configuración escritas antes del primer encabezado de sección y subobjetos para secciones, con esos subobjetos que contienen la configuración de la sección.

  Dado que el formato tiene que ser procesado línea por línea, dividir el archivo en líneas separadas es un buen comienzo. Vimos el método en el capítulo 4. Algunos sistemas operativos, sin embargo, utilizan no sólo un carácter de nueva línea para separar líneas, sino un carácter de retorno de carro seguido de una nueva línea (). Dado que el método también permite una expresión regular como argumento, podemos usar una expresión regular como dividir de una manera que permita ambas líneas y entre.split"\r\n"split/\r?\n/"\n""\r\n"

    function parseINI(string) {
      // Start with an object to hold the top-level fields
      let result = {};
      let section = result;
      string.split(/\r?\n/).forEach(line => {
        let match;
        if (match = line.match(/^(\w+)=(.*)$/)) {
          section[match[1]] = match[2];
        } else if (match = line.match(/^\[(.*)\]$/)) {
          section = result[match[1]] = {};
        } else if (!/^\s*(;.*)?$/.test(line)) {
          throw new Error("Line '" + line + "' is not valid.");
        }
      });
      return result;
    }

    console.log(parseINI(`
    name=Vasilis
    [address]
    city=Tessaloniki`));
    // → {name: "Vasilis", address: {city: "Tessaloniki"}}

  El código pasa por encima de las líneas del archivo y crea un objeto. Las propiedades de la parte superior se almacenan directamente en ese objeto, mientras que las propiedades que se encuentran en las secciones se almacenan en un objeto de sección independiente. El enlace apunta al objeto de la sección actual.section

  Hay dos tipos de líneas significativas: encabezados de sección o líneas de propiedad. Cuando una línea es una propiedad normal, se almacena en la sección actual. Cuando se trata de un encabezado de sección, se crea un nuevo objeto de sección y se establece para apuntar a él.section

  Tenga en cuenta el uso recurrente de y para asegurarse de que la expresión coincide con toda la línea, no sólo una parte de ella. Dejar estos resultados en código que en su mayoría funciona pero se comporta de forma extraña para alguna entrada, que puede ser un error difícil de rastrear.^$

  El patrón es similar al truco de usar una asignación como condición para . A menudo no está seguro de que la llamada a se realice correctamente, por lo que puede tener acceso al objeto resultante solo dentro de una instrucción que comprueba esto. Para no romper la agradable cadena de formularios, asignamos el resultado de la coincidencia a un enlace y usamos inmediatamente esa asignación como prueba para la instrucción.if (match = string.match(...))whilematchifelse ifif

  If a line is not a section header or a property, the function checks whether it is a comment or an empty line using the expression . Do you see how it works? The part between the parentheses will match comments, and the makes sure it also matches lines containing only whitespace. When a line doesn’t match any of the expected forms, the function throws an exception./^\s*(;.*)?$/?

## International characters

  Debido a la implementación simplista inicial de JavaScript y al hecho de que este enfoque simplista se estableció más tarde en piedra como comportamiento estándar, las expresiones regulares de JavaScript son bastante tontas sobre los caracteres que no aparecen en el idioma inglés. Por ejemplo, en lo que respecta a las expresiones regulares de JavaScript, un "carácter de palabra" es solo uno de los 26 caracteres del alfabeto latino (mayúsculas o minúsculas), dígitos decimales y, por alguna razón, el carácter de subrayado. Cosas como é o β, que sin duda son caracteres de palabra, no coincidirán (y coincidirán con mayúsculas, la categoría nonword).\w\W

  Por un extraño accidente histórico, (espacio en blanco) no tiene este problema y coincide con todos los caracteres que el estándar Unicode considera espacios en blanco, incluyendo cosas como el espacio de no separación y el separador de vocales mongoles.\s

  Otro problema es que, de forma predeterminada, las expresiones regulares funcionan en unidades de código, como se describe en el capítulo 5,no en caracteres reales. Esto significa que los caracteres que se componen de dos unidades de código se comportan de forma extraña.

  console.log(/🍎{3}/.test("🍎🍎🍎"));
  // → false
  console.log(/<.>/.test("<🌹>"));
  // → false
  console.log(/<.>/u.test("<🌹>"));
  // → true

  El problema es que el 🍎 de la primera línea se trata como dos unidades de código y la parte se aplica solo a la segunda. Del mismo modo, el punto coincide con una sola unidad de código, no con los dos que componen el emoji de rosas.{3}

  Debe agregar una opción (para Unicode) a la expresión regular para que trate estos caracteres correctamente. El comportamiento incorrecto sigue siendo el valor predeterminado, por desgracia, porque cambiar eso podría causar problemas para el código existente que depende de él.u

  Aunque esto sólo estaba estandarizado y, en el momento de escribir, aún no es ampliamente compatible, es posible utilizar en una expresión regular (que debe tener habilitada la opción Unicode) para que coincida con todos los caracteres a los que el estándar Unicode asigna una propiedad determinada.\p

    console.log(/\p{Script=Greek}/u.test("α"));
    // → true
    console.log(/\p{Script=Arabic}/u.test("α"));
    // → false
    console.log(/\p{Alphabetic}/u.test("α"));
    // → true
    console.log(/\p{Alphabetic}/u.test("!"));
    // → false

  Unicode define una serie de propiedades útiles, aunque encontrar la que necesita puede no ser siempre trivial. Puede usar la notación para que coincida con cualquier carácter que tenga el valor especificado para esa propiedad. Si el nombre de propiedad se deja fuera, como en , se supone que el nombre es una propiedad binaria como o una categoría como .\p{Property=Value}\p{Name}AlphabeticNumber

## Resumen

  Las expresiones regulares son objetos que representan patrones en cadenas. Usan su propio lenguaje para expresar estos patrones.

    /abc/ Una secuencia de caracteres
    /[abc]/ Cualquier carácter de un conjunto de caracteres
    /[^abc]/ Cualquier carácter que no esté en un conjunto de caracteres
    /[0-9]/ Any character in a range of characters
    /x+/ One or more occurrences of the pattern x
    /x+?/ One or more occurrences, nongreedy
    /x*/ Zero or more occurrences
    /x?/ Zero or one occurrence
    /x{2,4}/ Two to four occurrences
    /(abc)/ A group
    /a|b|c/ Any one of several patterns
    /\d/ Any digit character
    /\w/ Un carácter alfanumérico ("carácter de palabra")
    /\s/ Cualquier carácter de espacio en blanco
    /./ Cualquier personaje excepto las nuevas líneas
    /\b/ Un límite de palabra
    /^/ Inicio de la entrada
    /$/ Fin de la entrada

  Una expresión regular tiene un método para probar si una cadena determinada coincide con ella. También tiene un método que, cuando se encuentra una coincidencia, devuelve una matriz que contiene todos los grupos coincidentes. Dicha matriz tiene una propiedad que indica dónde comenzó la coincidencia.testexecindex

  Las cadenas tienen un método para que coincidan con una expresión regular y un método para buscar una, devolviendo solo la posición inicial de la coincidencia. Su método puede reemplazar las coincidencias de un patrón con una cadena o función de reemplazo.matchsearchreplace

  Las expresiones regulares pueden tener opciones, que se escriben después de la barra diagonal de cierre. La opción hace que la coincidencia no distintive . La opción hace que la expresión sea global,lo que, entre otras cosas, hace que el método reemplace todas las instancias en lugar de solo la primera. La opción lo hace pegajoso, lo que significa que no buscará por delante y omitirá parte de la cadena cuando busque una coincidencia. La opción activa el modo Unicode, que corrige una serie de problemas relacionados con el manejo de caracteres que ocupan dos unidades de código.igreplaceyu

  Las expresiones regulares son una herramienta afilada con un mango incómodo. Simplifican algunas tareas enormemente, pero pueden volverse rápidamente inmanejables cuando se aplican a problemas complejos. Parte de saber cómo usarlos es resistir el impulso de tratar de zapatear cosas que no pueden expresar limpiamente en ellos.

### Ejercicios

  Es casi inevitable que, en el curso de trabajar en estos ejercicios, te confundas y te frustres por el comportamiento inexplicable de alguna expresión regular. A veces ayuda introducir su expresión en una herramienta en línea como <https://debuggex.com> para ver si su visualización corresponde a lo que pretendía y experimentar con la forma en que responde a varias cadenas de entrada.

  Regexp golf
  El golf de código es un término utilizado para el juego de tratar de expresar un programa en particular en el menor número de personajes posible. Del mismo modo, el campo de golf regexp es la práctica de escribir una expresión regular tan pequeña como sea posible para que coincida con un patrón dado, y sólo ese patrón.

  Para cada uno de los elementos siguientes, escriba una expresión regular para probar si alguna de las subcadenas dadas se produce en una cadena. La expresión regular debe coincidir únicamente con las cadenas que contienen una de las subcadenas descritas. No se preocupe por los límites de palabras a menos que se mencione explícitamente. Cuando la expresión funcione, vea si puede hacerla más pequeña.

  coche y gato

  pop y prop

  hurón, ferry,y ferrari

  Cualquier palabra que termine en ious

  Carácter de espacio en blanco seguido de un punto, coma, dos puntos o punto y coma

  Una palabra de más de seis letras

  Una palabra sin la letra e (o E)

  Consulte la tabla del resumen del capítulo para obtener ayuda. Pruebe cada solución con unas pocas cadenas de prueba.

    // Fill in the regular expressions

    verify(/.../,
          ["my car", "bad cats"],
          ["camper", "high art"]);

    verify(/.../,
          ["pop culture", "mad props"],
          ["plop", "prrrop"]);

    verify(/.../,
          ["ferret", "ferry", "ferrari"],
          ["ferrum", "transfer A"]);

    verify(/.../,
          ["how delicious", "spacious room"],
          ["ruinous", "consciousness"]);

    verify(/.../,
          ["bad punctuation ."],
          ["escape the period"]);

    verify(/.../,
          ["Siebentausenddreihundertzweiundzwanzig"],
          ["no", "three small words"]);

    verify(/.../,
          ["red platypus", "wobbling nest"],
          ["earth bed", "learning ape", "BEET"]);

    function verify(regexp, yes, no) {
      // Ignore unfinished exercises
      if (regexp.source == "...") return;
      for (let str of yes) if (!regexp.test(str)) {
        console.log(`Failure to match '${str}'`);
      }
      for (let str of no) if (regexp.test(str)) {
        console.log(`Unexpected match for '${str}'`);
      }
    }

## Estilo de cotización

  Imagine que ha escrito una historia y ha utilizado comillas simples para marcar fragmentos de diálogo. Ahora desea reemplazar todas las citas de diálogo con comillas dobles,   manteniendo las comillas simples utilizadas en contracciones como no lo son.

  Piense en un patrón que distinga estos dos tipos de uso de comillas y cree una llamada al método que realiza el reemplazo adecuado.replace

    let text = "'I'm the cook,' he said, 'it's my job.'";
    // Change this call.
    console.log(text.replace(/A/g, "B"));
    // → "I'm the cook," he said, "it's my job."

## Números de nuevo

  Escriba una expresión que solo coincida con números de estilo JavaScript. Debe admitir un signo menos o más opcional delante del número, el punto decimal y la notación de exponente, o bien, de nuevo con un signo opcional delante del exponente. También tenga en cuenta que no es necesario que haya dígitos delante o después del punto, pero el número no puede ser un punto solo. Es decir, y son números de JavaScript válidos, pero un punto solitario no es.5e-31E10.55.

    // Fill in this regular expression.
    let number = /^...$/;

    // Tests:
    for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                    "1.3e2", "1E-4", "1e+12"]) {
      if (!number.test(str)) {
        console.log(`Failed to match '${str}'`);
      }
    }
    for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                    ".5.", "1f5", "."]) {
      if (number.test(str)) {
        console.log(`Incorrectly accepted '${str}'`);
      }
    }

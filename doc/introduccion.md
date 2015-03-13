#Introducción a Eiffel.js

[http://es.wikipedia.org/wiki/Eiffel_(lenguaje_de_programaci%C3%B3n) Eiffel] es un lenguaje de programación orientado a objetos diseñado por [http://es.wikipedia.org/wiki/Bertrand_Meyer Bertrand Meyer] (que también es un método de programación Eiffel). Se basa en una serie de principios incluyendo: el diseño por contrato, la separación de comando de consulta, el principio de acceso uniforme, el principio de elección única, el principio abierto-cerrado y la separación operación-operando.

# Precondiciones y postcondiciones

En una primera etapa Eiffel.js implementa los contratos. 
Para cada función definida se puede especificar las precondiciones 
(cláusula _require_) que necesita la función para garantizar las postcondiciones (cláusula _ensure_). 

El objetivo de especificar estas condiciones es:
 * Aumentar la documentación del código
 * Facilitar la tarea de encontrar errores 
   (ayuda a que quede claro cuándo la función falló entregando un valor que no se esperaba o cuándo la función fue invocada con parámetros incorrectos)
 * Evitar el envejecimiento de las especificaciones 
   (porque las especificación se escriben en JavaScript y son ejecutadas en cada invocación cuando se está en modo de desarrollo)
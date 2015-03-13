#Introducci�n a Eiffel.js

[http://es.wikipedia.org/wiki/Eiffel_(lenguaje_de_programaci%C3%B3n) Eiffel] es un lenguaje de programaci�n orientado a objetos dise�ado por [http://es.wikipedia.org/wiki/Bertrand_Meyer Bertrand Meyer] (que tambi�n es un m�todo de programaci�n Eiffel). Se basa en una serie de principios incluyendo: el dise�o por contrato, la separaci�n de comando de consulta, el principio de acceso uniforme, el principio de elecci�n �nica, el principio abierto-cerrado y la separaci�n operaci�n-operando.

# Precondiciones y postcondiciones

En una primera etapa Eiffel.js implementa los contratos. 
Para cada funci�n definida se puede especificar las precondiciones 
(cl�usula _require_) que necesita la funci�n para garantizar las postcondiciones (cl�usula _ensure_). 

El objetivo de especificar estas condiciones es:
 * Aumentar la documentaci�n del c�digo
 * Facilitar la tarea de encontrar errores 
   (ayuda a que quede claro cu�ndo la funci�n fall� entregando un valor que no se esperaba o cu�ndo la funci�n fue invocada con par�metros incorrectos)
 * Evitar el envejecimiento de las especificaciones 
   (porque las especificaci�n se escriben en JavaScript y son ejecutadas en cada invocaci�n cuando se est� en modo de desarrollo)
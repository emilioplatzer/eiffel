<!-- multilang from README.md




NO MODIFIQUE ESTE ARCHIVO. FUE GENERADO AUTOMÁTICAMENTE POR multilang.js




-->
# eiffel
Painless Contracts in Javascript



Contratos en Javascript similar a lenguaje Eiffel


<!-- cucardas -->
![extending](https://img.shields.io/badge/stability-extending-orange.svg)
[![npm-version](https://img.shields.io/npm/v/eiffel.svg)](https://npmjs.org/package/eiffel)
[![downloads](https://img.shields.io/npm/dm/eiffel.svg)](https://npmjs.org/package/eiffel)
[![build](https://img.shields.io/travis/emilioplatzer/eiffel/master.svg)](https://travis-ci.org/emilioplatzer/eiffel)
[![coverage](https://img.shields.io/coveralls/emilioplatzer/eiffel/master.svg)](https://coveralls.io/r/emilioplatzer/eiffel)
[![climate](https://img.shields.io/codeclimate/github/emilioplatzer/eiffel.svg)](https://codeclimate.com/github/emilioplatzer/eiffel)
[![dependencies](https://img.shields.io/david/emilioplatzer/eiffel.svg)](https://david-dm.org/emilioplatzer/eiffel)

<!--multilang buttons-->

idioma: ![castellano](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-es.png)
también disponible en:
[![inglés](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-en.png)](README.md)


## Instalación


```sh
> npm install eiffel
```


Con **Eiffel** se agregan contratos en Javascript sin necesidad de cambiar la definición original de las funciones.
Al igual que en el **lenguaje Eiffel** los contratos están escritos en el lenguaje nativo (Javascript)
y pueden ser fácilmente activados y desactivados. 

# Características principales
 * Las funciones se declaran de la forma usual
 * Se declaran cláusulas *require* y *ensure* (tipo Eiffel) en cualqueir lugar del código
 * Se pueden activar y desactivar sin necesidad de cambiar el código

## Ejemplos


```js
function intRandom(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

Eiffel.global('intRandom',{
    require:function(min, max){
        return !isNaN(min) && !isNaN(max) && min<=max;
    },
    ensure:function(result, min, max){
        return result.returned>=min && result.returned<=max;
    }
});
```


*Más*: 
  * Hay un ejemplo no trivial en [eiffel_demo.js](example/eiffel_demo.js) (resolviendo una equación cuadrática). 
  * una [Introducción](doc/introduccion.md) más amplia


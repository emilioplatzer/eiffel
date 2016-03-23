# eiffel
Painless Contracts in Javascript

![extending](https://img.shields.io/badge/stability-extending-orange.svg)
[![npm-version](https://img.shields.io/npm/v/eiffel.svg)](https://npmjs.org/package/eiffel)
[![downloads](https://img.shields.io/npm/dm/eiffel.svg)](https://npmjs.org/package/eiffel)
[![build](https://img.shields.io/travis/emilioplatzer/eiffel/master.svg)](https://travis-ci.org/emilioplatzer/eiffel)
[![coverage](https://img.shields.io/coveralls/emilioplatzer/eiffel/master.svg)](https://coveralls.io/r/emilioplatzer/eiffel)
[![climate](https://img.shields.io/codeclimate/github/emilioplatzer/eiffel.svg)](https://codeclimate.com/github/emilioplatzer/eiffel)
[![dependencies](https://img.shields.io/david/emilioplatzer/eiffel.svg)](https://david-dm.org/emilioplatzer/eiffel)
[![qa-control](http://codenautas.com/github/emilioplatzer/eiffel.svg)](http://codenautas.com/github/emilioplatzer/eiffel)


language: ![English](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-en.png)
also available in:
[![Spanish](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-es.png)](LEEME.md)


## Instalation


```sh
> npm install eiffel
```


Add Contracts in Javascript without changing the function definitions.
Like in Eiffel contracts are writing in native language (Javascript) with minimal function calls and can easily enabled and disabled.

# Main features
 * Declare your function as you usualy do
 * Declare *require* and *ensure* clausules like Eiffel anywhere
 * Enable and disable when you want without changing the code
 * Enjoy

## Examples


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


*More*: A non nonsense example in [eiffel_demo.js](example/eiffel_demo.js) (solving quadratic equations).


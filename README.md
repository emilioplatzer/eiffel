# eiffel
Painless Contracts in Javascript

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

## My apologies
I'm not native English speaker. Corrections are wellcome.

Spanish documentation in [Introducción](doc/introduccion.md)


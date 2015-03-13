// eiffel.js
"use strict";

(function(globalObject){

var localDef=function(containerObject,functionName,eiffelDefinition){
    var originalFunction=containerObject[functionName];
    containerObject[functionName]=function(){
        if('require' in eiffelDefinition){
            if(!eiffelDefinition.require.apply(this,arguments)) throw new Error("Eiffel: function "+functionName+" fails in require");
        }
        var result={};
        try{
            result.returned=originalFunction.apply(this,arguments);
        }catch(err){
            result.exception=err;
        }
        if('ensure' in eiffelDefinition){
            if(!eiffelDefinition.ensure.apply(this,[result].concat(Array.prototype.slice.call(arguments,0)))) throw new Error("Eiffel: function "+functionName+" fails in ensure");
        }
        if('exception' in result){
            throw result.exception;
        }else{
            return result.returned;
        }
    }
};

var globalDef=function(functionName,eiffelDefinition){
    return localDef(globalObject,functionName,eiffelDefinition);
}

globalObject.Eiffel={
    global:globalDef,
    local:localDef
}

})(window);

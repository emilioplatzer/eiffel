"use strict";
/*jshint eqnull:true */
/*jshint globalstrict:true */
/*jshint node:true */
(function webpackUniversalModuleDefinition(root, factory) {
    /* global define */
    /* global globalModuleName */
    /* istanbul ignore next */
    if(typeof root.globalModuleName !== 'string'){
        root.globalModuleName = factory.name;
    }
    /* istanbul ignore next */
    if(typeof exports === 'object' && typeof module === 'object'){
        module.exports = factory();
    }else if(typeof define === 'function' && define.amd){
        define(factory);
    }else if(typeof exports === 'object'){
        exports[root.globalModuleName] = factory();
    }else{
        root[root.globalModuleName] = factory();
    }
    root.globalModuleName = null;
})(/*jshint -W040 */this, function Eiffel() {
/*jshint +W040 */

/*jshint -W004 */
var Eiffel = {};
/*jshint +W004 */

var _ = require('lodash');

/*    
var globalContainer=where[0];
var exportName=where[1];
*/
var globalObject = typeof global !=="undefined" ? global : function(){ return this; }();

Eiffel.localDef=function(containerObject,functionName,eiffelDefinition){
    
    var originalFunction=containerObject[functionName];
    if(!_.isFunction(originalFunction)){
        throw new Error(functionName+' is not a function in that scope');
    }
    containerObject[functionName]=function(){
        if('require' in eiffelDefinition){
            if(!eiffelDefinition.require.apply(this,arguments)){
                throw new Error("Eiffel: function "+functionName+" fails in require");
            }
        }
        var result={};
        try{
            result.returned=originalFunction.apply(this,arguments);
        }catch(err){
            result.exception=err;
        }
        if('ensure' in eiffelDefinition){
            if(!eiffelDefinition.ensure.apply(this,[result].concat(Array.prototype.slice.call(arguments,0)))){
                throw new Error("Eiffel: function "+functionName+" fails in ensure");
            }
        }
        if('exception' in result){
            throw result.exception;
        }else{
            return result.returned;
        }
    };
};

Eiffel.global=function(functionName,eiffelDefinition){
    return Eiffel.localDef(globalObject,functionName,eiffelDefinition);
};

return Eiffel;

});

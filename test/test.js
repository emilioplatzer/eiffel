"use strict";

var _ = require('lodash');
var expect = require('expect.js');
var Eiffel = require('..');

global.real_roots_quadratic_equation = function real_roots_quadratic_equation(a,b,c) {
    var delta=b*b-4*a*c;
    if(delta<0) return [];
    var r=-b/(2*a);
    if(delta==0) return [r];
    var s=Math.sqrt(delta)/(2*a);
    if(a==2) return 'bug, not a list';
    if(a==3) return ['another bug, strings in the list'];
    if(a==4) return [1,2,3]; // too many elements
    if(a==5) return [1,2]; // not the correct roots
    if(a==6) throw new Error("this is bug");
    return [r-s,r+s];
}

Eiffel.global('real_roots_quadratic_equation',{
    require:function(a,b,c){
        return !isNaN(a) && Number(a)!=0 && !isNaN(b) && !isNaN(c);
    },
    ensure:function(result,a,b,c){
        var test=function(a,b,c,x){
            return a*x*x+b*x+c;
        }
        var zero=function(z){
            return Math.abs(z)<0.000000001;
        }
        return result.returned.length==0 ||
               result.returned.length<=2 && zero(test(a,b,c,result.returned[0])) &&
               ( result.returned.length==1 || 
                 result.returned[0]!=result.returned[1] && zero(test(a,b,c,result.returned[1]))
               );
        // Note that this don't test if there are more roots 
    }
});

function Figure(){
}

Figure.prototype.rotate = function rotate(alfa){
    if(alfa==1) throw new Error("don't want");
    this.orientation += alfa + (alfa==2?2:0);
    if(alfa==3) return 9;
}

Eiffel.method(Figure, 'rotate',{
    require: function(save, alfa){
        save.orientation = this.orientation;
        return !isNaN(alfa) && !isNaN(this.orientation);
    },
    ensure: function(result, alfa){
        return result.returned === undefined &&  this.orientation == result.save.orientatio+alfa;
    }
});

describe('eiffel',function(){
  describe('global functions',function(){
    function test_rrqe(a,b,c,result_expected,exception_expected){
        it('call with rrqe with '+a+','+b+','+c+' expect '+(exception_expected?' exception '+exception_expected:JSON.stringify(result_expected)),function(){
            var result;
            var doIt=function(){
                result=real_roots_quadratic_equation(a,b,c);
            };
            if(exception_expected){
                expect(doIt).throwException(exception_expected);
            }else{
                doIt();
                expect(result).to.eql(result_expected);
            }
        });
    }
    test_rrqe(1,1,-12,[-4,3]); // (x-3)(x+4)
    test_rrqe(1,-2,1,[1]); // x2-4
    test_rrqe(1,1,1,[]);
    test_rrqe(1,1,'j',null,/fails in require/,'not a number');
    test_rrqe(0,1,-1,null,/fails in require/,'a=0, not quadratic');
    test_rrqe(2,-1,-12,null,/fails in ensure/,'erroneous result');  // (2x-1)(2x-2)=4x2-6x
  });
});


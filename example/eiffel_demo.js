// eiffel_demo.js
"use strict";

function real_roots_quadratic_equation(a,b,c){
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

function try_and_show_rrqe(a,b,c,result_expected,exception_expected){
    var new_line=document.createElement('div');
    new_line.textContent='real_roots_quadratic_equation('+a+','+b+','+c+')';
    try{
        var result=real_roots_quadratic_equation(a,b,c);
        new_line.textContent+='='+JSON.stringify(result);
        if(JSON.stringify(result)==JSON.stringify(result_expected)){
            new_line.className='eiffel_ok';
            new_line.textContent+=' ok';
        }else if(exception_expected){
            new_line.className='eiffel_exception_expected';
            new_line.textContent+=' but exception expected '+JSON.stringify(exception_expected);
        }else{
            new_line.className='eiffel_result_error';
            new_line.textContent+=' but expected value = '+JSON.stringify(result_expected);
        }
    }catch(err){
        new_line.textContent+=' throws '+JSON.stringify(err.message);
        if(exception_expected){
            new_line.className='eiffel_exception_ok';
            new_line.textContent+=' ok';
        }else{
            new_line.className='eiffel_result_error';
            new_line.textContent+=' but expected value = '+JSON.stringify(result_expected);
        }
    }
    document.body.appendChild(new_line);
}

window.addEventListener('load',function(){
    try_and_show_rrqe(1,1,-12,[-4,3]); // (x-3)(x+4)
    try_and_show_rrqe(1,-2,1,[1]); // x2-4
    try_and_show_rrqe(1,1,1,[]);
    try_and_show_rrqe(1,1,'j',null,'not a number');
    try_and_show_rrqe(0,1,-1,null,'a=0, not quadratic');
    try_and_show_rrqe(2,-1,-12,null,'erroneous result');  // (2x-1)(2x-2)=4x2-6x
});
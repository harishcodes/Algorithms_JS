
/*var fibFun = function(n) {
    if (n < 2){
        return 1;
    }else{
        console.log("loading...");
        return fib(n-2) + fib(n-1);
    }
}

var memo = function(func){
    var cache={}
    return function(){
        key = JSON.stringify(arguments)
        console.log(arguments)
        if (key in cache){
            return cache[key]
        } else {
            val = func.apply(null,arguments)
            cache[key]=val
            return val
        }
    }
}

var fib = memo(fibFun);

console.log(fib(5))*/



var fibFun = function(n) {
    if (n < 2){
        return 1;
    }else{
        console.log("loading...");
        return fib(n-2) + fib(n-1);
    }
}

var memo = function(func,args){
    var cache={}
    
    return function(){
        key = JSON.stringify(args)
        if (key in cache){
            return cache[key]
        } else {
            val = func.apply(null,arguments)
            cache[key]=val
            return val
        }
    }
        
    
}

var fib = memo(fibFun);
console.log(fib(5))

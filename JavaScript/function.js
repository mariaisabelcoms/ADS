function multiplicar (x,y){
    return x*y
}

var a = multiplicar (4,2)
console.log(a)

function somaValores (a,b=2,c=6){
    var total = a+b+c
    return total
}

var f = somaValores(8)
console.log(f)

var infoCal = function(a,b,c){
    return a+b+c
}

console.log(infoCal(2,5,7));

const soma = (num1,num2) => {
    return num1 +num2
}

console.log (soma(3,6));
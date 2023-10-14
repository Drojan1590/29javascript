//Funcion para sumar 2 numeros
function suma(a , b){
    return a + b;
}
 var result1 = suma(5, 9);

//Funcion para restar 2 numeros
 function resta(a , b){
    return a - b;
}
 var result2 = resta(25, 10);
 
//Funcion para multiplicar 2 numeros
 function multiplicacion(a , b){
    return a * b;
}
 var result3 = multiplicacion(9, 9);
 
//Funcion para dividir 2 numeros
 function division(a , b){
    return a / b;
}
 var result4 = division(6, 2);

 // Funcion para modulo 
 function modulo(a , b){
    return a % b;
 }
 var result5 = modulo(9, 6)

 console.log(result1)
 console.log(result2)
 console.log(result3)
 console.log(result4)
 console.log(result5)

 function greaterThan(a, b){
    if(a > b){
      return `${a} es mayor`
    }else if(a < b){
     return `${b} es mayor`
    }else{
        return 'los numeros son iguales'
    }
    }
    
    console.log(greaterThan(545,2222))
    
    
    function pairOdd(a){
        if(a % 2 == 0){
            return `${a} es par`
           }else{
            return `${a} es non`
           }
    } 
    
    console.log(pairOdd(13))
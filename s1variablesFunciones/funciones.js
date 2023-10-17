//Funcion para sumar 2 numeros
function suma(a , b){
    return result1= a + b;
}
 

//Funcion para restar 2 numeros
 function resta(a , b){
    return result2 = a - b;
}

 
//Funcion para multiplicar 2 numeros
 function multiplicacion(a , b){
    return result3 = a * b;
}
 
 
//Funcion para dividir 2 numeros
 function division(a , b){
    return result4 = a / b;
}
 

 // Funcion para modulo 
 function modulo(a , b){
    return result5 = a % b;
 }

 console.log(suma(5, 9))
 console.log(resta(25, 10))
 console.log(multiplicacion(9, 9))
 console.log(division(6, 2))
 console.log(modulo(9, 6))

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
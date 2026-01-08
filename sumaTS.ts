//PRACTICA GENERAL DE LA SINTAXIS

/*let num1:string|number|number[]=[1,2,4];
//let lista[]:string|boolean|number|string[]=['hola',7,'ts',8,'ast',9];
let num2:number=10;
num1.forEach(e => {
    let suma = e + num2;
    console.log(" numero 1: " + e + " numero 2: " + num1 + " = " + num2 ); 
});
*/

let lista: number[] = [1,2,3,4,5,6,7,8,9,10];
let multiplicacion = 1;
let listaPrimos: number[] = [];

function esPrimo(numero: number): boolean {
  if (numero <= 1) return false;

  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return true;
}

lista.forEach(e => { 
  multiplicacion = multiplicacion * e;

  if (esPrimo(e)) {
    console.log(e + " es primo");
    listaPrimos.push(e);
  } else {
    console.log(e + " NO es primo");
  }
});

console.log("La multiplicación es: " + multiplicacion);
console.log("Sublista de primos:", listaPrimos);

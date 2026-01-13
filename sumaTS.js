/*function sumar():void {
    let num1:number=(document.getElementById("num1") as HTMLInputElement).valueAsNumber;
    let num2:string=(document.getElementById("num2") as HTMLInputElement).value;
        let resultado:number= (num1) + parseFloat(num2);
        (document.getElementById('resultado') as HTMLElement).innerHTML=resultado.toString();
    }
*/
//PRACTICA GENERAL DE LA SINTAXIS
/*let num1:string|number|number[]=[1,2,4];
//let lista[]:string|boolean|number|string[]=['hola',7,'ts',8,'ast',9];
let num2:number=10;
num1.forEach(e => {
    let suma = e + num2;
    console.log(" numero 1: " + e + " numero 2: " + num1 + " = " + num2 );
});
*/
function esPrimo(numero) {
    if (numero <= 1)
        return false;
    for (var i = 2; i < numero; i++) {
        if (numero % i == 0)
            return false;
    }
    return true;
}
function Lista() {
    var inputElement = document.getElementById('num_lista');
    var resMulti = document.getElementById('resMulti');
    var resPrimos = document.getElementById('resPrimos');
    var detallePrimos = document.getElementById('detallePrimos');
    if (!inputElement || !resMulti || !resPrimos || !detallePrimos)
        return;
    var textoInput = inputElement.value;
    var lista = textoInput.split(',').filter(function (x) { return x.trim() !== ""; }).map(function (e) { return Number(e.trim()); });
    var multiplicacion = lista.length > 0 ? 1 : 0;
    var listaPrimos = [];
    var listadoTexto = ""; // Aquí guardamos el texto simple
    lista.forEach(function (e) {
        if (isNaN(e))
            return;
        multiplicacion = multiplicacion * e;
        if (esPrimo(e)) {
            listaPrimos.push(e);
            listadoTexto += "numero ".concat(e, " es primo\n");
        }
        else {
            listadoTexto += "numero ".concat(e, " no es primo\n");
        }
    });
    // Insertar resultados
    resMulti.innerText = multiplicacion.toString();
    resPrimos.innerText = "[" + listaPrimos.join(", ") + "]";
    detallePrimos.innerText = listadoTexto; // Texto puro con saltos de línea
}

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


function esPrimo(numero: number): boolean {
    if (numero <= 1) return false;
    for (let i: number = 2; i < numero; i++) {
        if (numero % i == 0) return false;
    }
    return true;
}

function Lista(): void {
    const inputElement = document.getElementById('num_lista') as HTMLInputElement;
    const resMulti = document.getElementById('resMulti') as HTMLElement;
    const resPrimos = document.getElementById('resPrimos') as HTMLElement;
    const detallePrimos = document.getElementById('detallePrimos') as HTMLElement;

    if (!inputElement || !resMulti || !resPrimos || !detallePrimos) return;

    let textoInput: string = inputElement.value;
    let lista: number[] = textoInput.split(',').filter(x => x.trim() !== "").map(e => Number(e.trim()));

    let multiplicacion: number = lista.length > 0 ? 1 : 0;
    let listaPrimos: number[] = [];
    let listadoTexto: string = ""; // Aquí guardamos el texto simple

    lista.forEach((e: number) => {
        if (isNaN(e)) return;

        multiplicacion = multiplicacion * e;

        if (esPrimo(e)) {
            listaPrimos.push(e);
            listadoTexto += `numero ${e} es primo\n`;
        } else {
            listadoTexto += `numero ${e} no es primo\n`;
        }
    });

    // Insertar resultados
    resMulti.innerText = multiplicacion.toString();
    resPrimos.innerText = "[" + listaPrimos.join(", ") + "]";
    detallePrimos.innerText = listadoTexto; // Texto puro con saltos de línea
}
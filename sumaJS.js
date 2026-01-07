function sumar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num1>=0 && num2>=0){
        let suma = num1 + num2;
            document.getElementById("resultado").innerText = "la suma es: " + suma;
    }
    
}
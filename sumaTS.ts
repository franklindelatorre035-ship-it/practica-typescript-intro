function sumar() {
    const num1 = parseFloat((document.getElementById("num1") as HTMLInputElement).value;
    const num2 = parseFloat((document.getElementById("num2") as HTMLInputElement).value;
    if (num1>=0 && num2>=0){
        let suma = num1 + num2;
            document.getElementById("resultado").innerText = "la suma es: " + suma;
    }
    
}
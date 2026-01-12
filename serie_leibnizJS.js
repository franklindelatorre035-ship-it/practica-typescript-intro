function calcularPi() {
    let n = parseInt(document.getElementById('num').value);
    let acumulador = 0;

    for (let i = 0; i <= n; i++) {
        let termino = Math.pow(-1, i) / (2 * i + 1);
        acumulador += termino;
    }

    let pi = acumulador * 4;

    document.getElementById('resultado').innerText = "Resultado: " + pi;
}
function calcularPi() {
    var input = document.getElementById('num');
    var resultado = document.getElementById('resultado');
    var n = parseInt(input.value);
    var acumulador = 0;
    for (var i = 0; i <= n; i++) {
        var termino = Math.pow(-1, i) / (2 * i + 1);
        acumulador += termino;
    }
    var pi = acumulador * 4;
    resultado.innerText = "Resultado: " + pi;
}

function calcularPi(): void {
    const input = document.getElementById('num') as HTMLInputElement;
    const resultado = document.getElementById('resultado') as HTMLElement;

    const n: number = parseInt(input.value);
    let acumulador: number = 0;

    for (let i: number = 0; i <= n; i++) {
        const termino: number = Math.pow(-1, i) / (2 * i + 1);
        acumulador += termino;
    }

    const pi: number = acumulador * 4;

    resultado.innerText = "Resultado: " + pi;
}
function calcularCombinacao() {
    // Obtém os valores de n e p dos campos de entrada
    const n = parseInt(document.getElementById('n').value);
    const p = parseInt(document.getElementById('p').value);

    // Validação dos valores
    if (isNaN(n) || isNaN(p) || n < 0 || p < 0 || p > n) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos para n e p (p ≤ n).";
        return;
    }

    // Função para calcular o fatorial de um número
    function fatorial(x) {
        if (x === 0 || x === 1) return 1;
        let resultado = 1;
        for (let i = 2; i <= x; i++) {
            resultado *= i;
        }
        return resultado;
    }

    // Calcula a combinação C(n, p)
    const combinacao = fatorial(n) / (fatorial(p) * fatorial(n - p));

    // Exibe o resultado
    document.getElementById('resultado').innerText = `C(${n}, ${p}) = ${combinacao}`;
}

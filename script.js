function calcularCombinacao() {
    const n = parseInt(document.getElementById('n').value);
    const p = parseInt(document.getElementById('p').value);
    const resultadoElemento = document.getElementById('resultado');

    // Validação dos valores
    if (isNaN(n) || isNaN(p) || n < 0 || p < 0 || p > n) {
        resultadoElemento.innerText = "Por favor, insira valores válidos para n e p (p ≤ n).";
        resultadoElemento.style.color = "#e63946";
        resultadoElemento.classList.add("show");
        return;
    }

    function fatorial(x) {
        return x <= 1 ? 1 : x * fatorial(x - 1);
    }

    const combinacao = fatorial(n) / (fatorial(p) * fatorial(n - p));

    resultadoElemento.innerText = `C(${n}, ${p}) = ${combinacao}`;
    resultadoElemento.style.color = "#333";
    resultadoElemento.classList.add("show");
}

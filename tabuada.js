function calcular(operacao) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'Erro: Divisão por zero';
            }
            break;
        default:
            resultado = 'Operação inválida';
    }

    document.getElementById('resultado').innerText = resultado;
}
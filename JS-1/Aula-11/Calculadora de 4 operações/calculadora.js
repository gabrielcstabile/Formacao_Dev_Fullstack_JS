/**
 * Escreva um programa em js que permita inserir dois valores numéricos e então calcule o
 * resultado das quatro operações básicas (soma, subtração, multiplicação e divisão.)
 *
 * Após calcular os resultados o programa deve exibi-los na tela.
 */

const num1 = prompt("Informe o primeiro número:");
const num2 = prompt("Informe o segundo número:");

const x = parseFloat(num1);
const y = parseFloat(num2);

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  `Resultados\nSoma: ${soma}\nSubtração: ${subtracao}\nMultiplicação: ${multiplicacao}\nDivisão: ${divisao}`
);

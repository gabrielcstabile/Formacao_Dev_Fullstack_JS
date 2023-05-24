/**
 * Escreva um programa em JavaScript que permita inserir o nome e a velocidade de dois veículos e exiba na tela
uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades estão iguais)
 */

const nomeUm = prompt("Digite o nome do veículo 1");
const velocidadeUm = prompt("Digite a velocidade do veículo 1");
const nomeDois = prompt("Digite o nome do veículo 2");
const velocidadeDois = prompt("Digite a velocidade do veículo 2");

const veiculoUm = parseFloat(velocidadeUm);
const veiculoDois = parseFloat(velocidadeDois);

if (veiculoUm > veiculoDois) {
  alert("O veículo " + nomeUm + " está mais rápido que o " + nomeDois);
} else if (veiculoDois > veiculoUm) {
  alert("O veículo " + nomeDois + " está mais rápido que o " + nomeUm);
} else {
  alert("Ambos estão na mesma velocidade");
}

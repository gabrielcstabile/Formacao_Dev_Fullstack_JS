/**
 * Exercício proposto em aula:
 * Escreva um programa em Javascript que permita salvar informações de
 * um recruta. As informações a serem salvas são:
 * Primeiro nome, sobrenome, campo de estudo e ano de nascimento.
 *
 * Depois o programa deve exibir o nome completo do recruta,
 * seu campo de estudo e usa idade (baseando-se no ano de nascimento.)
 */

let primeiroNome, sobrenome, campoDeEstudo, anoDeNascimento, idade;

primeiroNome = prompt("Digite o seu primeiro nome: ");
sobrenome = prompt("Digite o seu sobrenome: ");
campoDeEstudo = prompt("Qual é a sua área de estudo?");
anoDeNascimento = prompt("Em que ano você nasceu?");
parseFloat(anoDeNascimento);

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
idade = anoAtual - anoDeNascimento;

alert(
  `O recruta ${primeiroNome} ${sobrenome} tem ${idade} anos e estuda ${campoDeEstudo}`
);

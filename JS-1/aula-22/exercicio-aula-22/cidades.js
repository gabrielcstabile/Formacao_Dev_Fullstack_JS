/**
Escreva um programa em js que peça o nome de um turista e então pergunte se ele já visitou 
alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável,
e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja
não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.
 */

const turista = alert("E aí turista, qual é o seu nome?");
let cidades = "";
let contagemCidades = 0;

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)");

while (continuar === "Sim") {
  let cidade = prompt("Qual foi a cidade visitada?");
  cidades += " - " + cidade + "\n";
  contagemCidades++;
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)");
}

alert(
  `Turista: ${turista}\nQuantidade de cidades visitadas: ${contagemCidades}\nCidades visitadas: ${cidades}`
);

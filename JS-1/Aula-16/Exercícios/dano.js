/**
Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade
de pontos de vida, o poder de defesa de outros personagem e se ele possui escudo, e então calcule a quantidade
de dano causado baseado nas seguintes regras:

1) Se o poder de ataque for maior do que o de defesa e o defensor não possuir um escudo, o dano causado será igual 
a diferença entre o ataque e a defesa.

2) Se o poder de ataque for maior que o da defesa e o defensor possuir um escudo, o dano causado será igual a metade
da diferença entre o ataque e a defesa

3) Se o poder de ataque for menor ou igual a defesa, o dano causado será 0

Por fim, o programa deve subtrair a quantidade de dano de pontos de vida do personagem defensor e exibir na tela
a quantidade de dano e as informações atualizadas de ambos os personagens.
 */

const nomeAtaque = prompt("Digite o nome do atacante");
const poderAtaque = prompt("Digite o poder do ataque");

const nomeDefesa = prompt("Digite o nome do defensor");
let vidaDefesa = prompt("Digite quanto a defesa tem de HP");
const poderDefesa = prompt("Digite o poder da defesa");
const escudo = prompt("O defensor tem escudo? Sim ou Não?");

const ataque = parseFloat(poderAtaque);
const defesa = parseFloat(poderDefesa);
let hp = parseFloat(vidaDefesa);

let dano = 0;

if (ataque > defesa && escudo === "Não") {
  dano = ataque - defesa;
  hp -= dano;
  alert(
    `${nomeAtaque} venceu o ataque com os seus ${ataque} pontos de ataque.\n\n${nomeDefesa} está com ${hp} pontos de vida.`
  );
} else if (ataque > defesa && escudo === "Sim") {
  dano = (ataque - defesa) / 2;
  hp -= dano;
  alert(
    `${nomeAtaque} venceu o ataque com os seus ${ataque} pontos de ataque.\n\n${nomeDefesa} está com ${hp} pontos de vida.`
  );
} else if (ataque <= defesa) {
  alert(
    `O ataque de ${nomeAtaque} perdeu esse confronto.\n\nO defensor ${nomeDefesa} segue com ${hp} pontos de vida, e uma defesa de ${defesa}`
  );
}

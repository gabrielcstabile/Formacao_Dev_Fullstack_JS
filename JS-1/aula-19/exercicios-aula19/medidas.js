/**
Escreva um programa que funcione como um conversor de medidas. O programa deverá pedir por um valor em metros
e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:
1- milímetro (mm)
2- centímetro (cm)
3- decímetro (dm)
4- decâmetro (dam)
5- hectômetro (hm)
6- quilômetro (km)

O programa deve estão converter a medida de acordo com a opção escolhida e exibir o resultado.
O programa deve exibir uma mensagem de "Opção inválida" caso o usuário insira uma opção diferente das disponíveis.
 */

const metros = prompt("Digite um valor em metros a ser convertido");
const unidade = prompt(
  "Escolha alguma das medidas abaixo para saber a conversão:" +
    "\n1- Milímetros (mm)" +
    "\n2- Centímetro (cm)" +
    "\n3- Decímetro (dm)" +
    "\n4- Decâmetro (dam)" +
    "\n5- Hectômetro (hm)" +
    "\n6- Quilômetro (km)"
);

switch (unidade) {
  case "1":
    alert("Resultado: " + metros + "m = " + metros * 1000 + " mm.");
    break;

  case "2":
    alert("Resultado: " + metros + "m = " + metros * 100 + " cm.");
    break;

  case "3":
    alert("Resultado: " + metros + "m = " + metros * 10 + " dm.");
    break;

  case "4":
    alert("Resultado: " + metros + "m = " + metros / 10 + " dam.");
    break;

  case "5":
    alert("Resultado: " + metros + "m = " + metros / 100 + " hm.");
    break;

  case "6":
    alert("Resultado: " + metros + "m = " + metros / 1000 + " km.");
    break;

  default:
    alert("Opção inválida");
    break;
}

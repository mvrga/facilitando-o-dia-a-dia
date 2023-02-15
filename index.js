// biblioteca com cores para usar no o terminal
const chalk = require("chalk");
//codigo para leitura de entrada terminal
const readlineSync = require("readline-sync");

let list = [];

// Para adicionar itens a list
const addItem = (prop) => {
  list.push(prop);
};
// Para listar items de list
const listItems = () => {
  list.sort();
  list.forEach((item) => console.log(chalk.grey(item)));
};
// console.log das opcoes disponiveis
let option = "";
console.log(chalk.blue("Digite") + chalk.dim(" a Palavra para Adicionar"));
console.log(chalk.yellow("Lista") + chalk.dim(" para exibir a lista ordenada"));
console.log(chalk.red("Sair") + chalk.dim(" para finalizar e exibir a Lista"));

// para loop de leitura das entradas e condicoes para enquanto for diferente de sair
while (option !== "sair" && option !== "Sair") {
  option = readlineSync.question();
  if (option === "Lista" || option === "lista") {
    listItems();
  } else if (option !== "sair" && option !== "Sair") {
    addItem(option);
  }
}
// Para exibicao da lista final quando usuario digitar sair
console.log(chalk.red("Sua Lista final ficou: "));
listItems();
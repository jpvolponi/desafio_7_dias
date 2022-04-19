let prompt = require('prompt-sync')();

/*const cidade = prompt("Digite a sua cidade:");
const msg = `Você é de ${cidade}!`;
alert(msg);*/

console.log("\nQual o seu nome? ")
let nome = prompt()
console.log("\nQuantos anos você tem? ")
let idade = prompt()
console.log("\nQual linguagem de programação você está estudando? ")
let ling = prompt()
console.log(`\n\nOlá ${nome}, você tem ${idade} anos e já está aprendendo ${ling}!\n\n`)

console.log(`Você gosta de estudar ${ling}? Responda com o número 1 para SIM ou 2 para NÃO`)
let resposta = prompt()
if (resposta == 1) {
    console.log("\n\n1 > Muito bom! Continue estudando e você terá muito sucesso.\n\n")
} else if (resposta == 2) {
    console.log("\n\n2 > Ahh que pena... Já tentou aprender outras linguagens?\n\n")
} else {
    console.log("\n\nResposta errada.\n\n")
}
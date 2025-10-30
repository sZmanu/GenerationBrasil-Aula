//importando a biblioteca
const leia = require('readline-sync')

// declarando variaveis
let nome, distancia

//entrada de dados
console.log("Digite o seu nome: ")
nome = leia.question()

console.log("\nDigite a distância percorrida em sua corrida: ")
distancia = leia.questionFloat()

//saida de dados
console.log(`\n Bom dia, ${nome}`)
console.log(`\n A distância percorrida foi de: ${distancia}km`)


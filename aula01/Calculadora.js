//Importando a biblioteca
const leia = require('readline-sync')

let celsius, fahrenheit

//entrada de dados
celsius = leia.questionFloat("Insira a temperatura em Celsius: ")

//processamento
fahrenheit = (celsius * 1.8) + 32

console.log(`\nA temperatura em fahrenheit é: ${fahrenheit}`)


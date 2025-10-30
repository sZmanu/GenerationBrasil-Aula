const leia = require('readline-sync')

let opcao

console.log("Digite 1 para ver indicação de um livro")
console.log("Digite 2 para ler uma frase motivacional")
console.log("Digite 3 para receber uma indicação de musica")
console.log("\n--------------------------------------------------")

opcao = leia.questionInt()

switch(opcao){
    case 1:
        console.log("Livro o alquimista")
        break

    case 2:
        console.log("Se você cair, levante!, Não dá para andar deitado")
        break

    case 3:
        console.log("AURORA -  No cura for me")
        break

    default:
        console.log("Opção inválida - Digite apenas de 1 a 3")
   
}

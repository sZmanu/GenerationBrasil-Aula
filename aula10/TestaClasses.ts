import { Terrestre } from "./Terrestre"
import leia = require('readline-sync')

export function main(){
 
    //instanciou um objt da classe terrestre
    const bike: Terrestre = new Terrestre(2, 2, 20)
    bike.capacidade = leia.questionInt("Digite a capacidade: ")

    console.log("A capacidade do meio de tranporte é: " + bike.capacidade)
    bike.visualizar()

}
main()

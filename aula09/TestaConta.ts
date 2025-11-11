import { Conta } from "./Conta"

export function main(){
    //instancia da classe conta
    //instanciamento de um objt

    const conta1: Conta = new Conta(12156, 7834, 1, "Michele", 1000000) //aqui se passa os valores dos atributos que foram inseridos no construtor

    console.log(`Titular: ${conta1.titular}`)
    conta1.saldo = 1500
    console.log(`saldo: ${conta1.saldo}`)


}
main()
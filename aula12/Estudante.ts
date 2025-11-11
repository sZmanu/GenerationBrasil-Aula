import { IEscritor } from "./IEscritor";
import { IPintor } from "./IPintor";
import { Pessoa } from "./Pessoas";

//a interface possui apenas a assinatura dos metodos, onde a classe que implementa essa interface é obrigada a usar os metodos presente na interface
// pois nessa linguagem não é possivel ter multiplas heranças, porem com a interface é possivel implementar mais metodos
export class Estudante extends Pessoa implements IEscritor, IPintor{

    //atributos
    //construtor
    constructor(nome: string){
        super(nome)
    }
    //metodos de acesso
    //metodos auxiliares

    public saudacao(): void{
        console.log("Ola")
    }
    escrever(): void {
        console.log("escrevendo com o computador")
        
    }
     pintar(): void {
        console.log("Pintando com tinta")
    }

}
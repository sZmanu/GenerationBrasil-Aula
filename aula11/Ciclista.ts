import { Atleta } from "./Atleta";

export class Ciclista extends Atleta{

    constructor(nome: string){
        super(nome)
    }

    public aquecer(): void {
        console.log("Estou fazendo alongamento...")
    }

    //é void pois nao retorna nenhum valor em especifico, apena simprime uma informação
     public pedalar(): void{
        console.log("Pedalando...");
    }
}
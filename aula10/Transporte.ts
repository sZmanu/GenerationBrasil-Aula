export class Transporte{

    //atributo
    private _capacidade: number

    //metodo construtor que inicializa os atributos
    constructor(capacidade: number){
        this._capacidade = capacidade
    }

    //metodo de acesso, permite outras classes acessar os atributos
    public get capacidade(){
        return this._capacidade
    }
    public set capacidade(capacidade: number){
        this._capacidade = capacidade
    }

    public visualizar(): void {
		
		console.log("\n\n************************************************************");
		console.log("Dados do Meio de Transporte:");
		console.log("****************************************************************");
		console.log("Capacidade (número de passageiros): " + this._capacidade);
	}

}
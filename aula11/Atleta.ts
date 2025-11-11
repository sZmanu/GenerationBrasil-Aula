export abstract class Atleta {
    private _nome: string;

    constructor (nome: string){
        this._nome = nome;
    }

    public get nome(){
        return this._nome;
    }

    public set nome(nome: string){
        this._nome = nome;
    }

    //apenas a assinatura do metodo, significa que todas as classes derivadas precisam conter esse metodo e definir o que o metodo vai fazer
    
    public abstract aquecer(): void;

    public visualizar(): void{
        console.log("***************************************");
        console.log("           Dados da Pessoa             ");
        console.log("***************************************");
        console.log("Nome da pessoa: ", this._nome);
    }
}
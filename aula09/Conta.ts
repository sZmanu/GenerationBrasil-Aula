//criando e exportando uma classe
export class Conta{

    //atributos da classe
    // o private indica que o atributo só é acessivel dentro da classe

    private _numero: number  
    private _agencia: number
    private _tipo: number
    private _titular: string
    private _saldo: number

    //metodo construtor ele inicializa os atributos
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number){
        //this => conta, ele representa a classe atual, é a mesma coisa de conta.numero
        this._numero = numero 
        this._agencia = agencia
        this._tipo = tipo
        this._titular = titular
        this._saldo = saldo
    }

    //metodo de acesso - GET e SET -> getters e setters, ele define como um atributo pode ser acessado de uma forma segura

    //set serve para atualizar um atributo de forma segura
    //ele recebe um numero por parametro e assim ele atualiza o atributo numero de acordo com o parametro
    public set numero(novoValor: number){
        this._numero = novoValor
    }
    //o get apenas recupera o valor do atributo de forma segura, pois isso nao tem parametros, pois ele nao recebe valores 
    public get numero(){  
        return this._numero
    }
    public get agencia() {
        return this._agencia;
    }

    public set agencia(agencia: number) {
        this._agencia = agencia;
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get titular() {
        return this._titular;
    }

    public set titular(titular: string) {
        this._titular = titular;
    }

    public get saldo() {
        return this._saldo;
    }

    public set saldo(saldo: number) {
        this._saldo = saldo;
    }
    

    
}
import { Transporte } from "./Transporte";

export class Terrestre extends Transporte{

    private _numeroRodas: number;
	private _velocidade: number;

    constructor(capacidade: number, numeroRodas: number, velocidade: number){
        //sempre que eu herdar alguma classe é necessario fazer uma referencia ao metodo construtor da classe mae, e para isso é usado a palavra super e os seus atributos
        super(capacidade)
        this._numeroRodas = numeroRodas
        this._velocidade = velocidade
    }

   public get numeroRodas() {
		return this._numeroRodas;
	}

	public set numeroRodas(numeroRodas: number) {
		this._numeroRodas = numeroRodas;
	}

	public get velocidade() {
		return this._velocidade;
	}

	public set velocidade(velocidade: number) {
		this._velocidade = velocidade;
	}

    //sobreescrita de metodo (polimorfismo), o metodo visualizar ja existe na classe mae porem é possivel reescrever ele colocando a mesma assinatura e colocando novas informaçoes no escopo

    // o supe.nomeMetodo, serve para chamar um metodo da classe mae
    	public visualizar(): void {
		super.visualizar() // aqui a gente chama o visualizar da classe mae, para nao precisar escrever tudo de novo
		console.log("Número de rodas: " + this.numeroRodas) //eu tambem posso usar this._numeroRodas se eu quiser, pois esse atributo pertence a essa clase
		console.log("Velocidade: " + this.velocidade.toFixed(2))
	}

}
export class ExcecaoSimples extends Error {

    constructor(message: string) {
        super();
        //aqui o nome é fixo, por isso ele nao é passado no parametro
        this.name = 'Exceção Simples'
        this.message = message;
    }
}
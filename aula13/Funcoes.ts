import { ExcecaoSimples } from "./exceptions/ExcecaoSimples";

export function converte(conteudo: any): string{
    return conteudo.toUpperCase();
}


export function validarIdade(idade: number): void {
    if (idade < 18)
        //é usado quando algo é grave e nao pode acontecer de jeito nenhum, e o programa nao pode continuar de jeito nenhum, eprecisa ser tratado
        //lance um novo erro, nesse caso não é um erro especifico do typeScript, como um erro de tipagem ou um erro interno
        throw new Error("A Pessoa não está apta a dirigir!");
    else
        console.log("A Pessoa está apta a dirigir!");
}

export function dividir(numero1: number, numero2: number): number | null {

    if (numero2 == 0)
        //aqui é chamado a funçao ExcecaoSimples, e nome vai ser o mesmo que foi passado, ele é fixo                 
        throw new ExcecaoSimples("Não existe divisão por zero!"); //aqui é colocado a mensagem que vai ser passada, a mesma que foi passado por parametro

    return numero1 / numero2;
}
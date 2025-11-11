//uma funçao que ira retornar um numero, any = qualquer tipo, void = sem retorno

export function somar(num1: number, num2: number): number{
    let soma: number = num1 + num2 
    return soma
}

export function transformarNumeroEmExtenso(valor: number): string{
    let texto: string
    if(valor === 5){
        texto = "Voce digitou o valor 5"
    }
    else{
        texto = "voce retornou um numero diferente de 5"
    }
    return texto
}

// | = pipe / || parecido com o ou, mas é usaso apenas para determinar dois tipos
// let usuario:number | string   se eu quisesse que o usuario digitasse
// usuario = leia.question

export function logar(usuario: number | string): void{ // | serve para dizer que variavel pode ser de dois tipos

    if (typeof(usuario) === "number" )
        console.log("\nVocê está acessando o insta pelo seu celular");
    else
        console.log("\nVocê está logando pelo email");
}


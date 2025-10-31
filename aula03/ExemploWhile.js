const leia = require("readline-sync");

let continua = true; 
let numero1, numero2, resultado;  

// diferente do for com o while não da pra controlar quantas vezes o codigo vai repetir, o numero de repeticao depende do usuario.

while (continua) { //(contador < 3)
    numero1 = leia.questionInt("Digite primeiro valor: ");

    numero2 = leia.questionInt("Digite segundo valor: ");

    resultado = numero1 + numero2;

    console.log("O resultado da soma é: " + resultado);

    console.log("\n++++++++++++++++MENU++++++++++++++++++");
    continua = leia.keyInYNStrict("\nDeseja continuar? ");
    console.log("++++++++++++++++++++++++++++++++++");
    //contador++ desta forma é possivel controlar quantas vezes vai se repetir
}


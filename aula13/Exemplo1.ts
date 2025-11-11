//exceptions são erros que acontecem durante a execução do programa, são erros esperados e podem ser tratados para que o programa nao seja interrompido ou que seja interrompido da melhor forma
import { converte } from "./Funcoes"

export function main(){

    try{
        const resultado = converte(123) //acontece um erro de tipagem, pois o upper case aceita apenas string, e o tipo do parametro passado foi any, logo se eu passar algo diferente de string vai gerar um erro
        console.log(resultado)
    }
    catch(error){
        //aqui esta verificando se é um erro de tipagem
        if(error instanceof TypeError){
            //diferente do log o error deixar a palavra em vermelho
            console.error("TypeError: " + error.message) // error.mensagem mostra o erro que esta acontecendo
        }
    } finally{
        // independente se der erro ou nao, o finally sempre vai executar
        console.log("Sempre irei executar")
    }
    
}
main()
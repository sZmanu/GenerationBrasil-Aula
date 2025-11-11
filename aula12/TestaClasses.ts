import { Estudante } from "./Estudante"

export function main(){

    const estudante: Estudante = new Estudante("Joyse")
    estudante.visualizar()
    estudante.escrever()
    estudante.pintar()
    

}
main()
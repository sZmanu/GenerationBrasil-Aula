import { Ciclista } from "./Ciclista"
import { Corredor } from "./Corredor"
import { Nadador } from "./Nadador"

export function main(){

    const ciclista: Ciclista = new Ciclista("Manu")
    ciclista.aquecer()
    ciclista.pedalar()
    ciclista.visualizar()

    const nadador: Nadador = new Nadador("Julio")
    nadador.aquecer()
    nadador.nadar()
    nadador.visualizar()

    const corredor: Corredor = new Corredor("Janete")
    corredor.aquecer()
    corredor.correr()
    corredor.visualizar()

}
main()


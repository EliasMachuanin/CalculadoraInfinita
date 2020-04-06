import { ExpresionNumerica } from "./ExpresionNumerica"
import { ExpresionOperacion } from "./ExpresionOperacion"

export class ExpresionFactory{

    public static factoryMethod(tipo : string){
        let nuevaE
        if(tipo == "n"){
            nuevaE = new ExpresionNumerica()
        }
        else{
            nuevaE = new ExpresionOperacion()
        }
        return nuevaE
    }
}
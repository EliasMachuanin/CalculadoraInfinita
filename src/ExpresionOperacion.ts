import Expresion from "./Expresion";
import Contexto from "./Contexto"
import OperacionFactory from "./OperacionFactory";


export class ExpresionOperacion extends Expresion {

    public interpret(a : Contexto){
        let aux = a, aux2;
        aux2 = this.traducirOperacion(aux)
        if(aux2!=null){
            a.valor = aux2
            a.tipo = this
        }
    }

    public traducirOperacion(a:Contexto){
        let respuesta;
        const f = new OperacionFactory()
        switch(a.expresionAdaptada){
            case "sumar":
                respuesta = f.factoryMethod("s");
                break;
            case "restar":
                respuesta = f.factoryMethod("r");
                break;
            case "multiplicar":
                respuesta = f.factoryMethod("p");
                break;
            case "dividir":
                respuesta = f.factoryMethod("d");
                break;
            default:
                respuesta = null
                break;
        }
        return respuesta;
    }

}

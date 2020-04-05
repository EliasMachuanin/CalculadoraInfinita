import Expresion from "./Expresion";
import Contexto from "./Contexto"


export class ExpresionOperacion extends Expresion {

    public interpret(a : Contexto){
        let aux = a, aux2 = "";
        aux2 = this.traducirOperacion(aux)
        if(aux2!=""){
            a.valor = aux2
            a.tipo = this
        }
    }

    public traducirOperacion(a:Contexto){
        let respuesta;
        switch(a.expresionAdaptada){
            case "sumar":
                respuesta = "+";
                break;
            case "restar":
                respuesta = "-";
                break;
            case "multiplicar":
                respuesta = "*";
                break;
            case "dividir":
                respuesta = "/";
                break;
            default:
                respuesta = ""
                break;
        }
        return respuesta;
    }

}

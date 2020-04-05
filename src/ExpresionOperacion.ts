import Expresion from "./Expresion";
import Contexto from "./Contexto"


export class ExpresionOperacion extends Expresion {

    public interpret(a : Contexto){
        let aux;
        aux=a;
        a.expresionTraducida = this.traducirOperacion(aux)
        if(a.expresionTraducida!=""){
            a.valor = a.expresionTraducida
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

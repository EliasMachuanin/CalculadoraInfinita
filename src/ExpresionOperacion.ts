import Expresion from "./Expresion";
import Contexto from "./Contexto"
import Calculadora from "./Calculadora";


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
        const c = new Calculadora()
        switch(a.expresionAdaptada){
            case "sumar":
                respuesta = c.suma;
                break;
            case "restar":
                respuesta = c.resta;
                break;
            case "multiplicar":
                respuesta = c.producto;
                break;
            case "dividir":
                respuesta = c.division;
                break;
            default:
                respuesta = null
                break;
        }
        return respuesta;
    }

}

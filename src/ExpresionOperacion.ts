import Expresion from "./Expresion";
import Contexto from "./Contexto"


export class ExpresionOperacion extends Expresion {

    public traducirContexto(a : Contexto){
        let aux;
        aux=a;
        return a.expresionTraducida = this.traducirOperacion(aux)
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
        }
        return respuesta;
    }

}

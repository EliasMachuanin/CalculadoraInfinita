import Expresion from "./Expresion";
import Contexto from "./Contexto"


export class ExpresionNumerica extends Expresion {

    public interpret(a : Contexto){
        let aux2;
        aux2=a;
        while((aux2.expresionAdaptada!="")&&(a.expresionTraducida!="o")){
            a.expresionTraducida = a.expresionTraducida.concat(this.traducirNumero(aux2))
        }
        if(a.expresionTraducida=="o"){
            a.expresionTraducida = ""
            a.valor = null
        }
        else{
            a.valor = parseInt(a.expresionTraducida)
        }
    }

    public traducirNumero(a:Contexto){
        let respuesta,num;
        num = a.expresionAdaptada.substring(0, 3)
        switch(num){
            case "cer":
                respuesta = "0";
                a.expresionAdaptada = a.expresionAdaptada.replace("cero", "");
                break;
            case "uno":
                respuesta = "1";
                a.expresionAdaptada = a.expresionAdaptada.replace("uno", "");
                break;
            case "dos":
                respuesta = "2";
                a.expresionAdaptada = a.expresionAdaptada.replace("dos", "");
                break;
            case "tre":
                respuesta = "3";
                a.expresionAdaptada = a.expresionAdaptada.replace("tres", "");
                break;
            case "cua":
                respuesta = "4";
                a.expresionAdaptada = a.expresionAdaptada.replace("cuatro", "");
                break;
            case "cin":
                respuesta = "5";
                a.expresionAdaptada = a.expresionAdaptada.replace("cinco", "");
                break;
            case "sei":
                respuesta = "6";
                a.expresionAdaptada = a.expresionAdaptada.replace("seis", "");
                break;
            case "sie":
                respuesta = "7";
                a.expresionAdaptada = a.expresionAdaptada.replace("siete", "");
                break;
            case "och":
                respuesta = "8";
                a.expresionAdaptada = a.expresionAdaptada.replace("ocho", "");
                break;
            case "nue":
                respuesta = "9";
                a.expresionAdaptada = a.expresionAdaptada.replace("nueve", "");
                break;
            default:
                respuesta = "o";
                break;
                
        }
        return respuesta;
    }

}

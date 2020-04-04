import Expresion from "./Expresion";
import Contexto from "./Contexto"


export class ExpresionNumerica extends Expresion {

    public traducirContexto(a : Contexto){
        let aux2;
        aux2=a;
        while(aux2.expresionAdaptada!=""){
            a.expresionTraducida = a.expresionTraducida.concat(this.traducirNumero(aux2))
        }
        a.valor = parseInt(a.expresionTraducida)
        return a.expresionTraducida;
    }

}

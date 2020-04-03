import Expresion from "./Expresion";
import Contexto from "./Contexto"


export class ExpresionNumerica extends Expresion {
    public cero() {
        return "cer";
    }
    public uno() {
        return "uno";
    }
    public dos(){
        return "dos";
    }
    public tres(){
        return "tre";
    }
    public cuatro(){
        return "cua";
    }
    public cinco() {
        return "cin";
    }
    public seis(){
        return "sei";
    }
    public siete(){
        return "sie";
    }
    public ocho(){
        return "och";
    }
    public nueve(){
        return "nue";
    }




    public traducirContexto(a : Contexto){
        let i=0, aux = "", aux2;
        aux2=a;
        while(aux2.expresion!=""){
            aux = aux2.expresion.substring(0, 3)
            a.expresionTraducida = a.expresionTraducida.concat(this.traducirNumero(aux))
            aux2.expresion = this.borrarResto(aux2.expresion, a.expresionTraducida[i])
            i++;
        }
        return a.expresionTraducida;
    }

}
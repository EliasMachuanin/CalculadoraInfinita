import Contexto from "./Contexto";
import { ExpresionOperacion } from "./ExpresionOperacion";

export class Calculadora {
    public resultado = null
    public operando = null
    public operacion = null

    constructor(){
    }

    public obtenerNuevoElemento(a : Contexto){
        if(a.tipo instanceof ExpresionOperacion){
            if((this.resultado != null)&&(this.operacion == null)){
                this.operacion = a.valor
            }
            else{
                this.resultado = null
                this.operando=null
                this.operacion = null
                console.log("Syntax Error") 
            }
        }
        else{
            if(this.resultado == null){
                this.resultado = a.valor
            }
            else if(this.operacion != null){
                this.operando = a.valor
                this.realizarOperacion()
            }
            else{
                this.resultado = null
                this.operando=null
                this.operacion = null
                console.log("Syntax Error") 
                
            }
        }
    }

    public realizarOperacion(){
        this.operacion()
        this.operacion = null
        this.operando = null
    }


    public suma(){
        this.resultado = this.resultado + this.operando
    }

    public resta(){
        this.resultado = this.resultado - this.operando
    }

    public producto(){
        this.resultado = this.resultado * this.operando
    }

    public division(){
        this.resultado = this.resultado / this.operando
    }

}
export default Calculadora;
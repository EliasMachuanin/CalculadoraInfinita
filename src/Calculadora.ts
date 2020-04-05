import Contexto from "./Contexto";
import { ExpresionOperacion } from "./ExpresionOperacion";

export class Calculadora {
    public resultado = null
    public operando = null
    public operacion =""

    constructor(){
    }

    public obtenerNuevoElemento(a : Contexto){
        if(a.tipo instanceof ExpresionOperacion){
            if((this.resultado != null)&&(this.operacion == "")){
                this.operacion = a.valor
            }
            else{
                this.resultado = null
                this.operando=null
                this.operacion = ""
                console.log("Syntax Error") 
            }
        }
        else{
            if(this.resultado == null){
                this.resultado = a.valor
            }
            else if(this.operacion != ""){
                this.operando = a.valor
                this.realizarOperacion()
            }
            else{
                this.resultado = null
                this.operando=null
                this.operacion = ""
                console.log("Syntax Error") 
                
            }
        }
    }

    public realizarOperacion(){
        switch(this.operacion){
            case "+":
                this.suma()
                this.operando=null
                this.operacion = ""
                break;
            case "-":
                this.resta()
                this.operando=null
                this.operacion = ""
                break;
            case "*":
                this.producto()
                this.operando=null
                this.operacion = ""
                break;
            case "/":
                this.division()
                this.operando=null
                this.operacion = ""
                break;      
        }
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
import Contexto from "./Contexto";

export class Calculadora {
    public resultado = null
    public operando = null
    public operacion =""

    constructor(){
    }

    public obtenerNuevoOperando(a : Contexto){
        if(this.resultado != null){
            this.operando = a.valor
        }
        else{
            this.resultado = a.valor
        }
        /*else{
            this.resultado = undefined
            this.operando=null
            this.operacion = ""
            throw new Error("Syntax Error") 
        }*/
    }

    public obtenerNuevaOperacion(a : Contexto){
        //if((this.resultado != null)&&(this.operacion == "")){
            this.operacion = a.valor
        //}
        /*else{
            this.resultado = undefined
            this.operando=null
            this.operacion = ""
            throw new Error("Syntax Error") 
        }*/
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
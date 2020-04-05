import Contexto from "./Contexto";

export class Calculador {
    public resultado
    public nuevoOperando = null
    public operacion

    constructor(){
    }

    public obtenerNuevoOperando(a : Contexto){
        if(this.resultado == undefined){
            this.resultado = a.valor
        }
        else if(this.operacion != ""){
            this.nuevoOperando = a.valor
        }
    }

    public obtenerNuevaOperacion(a : Contexto){
        this.operacion = a.valor
    }

    public realizarOperacion(){
        switch(this.operacion){
            case "+":
                this.suma
                this.nuevoOperando=null
                this.operacion = ""
                break;
            case "-":
                this.resta
                this.nuevoOperando=null
                this.operacion = ""
                break;
            case "*":
                this.producto
                this.nuevoOperando=null
                this.operacion = ""
                break;
            case "/":
                this.division
                this.nuevoOperando=null
                this.operacion = ""
                break;      
        }
    }


    private suma(){
        this.resultado = this.resultado + this.nuevoOperando
    }

    private resta(){
        this.resultado = this.resultado - this.nuevoOperando
    }

    private producto(){
        this.resultado = this.resultado * this.nuevoOperando
    }

    private division(){
        this.resultado = this.resultado / this.nuevoOperando
    }

}
export default Calculador;
export class Traductor {
    constructor(){
    }

    public traducirComando(a : string){
        let i=0, aux = "", aux2 = "", resultado="";
        aux2=a;
        aux2 = this.borrarBlancos(aux2)
        while(aux2!=""){
            aux = aux2.substring(0, 3)
            resultado = resultado.concat(this.traducirNumero(aux))
            aux2 = this.borrarResto(aux2, resultado[i])
            i++;
        }
        return resultado;
    }

    public borrarBlancos(a : string){
        let aux = a
        a = a.replace(" ", "")
        while(aux != a){
            aux = a 
            a = a.replace(" ", "")
        }
        return aux
    }


    public borrarResto(a: string, num : string){
        let respuesta;
        switch(num){
            case "0":
                respuesta = a.replace("cero", "");
                break;
            case "1":
                respuesta = a.replace("uno", "");
                break;                
            case "2":
                respuesta = a.replace("dos", "");
                break;
            case "3":
                respuesta = a.replace("tres", "");
                break;
            case "4":
                respuesta = a.replace("cuatro", "");
                break;
            case "5":
                respuesta = a.replace("cinco", "");
                break;
            case "6":
                respuesta = a.replace("seis", "");
                break;
            case "7":
                respuesta = a.replace("siete", "");
                break;
            case "8":
                respuesta = a.replace("ocho", "");
                break;
            case "9":
                respuesta = a.replace("nueve", "");
                break;
        }
        return respuesta;

    }

    public traducirNumero(num : string){
        let respuesta;
        switch(num){
            case "cer":
                respuesta = "0";
                break;
            case "uno":
                respuesta = "1";
                break;
            case "dos":
                respuesta = "2";
                break;
            case "tre":
                respuesta = "3";
                break;
            case "cua":
                respuesta = "4";
                break;
            case "cin":
                respuesta = "5";
                break;
            case "sei":
                respuesta = "6";
                break;
            case "sie":
                respuesta = "7";
                break;
            case "och":
                respuesta = "8";
                break;
            case "nue":
                respuesta = "9";
                break;
                
        }
        return respuesta;
    }

}

export default Traductor;
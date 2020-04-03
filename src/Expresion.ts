import { Contexto } from "./Contexto";

export abstract class Expresion{
    public abstract cero();
    public abstract uno();
    public abstract dos();
    public abstract tres();
    public abstract cuatro();
    public abstract cinco();
    public abstract seis();
    public abstract siete();
    public abstract ocho();
    public abstract nueve();

    public abstract traducirContexto(a : Contexto)

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


}export default Expresion



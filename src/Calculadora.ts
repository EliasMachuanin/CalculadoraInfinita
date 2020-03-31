export class Calculador {
    constructor(){
    }
    suma(a : number, b : number):number{
        let c=0;
        
        for(a=a;a>0;a--){
            for(c=b;c==b;b++){
            }
        }
        return b;
    }

    resta(a : number, b : number):number{
        let c=0;
        
        for(b=b;b>0;b--){
            for(c=a;c==a;a--){
            }
        }
        return a;
    }

    producto(a : number, b : number):number{
        let c=0, i=0;
        
        for(c=0;c<b;c++){
            i = this.suma(a, a);
        }
        return i;
    }

    //Siempre redondea para abajo.
    division(a : number, b : number):number{
        let i=0;
        if(b==0){
            i = null;
          }
        else if(b==1){
            i = a;
        }
        else if(a<b){
            i = 0;
        }
        else{
            while(a>b){
                a = this.resta(a, b);
                i = this.suma(i, 1);
            }
        }
        return i;
    }

    public sumar(a, b) {
        let resultado = "";
        let longA = a.length;
        let longB = b.length;
        if(longB > longA ){
            let temp = b;
            b = a;
            a = temp;
        }
        let acarreo = 0;
        let digitoA;
        let digitoB;
        let aux;
        let digitoResultado;
        for (let i = 0; i < a.length; i++) {
            digitoA = parseInt(a.charAt(a.length - 1 - i));      
            digitoB = parseInt(b.charAt(b.length - 1 - i));    
            digitoB = (digitoB) ? digitoB : 0;                             
            aux = (acarreo + digitoA + digitoB).toString();                 
            digitoResultado = aux.charAt(aux.length - 1);            
            acarreo = parseInt(aux.substr(0, aux.length - 1));  
            acarreo = (acarreo) ? acarreo : 0;
            resultado = (i === a.length - 1) ? aux + resultado : digitoResultado + resultado;
        }
        return resultado;
    }

    public restar(a, b) {
        let resultado = "";
        let longA = a.length;
        let longB = b.length;
        if(longB > longA ){
            let temp = b;
            b = a;
            a = temp;
        }
        let acarreo = 0;
        let digitoA;
        let digitoB;
        let aux;
        let digitoResultado;
        for (let i = 0; i < a.length; i++) {
            digitoA = parseInt(a.charAt(a.length - 1 - i));      
            digitoB = parseInt(b.charAt(b.length - 1 - i));    
            digitoB = (digitoB) ? digitoB : 0;
            if(digitoA<digitoB){
                aux = (((digitoA+10) - acarreo) - digitoB).toString();
                digitoResultado = aux.charAt(aux.length - 1);
                acarreo = (acarreo) ? acarreo : 0;
                resultado = (i === a.length - 1) ? aux + resultado : digitoResultado + resultado;
            }                  
            aux = ((digitoA - acarreo) - digitoB).toString();                 
            digitoResultado = aux.charAt(aux.length - 1);            
            acarreo = parseInt(aux.substr(0, aux.length - 1));  
            acarreo = (acarreo) ? acarreo : 0;
            resultado = (i === a.length - 1) ? aux + resultado : digitoResultado + resultado;
        }
        let i=0
        while((resultado[i] == "0") && (resultado.length != 1)){
            resultado = resultado.replace("0", "")
        }
        return resultado;
    }

}
export default Calculador;
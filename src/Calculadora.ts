export class Calculador {
    constructor(){
    }
    sumar(a : number, b : number):number{
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
            i = this.sumar(a, a);
        }
        return i;
    }

    //Siempre redondea para arriba.
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
            while(a>0){
                a = this.resta(a, b);
                i = this.sumar(i, 1);
            }
        }
        return i;
    }

/*    sumarStrings(a : string, b : string){
        let tamA= a.length;
        let tamB = b.length;
        let aux1 = "";
        let aux2= "";

        if(tamA<tamB){
            for(let i=0;i<tamB-tamA;i++){
                aux1.concat("0");
            }
            aux1.concat(a);
            aux2 = b;

        }
        else if(tamB<tamA){
            for(let i=0;i<tamA-tamB;i++){
                aux2.concat("0");
            }
            aux2.concat(b);
            aux1 = a;
        }
        console.log(aux1);
        console.log(aux2);
        let c = 0;
        let resultado = "";
        let acarreo = 0;
        let strAcarreo;
        for(let i=aux1.length-1; i<=0; i--){
            c = Number(aux1[i])+Number(aux2[i])+acarreo;
            if(c<10){
                strAcarreo = "0".concat(c.toString());
            }
            acarreo = Number(c.toString()[0]);
            resultado = resultado.concat(c.toString()[1])

        }
        if(acarreo>0){
            resultado = resultado.concat(acarreo.toString())
        }
        return resultado.split("").reverse().join();
    }*/

}
export default Calculador;
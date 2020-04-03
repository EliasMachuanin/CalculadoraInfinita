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

}
export default Calculador;
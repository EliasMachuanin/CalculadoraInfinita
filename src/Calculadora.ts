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

    division(a : number, b : number):number{
        let i=0;
        if(b==1){
            i=a;
        }
        else{
            while(a>0){
                a = this.resta(a, b);
                i = this.sumar(i, 1);
            }
        }
        return i;
    }
}

export default Calculador;
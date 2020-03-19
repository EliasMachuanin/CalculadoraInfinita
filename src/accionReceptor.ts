export class AccionReceptor {
    public stateNumero  : string = "";
    constructor(){
    }

    public actionFinNumero(){
        let a;
        a = this.stateNumero;
        this.stateNumero = "";
        return a;
    }

    public actionNumero(a : string){
        this.stateNumero = this.stateNumero.concat(a);
        return this.stateNumero;
    }
}

export default AccionReceptor;
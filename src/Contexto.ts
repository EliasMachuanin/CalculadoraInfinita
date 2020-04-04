export class Contexto {
    public expresion : string;
    public expresionAdaptada : string;
    public expresionTraducida : string;
    public valor;
  
    constructor(a : string){
      this.expresion = a
      this.expresionAdaptada = this.adaptarContexto()
      this.expresionTraducida=""
    }

    public adaptarContexto(){
      let aux = this.expresion, aux2 = this.expresion;

      aux2 = aux2.replace(" ", "")
      while(aux != aux2){
          aux = aux2 
          aux2 = aux2.replace(" ", "")
      }
      return this.expresionAdaptada = aux
  }

} export default Contexto
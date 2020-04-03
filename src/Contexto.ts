export class Contexto {
    public expresion : string;
    public expresionTraducida : string;
    public valor : number;
  
    constructor(a : string){
      this.expresion=a
      this.expresion = this.adaptarContexto()
      this.expresionTraducida=""
    }

    public adaptarContexto(){
      let aux = this.expresion

      this.expresion = this.expresion.replace(" ", "")
      while(aux != this.expresion){
          aux = this.expresion 
          this.expresion = this.expresion.replace(" ", "")
      }
      return aux
  }

} export default Contexto
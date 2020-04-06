import { expect } from "chai";
import { Calculadora } from "../src/Calculadora";
import Contexto from "../src/Contexto";
import { ExpresionFactory } from "../src/ExpresionFactory";
import { ExpresionNumerica } from "../src/ExpresionNumerica";
import { ExpresionOperacion } from "../src/ExpresionOperacion";



describe('Contexto', function() {
  it('normalizar contexto', function() {
    const r = new Contexto("cero uno uno ");
    expect(r.expresionAdaptada).equal("cerounouno");
  });
});


describe('Operar contexto', function() {
    it('Sumador', function() {
      const c = new Calculadora();
      const ex = ExpresionFactory.factoryMethod("n")
      const con1 = new Contexto("nuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenueve")
      const con2 = new Contexto("uno")
      ex.interpret(con1)
      ex.interpret(con2)
      expect(con1.valor + con2.valor).equal(100000000000000000000000);
    });
  });

  describe('Operar contexto', function() {
    it('Restador', function() {
      const c = new Calculadora();
      const ex = ExpresionFactory.factoryMethod("n")
      const con1 = new Contexto("cerounodostrescuatrocincoseissieteochonueve")
      const con2 = new Contexto("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ")
      ex.interpret(con1)
      ex.interpret(con2)
      expect(con1.valor - con2.valor).equal(-4531131124374652422);
    });
  });


  describe('Operar contexto', function() {
    it('Multiplicador', function() {
      const c = new Calculadora();
      const ex = ExpresionFactory.factoryMethod("n")
      const con1 = new Contexto("cerounodostrescuatrocincoseissieteochonueve")
      const con2 = new Contexto("  dos      ")
      ex.interpret(con1)
      ex.interpret(con2)
      expect(con1.valor * con2.valor).equal(246913578);
    });
  });


  describe('Operar contexto', function() {
    it('Divisor', function() {
      const c = new Calculadora();
      const ex = ExpresionFactory.factoryMethod("n")
      const con1 = new Contexto("cerounodostrescuatrocincoseissieteochonueve")
      const con2 = new Contexto("     dos        ")
      ex.interpret(con1)
      ex.interpret(con2)
      expect(con1.valor/ con2.valor).equal(61728394.5);
    });
  });

  describe('ExpresionFactory', function() {
    it('Crear ExpresionNumerica', function() {
      const ex = ExpresionFactory.factoryMethod("n")
      expect(ex instanceof ExpresionNumerica).equal(true);
    });
  });

  describe('ExpresionFactory', function() {
    it('Crear ExpresionOperacion', function() {
      const ex = ExpresionFactory.factoryMethod("o")
      expect(ex instanceof ExpresionOperacion).equal(true);
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 10', function() {
      const r = new Contexto("unocero");
      const ex = ExpresionFactory.factoryMethod("n")
      ex.interpret(r)
      expect(r.valor).equal(10);
    });
  });
  

  describe('ExpresionNumerica', function() {
    it('traducir 100', function() {
      const r = new Contexto("uno cero cero");
      const ex = ExpresionFactory.factoryMethod("n")
      ex.interpret(r)
      expect(r.valor).equal(100);
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 431', function() {
      const r = new Contexto("cuatrotresuno");
      const ex = ExpresionFactory.factoryMethod("n")
      ex.interpret(r)
      expect(r.valor).equal(431);
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 549', function() {
      const r = new Contexto("    cero cerocinco cuatro   nueve                           ");
      const ex = ExpresionFactory.factoryMethod("n")
      ex.interpret(r)
      expect(r.valor).equal(549);
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 45311311', function() {
      const r = new Contexto("  cuatro cincotresunouno  tres uno uno");
      const ex = ExpresionFactory.factoryMethod("n")
      ex.interpret(r)
      expect(r.valor).equal(45311311);
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 4531131124498109211', function() {
      const r = new Contexto("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ");
      const ex = ExpresionFactory.factoryMethod("n")
      ex.interpret(r)
      expect(r.valor).equal(4531131124498109211);
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 0123456789', function() {
      const r = new Contexto("cerounodostrescuatrocincoseissieteochonueve");
      const ex = ExpresionFactory.factoryMethod("n")
      ex.interpret(r)
      expect(r.valor).equal(123456789);
    });
  });

  describe('ExpresionNumerica', function() {
    it('Mantener comando introducido', function() {
      const r = new Contexto("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ");
      const ex = ExpresionFactory.factoryMethod("n")
      ex.interpret(r)
      expect(r.expresion).equal("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ");
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir operacion a undefined', function() {
      const r = new Contexto("  sumar ");
      const ex = ExpresionFactory.factoryMethod("n")
      ex.interpret(r)
      expect(r.valor).equal(null);
    });
  });


  describe('ExpresionOperacion', function() {
    it('traducir suma', function() {
      const c = new Calculadora()
      let listaContextos = []
      let listaExpresiones = []
      listaContextos.push(new Contexto("sumar"))
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].tipo==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i=i+1;
        }
      }
      expect(listaContextos[0].valor).equal(c.suma);
    });
  });

  describe('ExpresionOperacion', function() {
    it('traducir resta', function() {
      const c = new Calculadora()
      let listaContextos = []
      let listaExpresiones = []
      listaContextos.push(new Contexto("restar"))
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].valor==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i=i+1;
        }
      }
      expect(listaContextos[0].valor).equal(c.resta);
    });
  });

  describe('ExpresionOperacion', function() {
    it('traducir multiplicar', function() {
      const c = new Calculadora()
      let listaContextos = []
      let listaExpresiones = []
      listaContextos.push(new Contexto("multiplicar"))
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].valor==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i=i+1;
        }
      }
      expect(listaContextos[0].valor).equal(c.producto);
    });
  });

  describe('ExpresionOperacion', function() {
    it('traducir dividir', function() {
      const c = new Calculadora()
      let listaContextos = []
      let listaExpresiones = []
      listaContextos.push(new Contexto("dividir"))
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].valor==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i=i+1;
        }
      }
      expect(listaContextos[0].valor).equal(c.division);
    });
  });

  describe('ExpresionOperacion', function() {
    it('traducir numero a ""', function() {
      const r = new Contexto("   unotres cero");
      const ex = ExpresionFactory.factoryMethod("o")
      ex.interpret(r)
      expect(r.valor).equal(null);
    });
  });

  describe('Traducir Contextos', function() {
    it('traducir operacion', function() {
      let listaExpresiones = [];
      const r = new Contexto("dividir");
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      let i = 0
      while(r.valor==null){
        listaExpresiones[i].interpret(r)
        i++;
      }
      const c = new Calculadora()
      expect(r.valor).equal(c.division);
    });
  });

  describe('Traducir Contextos', function() {
    it('traducir numero', function() {
      let listaExpresiones = [];
      const r = new Contexto("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ");
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      let i = 0
      while(r.valor==null){
        listaExpresiones[i].interpret(r)
        i++;
      }
      expect(r.valor).equal(4531131124498109211);
    });
  });

  describe('Traducir Contextos', function() {
    it('traducir numeros y sumarlos', function() {
      let listaExpresiones = [];
      let listaContextos = [];
      listaContextos.push(new Contexto("nuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenueve")      ) 
      listaContextos.push(new Contexto("uno"))
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      for(let j = 0; j < 2; j++){
        let i = 0
        while(listaContextos[j].valor==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i++;
        }
      }
      expect(listaContextos[0].valor + listaContextos[1].valor).equal(100000000000000000000000);
    });
  });

  describe('Estado calculadora', function() {
    it('resultado', function() {
      let listaExpresiones = [];
      const c = new Calculadora()
      const r = new Contexto("uno");
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      let i = 0
      while(r.valor==null){
        listaExpresiones[i].interpret(r)
        i++;
      }
      c.obtenerNuevoElemento(r)
      expect(r.valor).equal(c.resultado);
    });
  });

  describe('Estado calculadora', function() {
    it('operacion', function() {
      let listaExpresiones = [];
      let listaContextos = [];
      const c = new Calculadora()
      listaContextos.push(new Contexto("uno"));
      listaContextos.push(new Contexto("sumar"));
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].tipo==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i++;
        }
        c.obtenerNuevoElemento(listaContextos[j])
      }
      expect(c.operacion).equal(c.suma);
    });
  });


  describe('Calculadora', function() {
    it('Suma', function() {
      let listaContextos = []
      let listaExpresiones = []
      const c = new Calculadora()
      listaContextos.push(new Contexto("uno")) 
      listaContextos.push(new Contexto("sumar"))
      listaContextos.push(new Contexto("uno"))
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].tipo==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i=i+1;
        }
      }
      for(let j =0; j<listaContextos.length; j++){
        c.obtenerNuevoElemento(listaContextos[j])
    }
      expect(c.resultado).equal(2);
    });
  });


  describe('Calculadora', function() {
    it('Resta', function() {
      let listaContextos = []
      let listaExpresiones = []
      const c = new Calculadora()
      listaContextos.push(new Contexto("uno")) 
      listaContextos.push(new Contexto("restar"))
      listaContextos.push(new Contexto("uno"))
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].tipo==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i=i+1;
        }
        c.obtenerNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(0);
    });
  });


  describe('Calculadora', function() {
    it('Multiplicacion', function() {
      let listaContextos = []
      let listaExpresiones = []
      const c = new Calculadora()
      listaContextos.push(new Contexto("cincocerocero cero")) 
      listaContextos.push(new Contexto("multiplicar"))
      listaContextos.push(new Contexto(" cinco"))
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].tipo==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i=i+1;
        }
        c.obtenerNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(25000);
    });
  });


    describe('Calculadora', function() {
    it('Division', function() {
      let listaContextos = []
      let listaExpresiones = []
      const c = new Calculadora()
      listaContextos.push(new Contexto("doscero cero cero cero cerocero cero cero cero cerocero cero cero cero cerocero cero cero cero cerocero cero cero cero cerocero cero cero cero cero")) 
      listaContextos.push(new Contexto("dividir"))
      listaContextos.push(new Contexto("dos"))
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].tipo==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i=i+1;
        }
        c.obtenerNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(1000000000000000000000000000000);
    });
  });


  describe('Calculadora', function() {
    it('Caluclo completo 1', function() {
      let listaExpresiones = [];
      let listaContextos = [];
      listaContextos.push(new Contexto("unocero")) 
      listaContextos.push(new Contexto("sumar"))
      listaContextos.push(new Contexto("unocero"))
      listaContextos.push(new Contexto("dividir")) 
      listaContextos.push(new Contexto("dos"))
      listaContextos.push(new Contexto("multiplicar"))
      listaContextos.push(new Contexto("unocero"))
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      const c = new Calculadora()
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].tipo==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i=i+1;
        }
        c.obtenerNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(100);
    });
  });



  describe('Calculadora', function() {
    it('Calculo Completo 2', function() {
      let listaContextos = []
      let listaExpresiones = []
      const c = new Calculadora()
      listaContextos.push(new Contexto("dos cinco")) 
      listaContextos.push(new Contexto("multiplicar"))
      listaContextos.push(new Contexto("dos"))
      listaContextos.push(new Contexto("dividir")) 
      listaContextos.push(new Contexto("cinco"))
      listaContextos.push(new Contexto("multiplicar"))
      listaContextos.push(new Contexto("unocero"))
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].tipo==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i=i+1;
        }
        c.obtenerNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(100);
    });
  });


  describe('Calculadora', function() {
    it('Calculo Completo 3', function() {
      let listaContextos = []
      let listaExpresiones = []
      const c = new Calculadora()
      listaContextos.push(new Contexto("dos cinco")) 
      listaContextos.push(new Contexto("dos"))
      listaContextos.push(new Contexto("dividir")) 
      listaContextos.push(new Contexto("cinco"))
      listaContextos.push(new Contexto("multiplicar"))
      listaContextos.push(new Contexto("unocero"))
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].tipo==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i=i+1;
        }
        c.obtenerNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(50);
    });
  });


  describe('Calculadora', function() {
    it('Calculo Completo Julian', function() {
      let listaContextos = []
      let listaExpresiones = []
      const c = new Calculadora()
      listaContextos.push(new Contexto("cin con uevecuat rodos")) 
      listaContextos.push(new Contexto("divi di r"))
      listaContextos.push(new Contexto("tre scuatr o"))
      listaContextos.push(new Contexto("mult iplic ar")) 
      listaContextos.push(new Contexto("d os t r e scuat roc inc o"))
      listaContextos.push(new Contexto("tre scuatr o"))
      listaContextos.push(new Contexto("mult iplic ar")) 
      listaContextos.push(new Contexto("d os t r e scuat roc inc o"))
      listaContextos.push(new Contexto("mult iplic ar"))
      listaContextos.push(new Contexto("tre scuatr o"))
      listaExpresiones.push(ExpresionFactory.factoryMethod("n")) 
      listaExpresiones.push(ExpresionFactory.factoryMethod("o"))
      for(let j = 0; j < listaContextos.length; j++){
        let i = 0
        while(listaContextos[j].tipo==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i=i+1;
        }
        c.obtenerNuevoElemento(listaContextos[j])
      }
      expect(c.resultado).equal(79730);
    });
  });
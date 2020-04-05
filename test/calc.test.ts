import { expect } from "chai";
import { Calculador } from "../src/Calculadora";
import { AccionReceptor } from "../src/accionReceptor";
import { Traductor } from "../src/Traductor";
import Contexto from "../src/Contexto";
import { ExpresionNumerica } from "../src/ExpresionNumerica";
import { ExpresionOperacion } from "../src/ExpresionOperacion";


describe('Operar contexto', function() {
    it('Sumador', function() {
      const c = new Calculador();
      const ex = new ExpresionNumerica();
      const con1 = new Contexto("nuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenueve")
      const con2 = new Contexto("uno")
      ex.interpret(con1)
      ex.interpret(con2)
      expect(con1.valor + con2.valor).equal(100000000000000000000000);
    });
  });

  describe('Operar contexto', function() {
    it('Restador', function() {
      const c = new Calculador();
      const ex = new ExpresionNumerica();
      const con1 = new Contexto("cerounodostrescuatrocincoseissieteochonueve")
      const con2 = new Contexto("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ")
      ex.interpret(con1)
      ex.interpret(con2)
      expect(con1.valor - con2.valor).equal(-4531131124374652422);
    });
  });


  describe('Operar contexto', function() {
    it('Multiplicador', function() {
      const c = new Calculador();
      const ex = new ExpresionNumerica();
      const con1 = new Contexto("cerounodostrescuatrocincoseissieteochonueve")
      const con2 = new Contexto("  dos      ")
      ex.interpret(con1)
      ex.interpret(con2)
      expect(con1.valor * con2.valor).equal(246913578);
    });
  });


  describe('Operar contexto', function() {
    it('Divisor', function() {
      const c = new Calculador();
      const ex = new ExpresionNumerica();
      const con1 = new Contexto("cerounodostrescuatrocincoseissieteochonueve")
      const con2 = new Contexto("     dos        ")
      ex.interpret(con1)
      ex.interpret(con2)
      expect(con1.valor/ con2.valor).equal(61728394.5);
    });
  });

  describe('verifyNumber', function() {
    it('actionNumero', function() {
      const r = new AccionReceptor();
      expect(r.actionNumero("2")).equal("2");
    });
  });

  describe('verifyNumber', function() {
    it('actionNumero2', function() {
      const r = new AccionReceptor();
      r.actionNumero("1");
      expect(r.actionNumero("2")).equal("12");
    });
  });

  describe('verifyNumber', function() {
    it('actionNumero3', function() {
      const r = new AccionReceptor();
      r.actionNumero("1");
      r.actionNumero("2");
      r.actionNumero("3");
      expect(r.actionFinNumero()).equal("123");
    });
  });

  describe('verifyNumber', function() {
    it('actionNumero4', function() {
      const r = new AccionReceptor();
      r.actionNumero("1");
      for(let i = 0; i<22; i++){
        r.actionNumero("0");
      }
      expect(r.actionFinNumero()).equal("10000000000000000000000");
    });
  });


  describe('Traductor', function() {
    it('traducir cer', function() {
      const r = new Traductor();
      expect(r.traducirNumero("cer")).equal("0");
    });
  });


  describe('Traductor', function() {
    it('borrar blancos', function() {
      const r = new Traductor();
      expect(r.borrarBlancos("uno cero cero")).equal("unocerocero");
    });
  });

  
  describe('Traductor', function() {
    it('borrar 4', function() {
      const r = new Traductor();
      expect(r.borrarResto("cuatrocerocero", "4")).equal("cerocero");
    });
  });


  describe('Traductor', function() {
    it('traducir uno a 1', function() {
      const r = new Traductor();
      expect(r.traducirComando("uno")).equal("1");
    });
  });

  describe('Traductor', function() {
    it('traducir unocerocero a 100', function() {
      const r = new Traductor();
      expect(r.traducirComando("unocerocero")).equal("100");
    });
  });


  describe('Traductor', function() {
    it('traducir cerounodostrescuatrocincoseissieteochonueve a 0123456789', function() {
      const r = new Traductor();
      expect(r.traducirComando("cero uno dos tres cuatro cinco seis siete ocho nueve")).equal("0123456789");
    });
  });


  describe('Traductor', function() {
    it('traducir cuatrounotres a 1', function() {
      const r = new Traductor();
      expect(r.traducirComando("cuatrounotres")).equal("413");
    });
  });
  

  describe('Contexto', function() {
    it('normalizar contexto', function() {
      const r = new Contexto("cero uno uno ");
      expect(r.expresionAdaptada).equal("cerounouno");
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 0', function() {
      const r = new Contexto("cero");
      const ex = new ExpresionNumerica()
      ex.interpret(r)
      expect(r.valor).equal(0);
    });
  });
  

  describe('ExpresionNumerica', function() {
    it('traducir 100', function() {
      const r = new Contexto("uno cero cero");
      const ex = new ExpresionNumerica()
      ex.interpret(r)
      expect(r.valor).equal(100);
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 431', function() {
      const r = new Contexto("cuatrotresuno");
      const ex = new ExpresionNumerica()
      ex.interpret(r)
      expect(r.expresionTraducida).equal("431");
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 549', function() {
      const r = new Contexto("    cero cerocinco cuatro   nueve                           ");
      const ex = new ExpresionNumerica()
      ex.interpret(r)
      expect(r.valor).equal(549);
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 45311311', function() {
      const r = new Contexto("  cuatro cincotresunouno  tres uno uno");
      const ex = new ExpresionNumerica()
      ex.interpret(r)
      expect(r.valor).equal(45311311);
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 4531131124498109211', function() {
      const r = new Contexto("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ");
      const ex = new ExpresionNumerica()
      ex.interpret(r)
      expect(r.valor).equal(4531131124498109211);
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir 0123456789', function() {
      const r = new Contexto("cerounodostrescuatrocincoseissieteochonueve");
      const ex = new ExpresionNumerica()
      ex.interpret(r)
      expect(r.valor).equal(123456789);
    });
  });

  describe('ExpresionNumerica', function() {
    it('Mantener comando introducido', function() {
      const r = new Contexto("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ");
      const ex = new ExpresionNumerica()
      ex.interpret(r)
      expect(r.expresion).equal("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ");
    });
  });

  describe('ExpresionNumerica', function() {
    it('traducir operacion a undefined', function() {
      const r = new Contexto("  sumar ");
      const ex = new ExpresionNumerica()
      ex.interpret(r)
      expect(r.valor).equal(null);
    });
  });


  describe('ExpresionOperacion', function() {
    it('traducir suma', function() {
      const r = new Contexto("sumar");
      const ex = new ExpresionOperacion()
      ex.interpret(r)
      expect(r.expresionTraducida).equal("+");
    });
  });

  describe('ExpresionOperacion', function() {
    it('traducir resta', function() {
      const r = new Contexto("restar");
      const ex = new ExpresionOperacion()
      ex.interpret(r)
      expect(r.expresionTraducida).equal("-");
    });
  });

  describe('ExpresionOperacion', function() {
    it('traducir multiplicar', function() {
      const r = new Contexto("multiplicar");
      const ex = new ExpresionOperacion()
      ex.interpret(r)
      expect(r.expresionTraducida).equal("*");
    });
  });

  describe('ExpresionOperacion', function() {
    it('traducir dividir', function() {
      const r = new Contexto("dividir");
      const ex = new ExpresionOperacion()
      ex.interpret(r)
      expect(r.expresionTraducida).equal("/");
    });
  });

  describe('ExpresionOperacion', function() {
    it('traducir numero a ""', function() {
      const r = new Contexto("   unotres cero");
      const ex = new ExpresionOperacion()
      ex.interpret(r)
      expect(r.expresionTraducida).equal("");
    });
  });

  describe('Traducir Comandos', function() {
    it('traducir operacion', function() {
      let listaExpresiones = [];
      const r = new Contexto("dividir");
      listaExpresiones.push(new ExpresionNumerica()) 
      listaExpresiones.push(new ExpresionOperacion())
      let i = 0
      while(r.valor==null){
        listaExpresiones[i].interpret(r)
        i++;
      }
      expect(r.valor).equal("/");
    });
  });

  describe('Traducir Comandos', function() {
    it('traducir numero', function() {
      let listaExpresiones = [];
      const r = new Contexto("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ");
      listaExpresiones.push(new ExpresionNumerica()) 
      listaExpresiones.push(new ExpresionOperacion())
      let i = 0
      while(r.valor==null){
        listaExpresiones[i].interpret(r)
        i++;
      }
      expect(r.valor).equal(4531131124498109211);
    });
  });

  describe('Traducir Comandos', function() {
    it('traducir numeros y sumarlos', function() {
      let listaExpresiones = [];
      let listaContextos = [];
      listaContextos.push(new Contexto("nuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenueve")      ) 
      listaContextos.push(new Contexto("uno"))
      listaExpresiones.push(new ExpresionNumerica()) 
      listaExpresiones.push(new ExpresionOperacion())
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


  describe('Calculadora', function() {
    it('Suma', function() {
      let listaExpresiones = [];
      let listaContextos = [];
      listaContextos.push(new Contexto("nuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenueve")      ) 
      listaContextos.push(new Contexto("uno"))
      listaContextos.push(new Contexto("suma"))
      listaExpresiones.push(new ExpresionNumerica()) 
      listaExpresiones.push(new ExpresionOperacion())
      const c = new Calculador()
      for(let j = 0; j < 2; j++){
        let i = 0
        while(listaContextos[j].valor==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i++;
        }
      }
      c.obtenerNuevoOperando(listaContextos[0])
      c.obtenerNuevaOperacion(listaContextos[2])
      c.obtenerNuevaOperacion(listaContextos[1])
      c.realizarOperacion()
      expect(c.resultado).equal(100000000000000000000000);
    });
  });


  describe('Calculadora', function() {
    it('Resta', function() {
      let listaExpresiones = [];
      let listaContextos = [];
      listaContextos.push(new Contexto("nuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenueve")      ) 
      listaContextos.push(new Contexto("uno"))
      listaContextos.push(new Contexto("resta"))
      listaExpresiones.push(new ExpresionNumerica()) 
      listaExpresiones.push(new ExpresionOperacion())
      const c = new Calculador()
      for(let j = 0; j < 2; j++){
        let i = 0
        while(listaContextos[j].valor==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i++;
        }
      }
      c.obtenerNuevoOperando(listaContextos[0])
      c.obtenerNuevaOperacion(listaContextos[2])
      c.obtenerNuevaOperacion(listaContextos[1])
      c.realizarOperacion()
      expect(c.resultado).equal(99999999999999999999998);
    });
  });


  describe('Calculadora', function() {
    it('Multiplicacion', function() {
      let listaExpresiones = [];
      let listaContextos = [];
      listaContextos.push(new Contexto("nuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenueve")      ) 
      listaContextos.push(new Contexto("uno"))
      listaContextos.push(new Contexto("multiplicar"))
      listaExpresiones.push(new ExpresionNumerica()) 
      listaExpresiones.push(new ExpresionOperacion())
      const c = new Calculador()
      for(let j = 0; j < 2; j++){
        let i = 0
        while(listaContextos[j].valor==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i++;
        }
      }
      c.obtenerNuevoOperando(listaContextos[0])
      c.obtenerNuevaOperacion(listaContextos[2])
      c.obtenerNuevaOperacion(listaContextos[1])
      c.realizarOperacion()
      expect(c.resultado).equal(99999999999999999999999);
    });
  });


    describe('Calculadora', function() {
    it('Division', function() {
      let listaExpresiones = [];
      let listaContextos = [];
      listaContextos.push(new Contexto("nuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenuevenueve")      ) 
      listaContextos.push(new Contexto("uno"))
      listaContextos.push(new Contexto("dividido"))
      listaExpresiones.push(new ExpresionNumerica()) 
      listaExpresiones.push(new ExpresionOperacion())
      const c = new Calculador()
      for(let j = 0; j < 2; j++){
        let i = 0
        while(listaContextos[j].valor==null){
          listaExpresiones[i].interpret(listaContextos[j])
          i++;
        }
      }
      c.obtenerNuevoOperando(listaContextos[0])
      c.obtenerNuevaOperacion(listaContextos[2])
      c.obtenerNuevaOperacion(listaContextos[1])
      c.realizarOperacion()
      expect(c.resultado).equal(99999999999999999999999);
    });
  });
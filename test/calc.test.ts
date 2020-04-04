import { expect } from "chai";
import { Calculador } from "../src/Calculadora";
import { AccionReceptor } from "../src/accionReceptor";
import { Traductor } from "../src/Traductor";
import Contexto from "../src/Contexto";
import { ExpresionNumerica } from "../src/ExpresionNumerica";


describe('Operar contexto', function() {
    it('Sumador', function() {
      const c = new Calculador();
      const ex = new ExpresionNumerica();
      const con1 = new Contexto("cerounodostrescuatrocincoseissieteochonueve")
      const con2 = new Contexto("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ")
      ex.traducirContexto(con1)
      ex.traducirContexto(con2)
      expect(con1.valor + con2.valor).equal(4531131124621566500);
    });
  });

  describe('Operar contexto', function() {
    it('Restador', function() {
      const c = new Calculador();
      const ex = new ExpresionNumerica();
      const con1 = new Contexto("cerounodostrescuatrocincoseissieteochonueve")
      const con2 = new Contexto("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ")
      ex.traducirContexto(con1)
      ex.traducirContexto(con2)
      expect(con1.valor - con2.valor).equal(-4531131124374652422);
    });
  });


  describe('Operar contexto', function() {
    it('Multiplicador', function() {
      const c = new Calculador();
      const ex = new ExpresionNumerica();
      const con1 = new Contexto("cerounodostrescuatrocincoseissieteochonueve")
      const con2 = new Contexto("  dos      ")
      ex.traducirContexto(con1)
      ex.traducirContexto(con2)
      expect(con1.valor * con2.valor).equal(246913578);
    });
  });


  describe('Operar contexto', function() {
    it('Divisor', function() {
      const c = new Calculador();
      const ex = new ExpresionNumerica();
      const con1 = new Contexto("cerounodostrescuatrocincoseissieteochonueve")
      const con2 = new Contexto("     dos        ")
      ex.traducirContexto(con1)
      ex.traducirContexto(con2)
      expect(con1.valor/ con2.valor).equal(61728394.5);
    });
  });

  describe('calculate', function() {
    it('Restador', function() {
      const c = new Calculador();
      let result = c.resta(5, 2);
      expect(result).equal(3);
    });
  });

  describe('calculate', function() {
    it('Restador negativo', function() {
      const c = new Calculador();
      let result = c.resta(2, 5);
      expect(result).equal(-3);
    });
  });

  describe('calculate', function() {
    it('Multiplicador', function() {
      const c = new Calculador();
      let result = c.producto(5, 2);
      expect(result).equal(10);
    });
  });

  describe('calculate', function() {
    it('Multiplicador por 0', function() {
      const c = new Calculador();
      let result = c.producto(0, 2);
      expect(result).equal(0);
    });
  });

  describe('calculate', function() {
    it('Divisor', function() {
      const c = new Calculador();
      let result = c.division(451, 3);
      expect(result).equal(150);
    });
  });

  describe('calculate', function() {
    it('Divisor por 0', function() {
      const c = new Calculador();
      let result = c.division(451, 0);
      expect(result).equal(null);
    });
  });

  describe('calculate', function() {
    it('Divisor con a < b', function() {
      const c = new Calculador();
      let result = c.division(1, 20);
      expect(result).equal(0);
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

  describe('Expresion', function() {
    it('traducir 1', function() {
      const r = new Contexto("uno");
      const ex = new ExpresionNumerica()
      ex.traducirContexto(r)
      expect(r.valor).equal(1);
    });
  });
  

  describe('Expresion', function() {
    it('traducir 100', function() {
      const r = new Contexto("uno cero cero");
      const ex = new ExpresionNumerica()
      ex.traducirContexto(r)
      expect(r.valor).equal(100);
    });
  });

  describe('Expresion', function() {
    it('traducir 431', function() {
      const r = new Contexto("cuatrotresuno");
      const ex = new ExpresionNumerica()
      ex.traducirContexto(r)
      expect(r.expresionTraducida).equal("431");
    });
  });

  describe('Expresion', function() {
    it('traducir 549', function() {
      const r = new Contexto("    cero cerocinco cuatro   nueve                           ");
      const ex = new ExpresionNumerica()
      ex.traducirContexto(r)
      expect(r.valor).equal(549);
    });
  });

  describe('Expresion', function() {
    it('traducir 45311311', function() {
      const r = new Contexto("  cuatro cincotresunouno  tres uno uno");
      const ex = new ExpresionNumerica()
      ex.traducirContexto(r)
      expect(r.valor).equal(45311311);
    });
  });

  describe('Expresion', function() {
    it('traducir 4531131124498109211', function() {
      const r = new Contexto("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ");
      const ex = new ExpresionNumerica()
      ex.traducirContexto(r)
      expect(r.valor).equal(4531131124498109211);
    });
  });

  describe('Expresion', function() {
    it('traducir 0123456789', function() {
      const r = new Contexto("cerounodostrescuatrocincoseissieteochonueve");
      const ex = new ExpresionNumerica()
      ex.traducirContexto(r)
      expect(r.valor).equal(123456789);
    });
  });

  describe('Expresion', function() {
    it('Mantener comando introducido', function() {
      const r = new Contexto("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ");
      const ex = new ExpresionNumerica()
      ex.traducirContexto(r)
      expect(r.expresion).equal("  cuatro cincotresunouno  tres uno uno dos cuatrocuatro    nueveochounoceronueve  dos uno uno        ");
    });
  });

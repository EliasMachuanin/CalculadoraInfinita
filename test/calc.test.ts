import { expect } from "chai";
import { Calculador } from "../src/Calculadora";
import { AccionReceptor } from "../src/accionReceptor";

describe('calculate', function() {
    it('Sumador', function() {
      const c = new Calculador();
      let result = c.sumar(5, 2);
      expect(result).equal(7);
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
      expect(result).equal(151);
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

/*
  describe('CalculateString', function() {
    it('SumaString', function() {
      const r = new Calculador();
      expect(r.sumarStrings("15261775","998563")).equal("16260338");
    });
  });
*/
  
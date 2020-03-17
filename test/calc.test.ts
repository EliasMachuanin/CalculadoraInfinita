import { expect } from "chai";
import { Calculador } from "../src/Calculadora";

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
    it('Multiplicador', function() {
      const c = new Calculador();
      let result = c.producto(5, 2);
      expect(result).equal(10);
    });
  });

  describe('calculate', function() {
    it('Divisor', function() {
      const c = new Calculador();
      let result = c.division(451, 1);
      expect(result).equal(451);
    });
  });
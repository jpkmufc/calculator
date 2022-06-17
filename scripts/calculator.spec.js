const calculator = require('./calculator')

describe('Test Add', () => {
    test('Test add function', () => {
      expect(calculator.add(10,10)).toBe(20)
    });

    test('Test add function', () => {
        expect(calculator.add(-5,10)).toBe(5)
      });

    test('Test add function', () => {
        expect(calculator.add(10,5)).toBe(15)
      });

    test('Test add function', () => {
        expect(calculator.add(1,-9)).toBe(-8)
      });

    test('Test add function', () => {
        expect(calculator.add(0,10)).toBe(10)
      });

    test('Test add function', () => {
        expect(calculator.add(-9, -6)).toBe(-15)
      });
});

describe('Test subtract', () => {
    test('Test subtract function', () => {
      expect(calculator.subtract(10,10)).toBe(0)
    });

    test('Test subtract function', () => {
        expect(calculator.subtract(-5,10)).toBe(-15)
      });

    test('Test subtract function', () => {
        expect(calculator.subtract(10,5)).toBe(5)
      });

    test('Test subtract function', () => {
        expect(calculator.subtract(1,-9)).toBe(10)
      });

    test('Test subtract function', () => {
        expect(calculator.subtract(0,10)).toBe(-10)
      });

    test('Test subtract function', () => {
        expect(calculator.subtract(-9, -6)).toBe(-3)
      });
});

describe('Test multiply', () => {
    test('Test multiply function', () => {
      expect(calculator.multiply(10,10)).toBe(100)
    });

    test('Test multiply function', () => {
        expect(calculator.multiply(-5,10)).toBe(-50)
      });

    test('Test multiply function', () => {
        expect(calculator.multiply(10,5)).toBe(50)
      });

    test('Test multiply function', () => {
        expect(calculator.multiply(1,-9)).toBe(-9)
      });

    test('Test multiply function', () => {
        expect(calculator.multiply(0,10)).toBe(0)
      });

    test('Test multiply function', () => {
        expect(calculator.multiply(-9, -6)).toBe(54)
      });
});
describe('CaluculatorController', function() {
  var calc;

  beforeEach(function() {
    calc = new CalculatorController();
  });

  it('should initialize with zero', function() {
    expect(calc.display).toEqual('0.');
  });

  it('should process number keys', function() {
    calc.number(1);
    expect(calc.display).toEqual('1.');
    calc.number(2);
    expect(calc.display).toEqual('12.');
  });

  it('should process number keys after decimal', function() {
    calc.key('.');
    calc.number(0);
    calc.number(0);
    calc.number(0);
    expect(calc.display).toEqual('0.000');
    calc.number(1);
    calc.number(2);
    calc.number(3);
    expect(calc.display).toEqual('0.000123');
  });

  describe('divide', function() {
    it('should divide numbers using divide', function() {
      calc.number(2);
      calc.number(5);
      calc.number(6);
      calc.key('/');
      expect(calc.display).toEqual('256.');
      calc.number(2);
      expect(calc.display).toEqual('2.');
      calc.key('/');
      expect(calc.display).toEqual('128.');
      calc.key('/');
      expect(calc.display).toEqual('128.');
      calc.key('/');
      expect(calc.display).toEqual('128.');
      calc.key('=');
      expect(calc.display).toEqual('1.');
    });

    it('should divide numbers using equals', function() {
      calc.number(2);
      calc.number(5);
      calc.number(6);
      calc.key('/');
      calc.number(2);
      calc.key('=');
      expect(calc.display).toEqual('128.');
      calc.key('=');
      expect(calc.display).toEqual('64.');
    });

  });

  describe('divide', function() {
    it('should divid numbers', function(){
      calc.number(8);
      calc.key('/');
      calc.number(2);
      calc.key('=');
      expect(calc.display).toEqual('4.');
    });
  });

  describe('multiply', function() {
    it('should multiply numbers', function(){
      calc.number(8);
      calc.key('*');
      calc.number(2);
      calc.key('=');
      expect(calc.display).toEqual('16.');
    });
  });

  describe('add', function() {
    it('should multiply numbers', function(){
      calc.number(8);
      calc.key('+');
      calc.number(2);
      calc.key('=');
      expect(calc.display).toEqual('10.');
    });
  });

  describe('subtract', function() {
    it('should subtract numbers', function(){
      calc.number(8);
      calc.key('-');
      calc.number(2);
      calc.key('=');
      expect(calc.display).toEqual('6.');
    });
  });

  describe('subtract', function() {
    it('should subtract numbers', function(){
      calc.number(8);
      expect(calc.display).toEqual('8.');
      calc.negate();
      expect(calc.display).toEqual('-8.');
    });
  });


});

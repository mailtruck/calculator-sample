var OPERATION = {
  '*': function(a,b){ return a*b; },
  '/': function(a,b){ return a/b; },
  '+': function(a,b){ return a+b; },
  '-': function(a,b){ return a-b; }
};

function CalculatorController(){
  this.clear();
}

CalculatorController.prototype = {
  clear: function(){
    this.register = 0;
    this.setValue(0);
    this.updateDisplay();
    this.operation = null;
  },

  setValue: function(value){
    this.value = value;
    this.decimalPosition = null;
  },

  updateDisplay: function(value){
    value = value == undefined ? this.value : value;
    this.display = value.toString();
    if (!this.display.match(/\./)) {
      this.display += '.';
    }
    while(this.display.match(/\.(.*)/)[1].length + 1 < this.decimalPosition) {
      this.display += '0';
    }
    return value;
  },

  key: function(key) {
    switch(key){
      case '.':
        this.decimalPosition = this.decimalPosition || 1;
        break;
      case '*':
      case '/':
      case '+':
      case '-':
        if (this.operation && !this.operationApplied) {
          this.setValue(
              OPERATION[this.operation](this.register, this.value));
          this.updateDisplay();
          this.register = this.value;
          this.operationApplied = true;
        } else if (this.operation != key) {
          this.register = this.value;
          this.operation = key;
          this.setValue(0);
          this.operationApplied = false;
        }
        break;
      case '=':
        if(this.operation) {
          this.register = this.updateDisplay(
              OPERATION[this.operation](this.register, this.value));
          this.operationApplied = true;
        }
        break;
    }
  },

  negate: function(){
    this.value = -this.value;
    this.updateDisplay();
  },

  number: function(number){
    number = parseInt(number, 10);
    if (this.decimalPosition) {
      this.value = parseFloat(this.display + number);
      this.decimalPosition++;
    } else {
      this.value = this.value * 10 + number;
    }
    this.updateDisplay();
  }

};

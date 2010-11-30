function noop(){};

function CalculatorController(){
  this.clear();
}

CalculatorController.prototype = {
  clear: function(){
    this.value = 0;
    this.decimalPosition = null;
    this.operation = noop;
  },

  display: function(){
    var text = this.value.toString();
    if (!text.match(/\./)) {
      text += '.';
    }
    while(text.match(/\.(.*)/)[1].length + 1 < this.decimalPosition) {
      text += '0';
    }
    return text;
  },

  key: function(key) {
    var self = this;
    switch(key){
      case '.':
        this.decimalPosition = this.decimalPosition || 1;
        break;
      case '+':
        this.operation = function() {
          self.value += self.previousValue;
          self.previousValue = self.value;
        };
        this.previousValue = this.value;
        this.value = 0;
        break;
      case '=':
        this.operation();
        break;
    }
  },

  number: function(number){
    number = parseInt(number, 10);
    if (this.decimalPosition) {
      this.value = parseFloat(this.display() + number);
      this.decimalPosition++;
    } else {
      this.value = this.value * 10 + number;
    }
  }

};

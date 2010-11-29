function CalculatorController(){
  this.clear();
}

CalculatorController.prototype = {
  clear: function(){
    this.value = 0;
    this.decimalPosition = null;
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
    switch(key){
      case '.':
        this.decimalPosition = this.decimalPosition || 1;
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

var experess = require('express');
var app = experess.createServer();

app.configure(function(){
  app.use(experess.staticProvider(__dirname));
});

app.listen(3000);
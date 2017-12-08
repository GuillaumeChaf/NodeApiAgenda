var app = require('express')();

app.post('/addTodo', function(req, res){
  //...
});

app.get('/deleteTodo/:id', function(req, res){
  //...
  
});

app.get('/listToto/:start/:number', function(req, res){
  req.start
});
http.listen(3000, function(){
  console.log('listening on *:3000');
});

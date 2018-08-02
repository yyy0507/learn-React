var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname, 'views')));

// app.engine('html',hbs.__express);

//渲染一个index页面
app.get('/', function(req, res){
	res.render('index', {title: '第三题'});
})

app.get('/', (req, res) => {
  res.cookie('name','hcc')
  res.send(`<h1>hello world!</h1>`)
})
app.get('/', (req, res) => {
  res.send('<h1>hello world user!</h1>')
})

//设置node服务端口
app.set('port', 8080);
app.listen(8080, function(){
    console.log('node http server listening on port----' + 8080)
    
});
module.exports = app;

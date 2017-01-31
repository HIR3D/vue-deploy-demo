var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "./../"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);

var routerGeneralInfo = express.Router();              // get an instance of the express Router

routerGeneralInfo.get('/', function(req, res) {
    res.json({ name: 'Apple',
               nasdaq: 'AAPL',
               price: 121.85,
               change: '+1.88',
               CEO: 'Tim Cook'});   
});

app.use('/api', routerGeneralInfo);



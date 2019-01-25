
var httplocation = require('http')
var fs = require('fs')

httplocation.createServer(function(req, res){
res.writeHead(200, {'Content-Type':'text/html'})
res.write("<h1>Working with fs module</h1>")
fs.readFile('image1.jpg', function(err, data){
if(err){
throw err
}
res.write("<br>")
//console.log(data)
//res.write(data)
//res.writeHead(200, {'Content-Type':'image/jpg'})
res.write('<html><body><img src="data:image1/jpg;base64,')
res.write(Buffer.from(data).toString('base64'));
res.end('"/></body></html>');
})
}).listen(7788) 
 

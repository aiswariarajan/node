var dl= require('./library/datelib')

var httpVariable = require('http')

var server = httpVariable.createServer(didItNow)
function didItNow(myrequest,myresponse){
    myresponse.writeHead(200,{'Content-Type':'text/html'})
myresponse.write(dl.datelibrary())
myresponse.write(dl.stringlibrary())
myresponse.end()
}

server.listen(8888)

var http= require('http')
var url= require('url')
var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("<h1>Working with url params?</h1>")
    res.write("<hr>")

    var myQuery=req.url
    res.write("request from"+myQuery)
console.log("******************Request**********")
console.log(req)
    var myQuery2=url.parse(myQuery,true).query
    console.log(myQuery2)
    var q1=myQuery2.fname
    var q2=myQuery2.lname
    var q3= myQuery2.country

    res.write("<h4>Personal Details</h4>")
    res.write("<ol>")
    res.write("<li>"+q1+"</li>")
    res.write("<li>"+q2+"</li>")
    res.write("<li>"+q3+"</li>")
    res.write("</ol>")
    console.log("############response##############")
    res.end()
}).listen(1234)
//one way to execute http code

const http = require ('http'); // this http module use  start server and To use the HTTP server and client one must require
// const url = require('url'); // this module use for url parsing

const server = http.createServer((req, res)=>{ // Creaet an http server instance
            
    // req (request object) contain detail about that http request eg. req.method, req.url.
    // res (response object) its used to send back the http response to the client. eg res.write(data), res.end(data)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.writeHead(statusCode, headers): Set the status code and headers for the response.
    res.end("Hello world");
});

server.listen(3000,()=>{
    // its a server 3000 its start when we execute the code server 3000
    console.log('server is listening on port 3000');
});



// Another way to execute http server...

http.createServer(function (req, res){
    res.write('hello world'); //write rhe response
    res.end();  // end the response
})
.listen(8000); // server  is listening on port 8000

console.log('server is listening on port 8000'); // server is listening on port 8000

// http Headers
// its the response from the HTTP server is supposed to be displayed as HTML.
// HTTP headers are used to send additional information about the response to the client.
// HTTP headers are key-value pairs that are sent with the response.
// The key is the name of the header, and the value is the value of the header.

var http = require('http');
http.createServer(function (req, res) {
    //   hearder
    res.writeHead(200, {'Content-Type': 'text/html'});

  res.write('Hello World!');
  res.end();
}).listen(8080);


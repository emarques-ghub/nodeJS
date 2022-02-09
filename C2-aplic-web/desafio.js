var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response) {

    var result = url.parse(request.url, true);
    var path = result.path;

    switch (path) {
        case ('/artigos'):
        case ('/'):
            fs.readFile(__dirname + '/artigos.html', function(err, html) {
                response.write(html);
                response.end();     
            });
            break;
        case ('/contato'):
            fs.readFile(__dirname + '/contato.html', function(err, html) {
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(html);
                response.end();     
            });
            break;    
        default:
            fs.readFile(__dirname + '/erro.html', function(err, html) {
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(html);
                response.end();     
            });
            break;
    }
   
});

server.listen(3000, function(){
    console.log('Servidor site completo funcionando na porta 3000');
});
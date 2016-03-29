
/*
 * Cytonn Technologies
 *
 * @author: Hashim Amani <hamani@cytonn.com>
 *
 * Project: node.js
 *
 */



var http = require("http");
var emitter = require('events');
var fs = require('fs');
var querystring = require('querystring');
var url = require('url');

//http and query strings

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   //page will display entered elements in the textbox from the form
   var body = '<html>'+ '<head>'+ '<meta http-equiv="Content-Type" content="text/html; '+ 'charset=UTF-8" />'+ '</head>'+ '<body>'+ '<form action="/upload" method="get">'+ 'First Name:<input type="text" name="firstName">'+ '<br>'+' Second Name:<input type="text" name="secondName">'+ '<br>'+'<input type="submit" value="Submit" />'+ 

    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);

   
   
   //response.writeHead(200, {'Content-Type': 'text/html'});

   //create a query string that will get values in the url and displays them in the webpage

   //enter values in the text box


   var qs = querystring.parse(request.url.split("?")[1]),

   userName = qs.firstName + " " + qs.secondName,
   html="<!doctype html>" + "<html><head> <title>Hello " +userName + "</title></head>" + "<body><h1>Hello, " +userName + "</h1></body></html>";

   response.end(html);   

}).listen(7000);

console.log('Server running at http://127.0.0.1:7000/');





//other nodejs modules


//assynchronous
setTimeout(function(){
console.log('delay of 3 seconds');
}, 3000); /* Wait for 3000 milliseconds and print ‘delay of 3 seconds’ on console.*/
console.log('done');


//callbacks
function justprint(){
console.log('this is a callback');
}
setTimeout(justprint, 3000);
console.log('just remembering that this is async');


//event emmitters
emitter = new emitter.EventEmitter();
emitter.on('logThis', logger);
function logger(txt){
console.log(txt);
}
emitter.emit('logThis', 'Hashim');
emitter.emit('logThis', 'Amani');


//processes modules
process.on('exit', function(eCode){
setTimeout(function(){
console.log('Testing if an async function is executed.');
}, 1);
console.log('exiting due to', eCode);
});


//writable streams writes to source.txt
var writer = fs.createWriteStream('source.txt');
var chunk = 'write stream wrote me then readable stream read me.';
writer.write(chunk,'ascii',function(){
console.log('writing complete.');
});


//readable streams- reads from source.txt

var readStream = fs.createReadStream('source.txt');
readStream.setEncoding('ascii');
readStream.on('data', function(chunk) {
if (chunk !== null) {
console.log(chunk);
}
});
readStream.on('end', function(){
console.log('Finished Reading');
});

//url modules
var hyperlink = 'http://user:hashim@host.com:8080/p/a/t/h?query=string#hash';
var urlObject=url.parse(hyperlink);
console.dir(urlObject);
var urlString = url.format(urlObject);
console.dir(urlString);







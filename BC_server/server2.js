/*jaeha*/
//https://hongku.tistory.com/94
var http = require('http');
var fs = require('fs'); // 파일 읽기, 쓰기 등 을 할 수 있는 모듈


function send404Message(response) {
    response.writeHead(404, { "Content-Type": "text/plain" }); // 단순한 글자 출력 
    response.write("404 ERROR... ");
    response.end();
} // 200 Okay : 정상적인 요청 

function onRequest(request, response) {
    if (request.method == 'GET' && request.url == '/index') {
        response.writeHead(200, { "Content-Type": "text/html" }); // 웹페이지 출력 
        fs.createReadStream("../BC_client/views/index.html").pipe(response); // 같은 디렉토리에 있는 index.html를 response 함 
    }
    else if(request.method == 'GET' && request.url == '/about-us') {
        response.writeHead(200, { "Content-Type": "text/html" }); 
        fs.createReadStream("../BC_client/views/about-us.html").pipe(response); 

    }
    else if(request.method == 'GET' && request.url == '/blog-details') {
        response.writeHead(200, { "Content-Type": "text/html" }); 
        fs.createReadStream("../BC_client/views/blog-details.html").pipe(response); 

    }
    else if(request.method == 'GET' && request.url == '/blog') {
        response.writeHead(200, { "Content-Type": "text/html" }); 
        fs.createReadStream("../BC_client/views/blog.html").pipe(response); 
    }
    else if(request.method == 'GET' && request.url == '/contact') {
        response.writeHead(200, { "Content-Type": "text/html" }); 
        fs.createReadStream("../BC_client/views/contact.html").pipe(response); 
    }
    else if(request.method == 'GET' && request.url == '/fuck') {
        response.writeHead(200, { "Content-Type": "text/html" }); 
        fs.createReadStream("../BC_client/views/fuck.html").pipe(response); 
    }
    else if(request.method == 'GET' && request.url == '/items') {
        response.writeHead(200, { "Content-Type": "text/html" }); 
        fs.createReadStream("../BC_client/views/items.html").pipe(response); 
    }
    else if(request.method == 'GET' && request.url == '/login') {
        response.writeHead(200, { "Content-Type": "text/html" }); 
        fs.createReadStream("../BC_client/views/login.html").pipe(response); 
    }
    else if(request.method == 'GET' && request.url == '/trash') {
        response.writeHead(200, { "Content-Type": "text/html" }); 
        fs.createReadStream("../BC_client/views/trash.html").pipe(response); 
    }
    else {
        // file이 존재 하지않을때, 
        send404Message(response);
    }
}

http.createServer(onRequest).listen(3000);
console.log("Server Created...");

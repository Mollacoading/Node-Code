const http = require('http');
const fs = require('fs');
const port = 3110;
const host = "127.0.0.1";


const routeHandeler = (fileName, statusCode, req, res) =>{
    fs.readFile(fileName, (err, data)=>{
        if(err){
            console.log(err);
        }else{
            res.writeHead(statusCode, "utf-8", {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        }
    });
}



const myServer = http.createServer((req, res)=>{
    if(req.url === '/'){
        routeHandeler("./viwes/home.html", 200, req, res);
    }
    else if(req.url === '/about'){
        routeHandeler("./viwes/about.html", 200, req, res);
    }
    else{
        routeHandeler("./viwes/contact.html", 200, req, res);
    }
})
    ;
myServer.listen(port, host, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`This is my First Server and it is Running at http://${host}:${port}`)
    }
});
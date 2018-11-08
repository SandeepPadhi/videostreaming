/*


var express = require("express");
var app = new express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var path=require("path");

var port = process.env.port || 3000;

app.use(express.static(__dirname + "/public" ));

app.get('/in',function(req,res){
    //console.log("entered  index page...");
    var pth=path.join(__dirname,"/public/index.html");
    console.log("entered  index page...");

    res.send("videochat..!!!");
    //res.sendFile(pth);
    //res.redirect("index.html");
});

app.get("/emit",function(req,res){
    console.log("emit");
var pth=path.join(__dirname,"/public/emit.html");
    res.sendFile(pth);


});


app.get("/visualize",function(req,res){
    console.log("visualize");
    var pth=path.join(__dirname,"/public/visualize.html");
        res.sendFile(pth);
    
    
    });
    

var framecount=0;

io.on('connection',function(socket){
   console.log("user connected..!!");

   socket.on('join',function(data){
        socket.join(data.email);
        console.log("ENTERED:"+data.email);
        //var clients = io.sockets.clients();
        //console.log(clients);

        //io.sockets.in("sandeep").emit("stream","sandeep is connected...");
    });


    socket.on('stream',function(image){
        console.log("Streaming video image..!!!");
        
        //socket.broadcast.emit('stream',image).then(console.log("video send..!!1"));  
        //io.emit('stream',image);

   framecount=framecount+1;
   if(framecount%5==0){
        
        io.sockets.in(image.email).emit("stream",image);//here "sandeep"  represents room name..!!!
   }

        console.log("video send..!!!");
        
    });

});


/*var ip="192.168.0.106";


http.listen(port,ip,function(){
console.log("Server running at port "+ port);
});

*/
/*
const hostname = '0.0.0.0';


http.listen(port,hostname,function(){
    console.log("Server running at.. port "+ port);
    
    });



 */   



const http = require('http')
const url = require('url')

//const service = require('./service')

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {

  if (req.method === 'GET') {

    const path = url.parse(req.url).pathname.slice(1).replace(/%20/g, ' ')
    
    console.log("get methods]..!!");
    //res.writeHead(200, {'Content-Type': 'application/json'})    
    //res.write(JSON.stringify(service(path)));
    //res.write("Hello heroku from Sandeep..!!!");
    //res.write("Happy Diwali");
    //res.end();
  res.writeHead(200, {'Content-Type': 'application/html'})    

  res.sendFile("./public/index.html")
    

  }

}).listen(port, hostname, function(){
  console.log('Server running at http://${' + hostname + '}:${' + port + '}/');
})
const express = require("express");
const app =express();
const server =require("http").createServer(app);
const io = require("socket.io")(server);


let PORT = process.env.PORT || 7007 ;
const users = {};


app.set("view engine" ,"ejs");
app.set("views" , __dirname + "/views");
app.use(express.static("public"));

app.get("/" , (req , res)=>{

    res.render( "index" )
})



io.on("connection", socket =>{
    
    socket.on("newUser" , name=>{
        
        users[socket.id] = name;
        socket.broadcast.emit("connected", name)
    })
    
    socket.on("sendingMsg", data =>{
        
        socket.broadcast.emit("recivingMsg" , data)
    })

    socket.on("disconnect" , () =>{
        socket.broadcast.emit("loggedOut" , users[socket.id] )
    })
    
})






server.listen(PORT , ()=>{console.log("http://localhost:"+PORT)});

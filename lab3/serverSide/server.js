const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();



function enterPath(urPath){
    return path.join(__dirname, urPath);
}

let PORT = process.env.PORT || "7005";

var profileFileHTML= fs.readFileSync("../clientSide/profile.html").toString();
var JSONFile= "./clients.json";

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// GET

app.get("/index.html",(req,res)=>{
    res.sendFile(enterPath("../clientSide/index.html"));
 })
 app.get("/style.css",(req,res)=>{
     res.sendFile(enterPath("../clientSide/style.css"));  
 })
 app.get("/script.js",(req,res)=>{
     res.sendFile(enterPath("../clientSide/script.js"));  
 })
 app.get("/profile.html",(req,res)=>{
     res.sendFile(enterPath("../clientSide/profile.html"));
    
 })

 app.get("/serverSide/clients.json",(req,res)=>{
     res.sendFile(enterPath("../serverSide/clients.json")); 
 })


//  post 

app.post("/profile.html",(req,res,next)=>{

    Name = req.body["name"];
    Email = req.body["email"];
    Mobile = req.body["number"];
    Address = req.body["address"];
    
    profileFileHTML = profileFileHTML.replace("{Name}",Name)
    profileFileHTML = profileFileHTML.replace("{MobileNumber}",Email);
    profileFileHTML = profileFileHTML.replace("{Email}",Mobile);
    profileFileHTML = profileFileHTML.replace("{Address}",Address);

   
  let user = {
    Name,
    Email,
    Mobile,
    Address
  }

  let readJSON = fs.readFileSync(JSONFile,"utf-8");

  let jsonArray = [];
  
  if(readJSON === ""){

    jsonArray.push(user);
    fs.appendFileSync(JSONFile,JSON.stringify(jsonArray));

  }else{

    let jsonArray = fs.readFileSync(JSONFile,"utf-8");
    jsonArray = JSON.parse(jsonArray);

    jsonArray.push(user);
    fs.writeFileSync(JSONFile,JSON.stringify(jsonArray))
  }

  next();

},
(req,res)=>{
  
  res.send(profileFileHTML);

});


app.all("*",(req,res)=>{
    res.send("Page Not Found");
  })



app.listen(PORT, ()=>{
    console.log("http://localhost:" + PORT)
})
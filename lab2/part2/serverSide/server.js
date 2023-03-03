const http = require("http");
const fs = require("fs");

let MainFileHTML = fs.readFileSync("../clientSide/index.html").toString();
let ProfileFileHTML = fs.readFileSync("../clientSide/profile.html").toString();
let StyleCSS = fs.readFileSync("../clientSide/style.css").toString();
let ScriptFile = fs.readFileSync("../ClientSide/script.js").toString();
// let myIcon = fs.readFileSync("../ClientSide/favicon.ico");

var userName = "";

http.createServer((req,res)=>{
    //#region GET
    if(req.method == "GET"){
            switch(req.url){
                case "/index.html":
                    
                    res.setHeader("Access-Control-Allow-Origin","*");//MiddleWare ==> install ==> use
                    //CORS[Front xxx Back]
                    res.write(MainFileHTML);
                break;
                case "/profile.html":
                    res.setHeader("Access-Control-Allow-Origin","*");
                    res.write(ProfileFileHTML);
                break;
                case "/style.css":
                    res.writeHead(200,"Ok",{"content-type":"text/css"})
                    res.write(StyleCSS)
                break;
                case "/script.js":
                    res.writeHead(200,"Hii",{"content-type":"text/javascript"})
                    res.write(ScriptFile)
                break;
                
                default:
                    res.write("<h1>No Page Found</h1>")
                break;
            }
            res.end();
    }
    //#endregion
    //#region POST
    else if(req.method == "POST"){//url
        req.on("data",(data)=>{
            
            userName = data.toString().split(/[=&]+/);
        
            console.log(userName)
        })
        req.on("end",()=>{

            ProfileFileHTML = ProfileFileHTML.replace("{Hello}",`
            <div>HELLO</div>
            <div>Name: ${userName[1]}</div>
            <div>Phone Number: ${userName[3]}</div>
            <div>Email: ${userName[5]}</div>
            <div>Address: ${userName[7]}</div>
            
            `)
            ProfileFileHTML=ProfileFileHTML.replaceAll("+"," ");
            ProfileFileHTML=ProfileFileHTML.replace("%40","@");
            res.write(ProfileFileHTML)
            res.end();
        })
    }
   
    
}).listen("8000", ()=>{console.log("http://localhost:8000")})
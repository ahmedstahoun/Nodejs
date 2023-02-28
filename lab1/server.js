const http = require("http");
const fs = require("fs")
fs.writeFileSync("calc.txt","hello \n");


http.createServer((req,res)=>{
    if(req.url != "/favicon.ico"){
        var reqArray= req.url.split("/");
        var enteredNumbers = reqArray.length-2;
        var operation = reqArray[1];
        var numbers =[];
        var result = 0;

        for(i=2;i<=enteredNumbers;i++){
            numbers.push(Number(reqArray[i]));
        }

        switch(operation){
            case 'sum':
                for(let i = 0; i < numbers.length; i++){
                    result += numbers[i];
                }  
    
                break;

            case 'sub':
                result=numbers[0]; //to start 
                for(let i = 1; i < numbers.length; i++){
                    result -= numbers[i];
                }  
                
                break;
            case 'mult':
                {
                    result = 1;
        
                    for(let i = 0; i < numbers.length; i++){
                        result *= numbers[i];
                    } 
                    break;
                }
            case 'div':
                {
                    result = numbers[0];  
                    for(let i = 1; i < numbers.length; i++){
                        if(numbers[i] !== 0){
                            result /= numbers[i];
                        }
                        else{
                            result = "Infinity";
                        }     
                    } 
        
                    break;
                }

            default:
                {
                    result = "undefined operation";
                }
                break;
        }
        



        res.writeHead(200,{"content-type":"text/html"})
        fs.appendFileSync("calc.txt",`The Result Of ${operation} ${numbers} is ${result}\n`);
    }
    res.end(`<h1>The Result Of ${operation} ${numbers} = ${result}</h1>`);
}).listen("7000",
            ()=>{
                console.log("Lisining on Port 7000")
            }
       )

       
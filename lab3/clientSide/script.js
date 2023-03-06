var formInput = document.querySelector("#submitBtn");
var emailInp = document.querySelector("#emailInput");

var bodyedit = document.querySelector("#bodyEdit");


formInput.addEventListener("click",validateForm)


function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }

function validateForm(e) {
    var email = emailInp.value;
    

    var emailErr = true ; 
   
    
    // email validate
    if (email == "") {
        printError("emailErr", "Please enter your email address");
      } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
    
    
          printError("emailErr", "Please enter a valid email address");
        } else {
          printError("emailErr", "");
          emailErr = false;
        }
      }

   





      if ( emailErr  == true) {
        e.preventDefault();
        return false;
      } else {
        
        
        // console.log("login successfull");
       
      }
    
};
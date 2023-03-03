var myMod = require("./module")


console.log(myMod);// {myClass: ....}
let flightTickects = myMod.flightTickects;

let user1 = new flightTickects();
user1.addTicket(1,15,20,"KSA","EGYPT","15-10-2025");
user1.addTicket(2,25,15,"KSA","EGYPT","15-10-2022");


console.log(user1.displayTickets());

console.log(user1.getTicket(2));
user1.updateTicket(2,23,14,"frankfurt","egypt","15-2-2022");
console.log(user1.getTicket(2));


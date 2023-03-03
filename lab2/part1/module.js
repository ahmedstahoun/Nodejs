class flightTickects{
     tickets = [];
    addTicket(ticketID,seatNumber, flightNumber,deptAirport,arrivalAirport,travelDate){
        let ticket = {ticketID,seatNumber, flightNumber,deptAirport,arrivalAirport,travelDate};
        this.tickets.push(ticket);
    }
    displayTickets(){
        return this.tickets;

    }

    getTicket(ticketid){
        let result;
        for(let i=0;i<this.tickets.length;i++){
            if(this.tickets[i].ticketID==ticketid){
                result=this.tickets[i];
            }
        }
        return result;

    }
    
    updateTicket(ticketid,seatNumber, flightNumber,deptAirport,arrivalAirport,travelDate){
        for(let i=0;i<this.tickets.length;i++){
            if(this.tickets[i].ticketID==ticketid){
                console.log("hi from update");
                this.tickets[i].seatNumber=seatNumber;
                this.tickets[i].flightNumber=flightNumber;
                this.tickets[i].deptAirport=deptAirport;
                this.tickets[i].arrivalAirport=arrivalAirport;
                this.tickets[i].travelDate=travelDate;
            }
        }

    }


       
    }


module.exports = {
    flightTickects
}


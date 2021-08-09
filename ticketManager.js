const { EventEmitter }  = require('events') 

// Our class for pushing events . Other codes will be reading the event
class TicketManager extends EventEmitter{
    constructor(supply) {
        super();
        this.supply = supply;
    } 
    buy(email, price) {
        if (this.supply > 0){
            this.supply--;
            this.emit("buy", email, price, Date.now());
            return 
        }
        this.emit("error", new Error("There are no more tickets left to purchase"));
    }
} 

module.exports = TicketManager
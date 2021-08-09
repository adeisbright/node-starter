const TicketManager = require("./ticketManager") 

const ticketManager = new TicketManager(10) 

ticketManager.on("buy" , () => {
    console.log("Someone bought" , ticketManager.supply)
})

ticketManager.buy("adetight@email.com", 20);
ticketManager.buy("adetight@email.com", 20);
ticketManager.buy("adetight@email.com", 20);
ticketManager.once("buy", () => {
    console.log("Someone bought" , ticketManager.supply)
}); 
ticketManager.buy("adetight@email.com", 20); 
ticketManager.buy("adetight@email.com", 20);